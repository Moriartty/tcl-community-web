import ajax from 'utils/ajax';
import appAction from 'actions/app';
import moment from 'moment';

let actions = {};

actions.initAllChart = (country,time,value) => dispatch => {
    dispatch(actions.loadRegionData(country));
    dispatch(actions.loadSecondData(time,value));
    dispatch(actions.loadThirdData(time,value));
    dispatch(actions.loadFourthData(time,value));
    dispatch(actions.loadFifthData());
    dispatch(actions.loadSixthData());
}

actions.loadRegionData = (country) => (dispatch,getState) => {
    const preData = getState().dashboard3.regionMapCard;
    const data = [{}];
    let option = {
        'title.text':country||'world'
    };
    dispatch({type:'DASHBOARD3_REGIONMAPCARD_LOAD',data,option,mapJsonData: preData.mapJsonData});
    dispatch(appAction.loadRegion(country,'DASHBOARD3_REGIONMAPCARD_LOAD',{data:preData.data,option:preData.option}));
};

actions.loadSecondData = (time, value) => dispatch => {
    const year = time?time.substring(0,4):moment().year();
    const month = time?time.substring(4):moment().month();
    const days = new Date(year,month,0).getDate();
    let day;
    let timeList = [];
    for (let i = 1 ; i <= days ; i++){
        day = i < 10 ? '0'+i : i;
        timeList.push(year + '-' + month + '-' + day);
    }
    let data = getRandomNum(value * 1000, days);

    let option = {
        'title.show':false,
        'title.text':year+'年'+month+'月ROM的激活量(千)',
        'title.left':'left',
        'title.padding':[10,0],
        'title.textStyle':{
            color:'black'
        },
        'xAxis.data':timeList,
        'xAxis.nameTextStyle.color':'black',
        'xAxis.axisLabel.rotate': -45,
        grid: {
            left: '2%',
            right: '4%',
            bottom: '4%',
            top:'3%',
            containLabel: true
        },
        backgroundColor:'rgba(0, 0, 0, 0)'
    };

    dispatch({type:'DASHBOARD3_SECONDCARD_LOAD',option,data:[data]});
};

actions.loadThirdData = (time, value) => dispatch => {
    const year = time?time.substring(0,4):moment().year();
    const month = time?time.substring(4):moment().month();
    const productList = ['A1X','A3','A3A TMO','Pepito VDF', 'A5','Curie', 'A3A 8 4G', 'A70A XL TMO', 'PEPITO VZW', 'U50A PLUS TMO',
        'A30A TMO', 'U3A 7 3G', 'N4', 'A70A XL MPCS'
    ];
    let option = {
        'title.show':false,
        'title.text':year+'年'+month+'月各产品ROM的激活量(千)',
        'title.left':'left',
        'title.padding':[10,0],
        'title.textStyle':{
            color:'black'
        },
        'xAxis.data':productList,
        'xAxis.nameTextStyle.color':'black',
        'xAxis.axisLabel.rotate': -45,
        grid: {
            left: '2%',
            right: '7%',
            bottom: '4%',
            top:'3%',
            containLabel: true
        },
        backgroundColor:'rgba(0, 0, 0, 0)'
    };
    let data = getRandomNum(value*1000, productList.length);

    dispatch({type:'DASHBOARD3_THIRDCARD_LOAD',option,data});
};

actions.loadFourthData = (time, value) => dispatch => {
    const year = time?time.substring(0,4):moment().year();
    const month = time?time.substring(4):moment().month();
    const distributionChannel = ['电商平台','线下门店','运营商'];
    let data = getRandomNum(value*1000, distributionChannel.length);
    let seriesData = [];
    distributionChannel.forEach(function (item, index) {
        seriesData.push({value: data[index], name: item})
    });
    let option = {
        'title.text':year+'年'+month+'月各销售渠道ROM的激活量(千)',
        'title.left':'left',
        'title.padding':[10,0],
        'title.textStyle':{
            color:'black'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:distributionChannel
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:seriesData
            }
        ],
        backgroundColor:'rgba(0, 0, 0, 0)'
    };

    dispatch({type:'DASHBOARD3_FOURTHCARD_LOAD',option,data});
};

actions.loadFifthData = () => dispatch => {
    let title = '设备';
    let modelOption = {
        'title.text':'型号',
        'title.x':'left',
        legendData: ['(not set)', 'VFD 620', 'VFD 720','其他'],
        'yAxis.type':'category',
        'yAxis.data':['周一'],
        backgroundColor: 'rgba(0, 0, 0, 0)',
    };

    let versionOption = {
        'title.text':'操作系统版本',
        'title.x':'left',
        legendData: ['android 8.1', 'android 7.0', 'android 8.0', '其他'],
        'yAxis.type':'category',
        'yAxis.data':['周一'],
        backgroundColor: 'rgba(0, 0, 0, 0)',
    };
    let modelData = [];
    let versionData = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 1; j++) {
            if (!modelData[i]) { modelData[i] = []; }
            if (!versionData[i]) { versionData[i] = []; }
            modelData[i].push((123*(4-i)));
            versionData[i].push((123*(4-i)));
        }
    }
    dispatch({type:'DASHBOARD3_FIFTHCARD_LOAD',title,modelOption,versionOption,modelData,versionData});
};

actions.loadSixthData = () => dispatch => {
    let title = '受众特征';
    let sexOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            y:'bottom',
            itemGap:50,
            data:['男','女']
        },
        title:{
            text:'性别',
            x:'left',
            textStyle: {
                color:'black',
                fontWeight:'normal',
                fontSize:14
            }
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'男'},
                    {value:234, name:'女'}
                ]
            }
        ]
    };

    let ageOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        title:{
            text:'年龄',
            textStyle:{
                color:'black',
                fontSize:14,
                fontWeight: 'normal'
            }
        },
        legend: {
            data: ['男', '女']
        },
        grid: {
            top:'30',
            left: '0%',
            right: '3%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['65+','55-64','45-54','35-44','25-34','18-24']
        },
        series: [
            {
                name: '男',
                type: 'bar',
                data: [0.05, 0.15, 0.25, 0.35, 0.15, 0.25]
            },
            {
                name: '女',
                type: 'bar',
                data: [0.15, 0.25, 0.35, 0.15, 0.05, 0.45]
            }
        ]
    };
    dispatch({type:'DASHBOARD3_SIXTHCARD_LOAD',title,sexOption,ageOption});
};

/**
 * 将一个数随机拆分成几个数
 * @param num 总数
 * @param times 拆分的个数
 * @returns *[] 拆分的结果数组
 */
function getRandomNum(num, times) {
    let res = [];
    if (times === 1) {
        res.push(num/1000);
        return res;
    }
    let max = num / times * 1.5;
    let min = num / times * 0.5;
    let current = ~~(Math.random() * (max-min) + min);
    // let current = Math.random()*max
    res.push(current / 1000);
    return res.concat(getRandomNum(num - current, --times));
}



export default actions;