import ajax from 'utils/ajax';
import {getCountryName,getAllCountries} from "utils";
import moment from 'moment';
import appAction from 'actions/app';
let actions = {};


actions.getActivityCount = () => dispatch =>{
    ajax.get('/report/getActivityCount?packageName=flink-com.tclhz.gallery').then((data)=>{
        dispatch({type:'HOME_ACTIVITY_COUNT_LOAD',data});
    })
}

actions.toggleMap = (key) => dispatch => {
    dispatch({ type: 'HOME_TOGGLE_MAP', mapType: key });
};

const productList = ['A1X','A3','A5','Pepito VDF', 'Curie', 'A3A 8 4G', 'Pepito VZM', 'U50A PLUS TMO',
    'A3A TMO', 'U3A 7 3G', 'N4', 'A70A XL MPCS'];
actions.loadBubble = (product) => dispatch => {
    const temp = ['Pepito VDF', 'Curie', 'A3A 8 4G', 'A70A XL TMO', 'PEPITO VZW', 'U50A PLUS TMO',
        'A30A TMO', 'U3A 7 3G', 'N4', 'A70A XL MPCS', 'U3A 10 KD', 'U3A PLUS VDF', 'A5X', 'A3A 8 4G TMO',
        'U50A PLUS ATT', 'Tiger C', 'U50A PLUS TF', 'U50A ATT', 'GFLIP2 TF', 'A3A PLUS', 'B-LUNA', 'U3A 7 3G VDF',
        'A3A XL 4G', 'U3A 10 WIFI', 'U3A 7 WIFI', 'Mickey6T GC', 'A3A VF', 'U5A PLUS VF', 'Tiger V', 'U3A Plus 4G',
        'A3A', 'Pixi4-4 C', 'A5A INFINI', 'Handy-T2', 'B-ATHENA', 'B-ATHENA CN', 'Tiger A', 'U5A PLUS 3G', 'U5A PLUS 4G'
    ];
    const ratio = document.body.clientWidth>=1280?2:1.6;
    const mainPageW = 3*document.body.clientWidth/4;
    const mainPageH = 2*document.body.clientHeight/3-40;
    let data = [];
    let curX = 0,curY = 50*ratio;
    productList.forEach(function (o, i) {
        var temp = [];
        // let size = (Math.random() * 30 + 20)*ratio;
        const size = 40*ratio;
        // let x = curX;
        // let y = Math.sqrt(curX);
        // curX += 100;
        let x = curX;
        let y = parseInt(Math.random()*5000+2000);
        curX += 20;
        // console.log(moment().add(-x,'day').format('YYYY-MM-DD'));
        if(o.indexOf(product)>-1){
            if(productList.indexOf(o)>-1)
                temp.push([moment().add(-x,'day').format('YYYY-MM-DD'), y, size, o,true,require('img/'+o+'.png')]);
            else
                temp.push([moment().add(-x,'day').format('YYYY-MM-DD'), y, size, o,true]);
        }
        else{
            if(productList.indexOf(o)>-1)
                temp.push([moment().add(-x,'day').format('YYYY-MM-DD'), y, size, o,false,require('img/'+o+'.png')]);
            else
                temp.push([moment().add(-x,'day').format('YYYY-MM-DD'), y, size, o,false]);
        }
        data.push(temp);
        //temp[4]标识是否被查询选中，temp[5]标识图片资源
    });
    dispatch({ type: 'HOME_BUBBLE_DATA', data: data });
};

actions.refreshBubble = (product,chartData) => dispatch => {
    chartData.data.forEach((o,i)=>{
        if(product&&o[0][3].indexOf(product)>-1)
            o[0][4] = true;
        else
            o[0][4] = false;
    })
    dispatch({ type: 'HOME_REFRESHBUBBLE_DATA', chartData });
};

actions.loadMap = () => (dispatch,getState) => {
    // ajax.get('/report/device-report/getDeviceActiveOfDay',{}).then(data=>{
    //     console.log(data);
    // })
    let data = [];
    ajax.get('/report/getAppDistribution',{
        packageName:'com.tclhz.gallery',
        topK:10,
        fieldName:'appVersion',
        fieldValue:'v8.2.T.0.T060.0'}).then(obj=>{
            let temp = {};
            getAllCountries().forEach(o=>{temp[o] = {name:o,value:0,selected:false};});
            console.log('temp',temp);
            obj.forEach(o=>{
                const countryName = getCountryName(o.countryNo);
                if(countryName)
                    temp[countryName].value = o.counts*80+parseInt(Math.random()*1000)
            });
            const preData = getState().home.mapChartData
            let option = {
                type:'map',
                title:{
                    show:false
                },
                visualMap:{
                    min: 0,
                    max: 110000*80,
                    splitNumber: 10,
                    inRange: {
                        color: ['#e6f7ff','#91d5ff','#40a9ff','#1890ff','#096dd9','#0050b3','#003a8c','#002766']
                    },
                    textStyle: {
                        color: '#fff'
                    },
                    calculable: true,
                    itemHeight:'150px',
                    show:true
                },
                useGeo:false
            }
            dispatch({type:'HOME_MAP_DATA',option,mapJsonData: preData.mapJsonData,data:temp});
    })
    // dispatch(appAction.loadRegion('world','HOME_MAP_DATA',{option:preData.option}));
    // dispatch({type:'HOME_MAP_DATA',option});
}

actions.refreshMap = (pre,cur) => (dispatch,getState) => {
    const preData = getState().home.mapChartData.data;
    let data = JSON.parse(JSON.stringify(preData));
    data[pre].selected = false;
    data[cur].selected = true;
    console.log(pre,cur)
    console.log('data',data[cur])
    dispatch({type:'HOME_MAP_DATA',data});
}

actions.loadFirstChart = (country) => dispatch => {
    var dataMap = {};
    function dataFormatter (obj) {
        var pList = ['爱美食', '爱运动', '爱科技', '爱音乐', '爱购物'];
        var temp;
        for (var year = 20; year <= 60; year += 10) {
            var max = 0;
            var sum = 0;
            temp = obj[year];
            for (var i = 0, l = temp.length; i < l; i++) {
                max = Math.max(max, temp[i]);
                sum += temp[i];
                obj[year][i] = {
                    name: pList[i],
                    value: temp[i]
                };
            }
            obj[year + 'max'] = Math.floor(max / 100) * 100;
            obj[year + 'sum'] = sum;
        }
        return obj;
    }

    let s = country ? 1 : 8;
    let temp = [20, 30, 40, 50, 60]; let pi = {}; let si = {};
    temp.forEach(function (o) {
        pi[o] = [];
        si[o] = [];
        for (let i = 0; i < 5; i++) {
            const base = 1000,LDetla = 2000,NDetla = 1000,SDetla = 500;
            if(i==0||i==4){
                pi[o].push(parseInt((Math.random() * base) + SDetla) * s);
                si[o].push(parseInt((Math.random() * base) + LDetla) * s);
            }else{
                pi[o].push(parseInt((Math.random() * base) + NDetla) * s);
                si[o].push(parseInt((Math.random() * base) + NDetla) * s);
            }
        }
    });
    dataMap.dataPI = dataFormatter(pi);
    dataMap.dataSI = dataFormatter(si);

    let option = {
        baseOption: {
            timeline: {
                // y: 5,
                bottom: -10,
                axisType: 'category',
                symbolSize: 8,
                // realtime: false,
                // loop: false,
                autoPlay: true,
                // currentIndex: 2,
                playInterval: 2000,
                controlStyle: {
                    position: 'left',
                    // showPlayBtn:false,
                    showPrevBtn: false,
                    showNextBtn: false
                },
                data: [
                    '20', '30', '40', '50', '60'
                ],
                // padding:[20,0],
                label: {
                    formatter: function (s) {
                        return s;
                    },
                    padding: [10, 0]
                }
            },
            title: {
                padding: [10, 10],
                subtext: country,
                subtextStyle: {
                    fontWeight: 'bold'
                }
            },
            tooltip: {
            },
            color: ['#13c2c2', '#1890ff'],
            legend: {
                x: 'center',
                data: ['女性', '男性'],
                padding: [15, 10]
            },
            calculable: true,
            grid: {
                left: '18%',
                right: '5%',
                top: 80,
                // bottom: 70,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value.replace('\n', '');
                            }
                        }
                    }
                }
            },
            xAxis: [
                {
                    'type': 'category',
                    'axisLabel': {
                        'interval': 0,
                        // rotate:-30,
                        fontSize: 10
                    },
                    'data': ['爱美食', '爱运动', '爱科技', '爱音乐', '爱购物'],
                    splitLine: { show: false }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '人数(千)'
                }
            ],
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            series: [
                { name: '男性', type: 'bar' },
                { name: '女性', type: 'bar' },
                {
                    name: '男女比例',
                    type: 'pie',
                    center: ['80%', '20%'],
                    radius: '20%',
                    z: 100,
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            },
                            smooth: 0.2,
                            length: 3,
                            length2: 7
                        }
                    }
                }
            ]
        },
        options: [
            {
                title: { text: '20~30岁' },
                series: [
                    { data: dataMap.dataPI['20'] },
                    { data: dataMap.dataSI['20'] },
                    { data: [
                            { name: '男性', value: dataMap.dataPI['20sum'] },
                            { name: '女性', value: dataMap.dataSI['20sum'] }
                        ] }
                ]
            },
            {
                title: { text: '30~40岁' },
                series: [
                    { data: dataMap.dataPI['30'] },
                    { data: dataMap.dataSI['30'] },
                    { data: [
                            { name: '男性', value: dataMap.dataPI['30sum'] },
                            { name: '女性', value: dataMap.dataSI['30sum'] }
                        ] }
                ]
            },
            {
                title: { text: '40~50岁' },
                series: [
                    { data: dataMap.dataPI['40'] },
                    { data: dataMap.dataSI['40'] },
                    { data: [
                            { name: '男性', value: dataMap.dataPI['40sum'] },
                            { name: '女性', value: dataMap.dataSI['40sum'] }
                        ] }
                ]
            },
            {
                title: { text: '50~60岁' },
                series: [
                    { data: dataMap.dataPI['50'] },
                    { data: dataMap.dataSI['50'] },
                    { data: [
                            { name: '男性', value: dataMap.dataPI['50sum'] },
                            { name: '女性', value: dataMap.dataSI['50sum'] }
                        ] }
                ]
            },
            {
                title: { text: '60岁以上' },
                series: [
                    { data: dataMap.dataPI['60'] },
                    { data: dataMap.dataSI['60'] },
                    { data: [
                            { name: '男性', value: dataMap.dataPI['60sum'] },
                            { name: '女性', value: dataMap.dataSI['60sum'] }
                        ] }
                ]
            }
        ]
    };
    dispatch({ type: 'HOME_FIRST_DATA', option });
};
actions.loadSecondChart = () => dispatch => {
    ajax.get('/report/index/getPainSpotList',{}).then(backData=>{
        const option = {
            title: '用户痛点',
            legendData: [],
            color:['#003a8c','#0050b3','#096dd9','#1890ff','#40a9ff','#69c0ff','#91d5ff'].reverse()
        };
        option.legendData = backData.map((o,i)=>{
            return o.name;
        })
        const data = backData.map((o,i)=>{
            return {value:o.count,name:o.name};
        })
        dispatch({ type: 'HOME_SECOND_DATA', data, option });
    })
    // let temp = ['内存不足', '屏幕分辨率低', '手机死机', '信号差', '续航短', '屏幕黑屏', '经常闪退', '触屏不灵敏', '音质差', '手机发烫'];
    // const option = {
    //     title: '用户痛点',
    //     legendData: []
    // };
    // let start = Math.floor(Math.random() * 10);
    // for (let i = 0; i < 5; i++) {
    //     option.legendData.push(temp[(start + i * 2) % 10]);
    // }
    // const data = [
    //     { value: Math.random() * 400, name: option.legendData[0] },
    //     { value: 310, name: option.legendData[1] },
    //     { value: 235, name: option.legendData[2] },
    //     { value: 274, name: option.legendData[3] },
    //     { value: 400, name: option.legendData[4] }
    // ];
    // dispatch({ type: 'HOME_SECOND_DATA', data, option });
};
actions.loadThirdChart = () => dispatch => {
    const mockData = [
        {
            "date":"201807",
            "number":17147.679
        },
        {
            "date":"201808",
            "number":20070.311
        },
        {
            "date":"201809",
            "number":23233.126
        },
        {
            "date":"201810",
            "number":27247.839
        },
        {
            "date":"201811",
            "number":31242.064
        },
        {
            "date":"201812",
            "number":32143.064
        },
        {
            "date":"201901",
            "number":32990.85
        },
        {
            "date":"201902",
            "number":34141.668
        },
        {
            "date":"201903",
            "number":35524.002
        },
        {
            "date":"201904",
            "number":37105.185
        }
    ]
    const option = {
        'xAxis.data': mockData.map((o)=>{return o.date}),
        'title.text':'半年内ROM激活量(千)',
        'yAxis.axisLabel.rotate': 45,
        // 'xAxis.axisLabel.rotate': 45,
        // area: {}
    };
    let data = [];
    for (let i = 0; i < mockData.length; i++) {
        data.push(mockData[i].number)
    }
    dispatch({ type: 'HOME_THIRD_DATA', data: [data], option });
};

//horizontal-stack-bar
actions.loadFourthChart = (country) => dispatch => {
    let option = {
        'title.text':'使用习惯（日）',
        'title.subText':country,
        legendData: ['阅读', '看视频', '游戏', '购物'],
        'yAxis.type':'category',
        'yAxis.data':['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    };
    let data = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 7; j++) {
            if (!data[i]) { data[i] = []; }
            data[i].push((Math.random() * 2).toFixed(1) + 1);
        }
    }
    data.sort((o1, o2) => {
        // console.log(o1,o1.reduce((i1,i2)=>{return i1+i2}));
        if (o1.reduce((i1, i2) => { return i1 + i2; }) > o2.reduce((i3, i4) => { return i3 + i4; })) { return 1; } else { return -1; }
    });

    dispatch({ type: 'HOME_FOURTH_DATA', data, option });
};
actions.loadFifthChart = () => dispatch => {
    return ajax.get('/getProducts',{}).then(list=>{
        const option = {
            'title.text':'ROM APP每日使用时长排行(分钟)',
            // subTitle: moment(new Date()).format('YYYY-MM-DD'),
            // legendData: [moment(new Date())],
            yAxis: {},
            'xAxis.axisLabel.rotate': -45,
            color:'#40a9ff'
        };
        let data = [];
        let x = [];
        for (let i = 0; i < 17; i++) {
            data.push((Math.random() * 11).toFixed(1));
            x.push(list[i]);
        }
        option['xAxis.data'] = x;

        data.sort((o1, o2) => {
            if (o1 - o2>0) { return -1; } else { return 1; }
        });
        list.sort(() => { return Math.random() > 0.5 ? -1 : 1; });
        dispatch({ type: 'HOME_FIFTH_DATA', data, option });
    })
};


export default actions;