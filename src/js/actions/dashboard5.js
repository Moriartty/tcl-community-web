import ajax from 'utils/ajax';
import appAction from 'actions/app';

let actions = {};

actions.loadRegionData = (country) => (dispatch,getState) => {
    const state = getState().dashboard5;
    const preData = state.regionMapCard;
    const data = [{}];
    let option = {
        'title.show':false,
        'title.left':'left',
        'title.top':'top',

        'visualMap.left':'left',
    };
    dispatch({type:'DASHBOARD5_REGIONMAPCARD_LOAD',data,option,mapJsonData: preData.mapJsonData});
    dispatch(appAction.loadRegion(country,'DASHBOARD5_REGIONMAPCARD_LOAD',{data:preData.data,option:preData.option}))
}

actions.loadSecondData = (exData) => dispatch => {
    const productList = ['A1X','A3','A3A TMO','Pepito VDF', 'A5','Curie', 'A3A 8 4G', 'A70A XL TMO', 'PEPITO VZW', 'U50A PLUS TMO',
        'A30A TMO', 'U3A 7 3G', 'N4', 'A70A XL MPCS'
    ];
    let option = {
        // 'title.text':exData?'各产品在'+exData.tag+'的'+exData.gender+'人群中的分布情况':'',
        // 'title.left':'left',
        // 'title.padding':[10,0],
        // 'title.textStyle':{
        //     color:'black'
        // },
        'title.show':false,
        'xAxis.data':productList,
        'xAxis.nameTextStyle.color':'black',
        'xAxis.axisLabel.rotate': -45,
        yAxis:{
            axisLabel:{
                color:'black'
            }
        },
        grid:{
            top:'2%',
            left: '3%',
            right: '3%',
            bottom: '1%',
            containLabel: true
        },
        backgroundColor:'rgba(0, 0, 0, 0)'
    };
    let data = []
    productList.forEach(function(){
        data.push(parseInt(Math.random()*2000+1000));
    })

    dispatch({type:'DASHBOARD5_SECONDCARD_LOAD',option,data});
}


actions.loadThirdData = () => dispatch => {
    const mockData = []
    const dateList = ["201807","201808","201809","201810","201811","201812"];
    dateList.forEach((o)=>{
        mockData.push({
            'date':o,
            number:parseInt(Math.random()*5000+10000)
        })
    })
    const option = {
        'xAxis.data': mockData.map((o)=>{return o.date}),
        'title.text':'',
        'title.show':false,
        'yAxis.axisLabel.rotate': 45,
        backgroundColor:'rgba(0, 0, 0, 0)',
        grid: {
            top:'2%',
            left: '2%',
            right: '4%',
            bottom: '5%',
            containLabel: true
        },
    };
    let data = [];
    for (let i = 0; i < mockData.length; i++) {
        data.push(mockData[i].number)
    }
    dispatch({type:'DASHBOARD5_THIRDCARD_LOAD',option,data:[data]});
}

actions.loadFourthData = (exData) => dispatch => {
    const mockData = [
        {tag:'爱美食',value:['BestCooking','KitchenStory','YHouse','TasteIt','DaydayCoke']},
        {tag:'爱运动',value:['SportHome','RunDay','MySport','HealthStyle','RunningRabbit']},
        {tag:'爱科技',value:['Evernote','CamScanner','RICEPO','Transit Chicago','Waze']},
        {tag:'爱音乐',value:['Google Music','MusicDa0y','Soundworld']},
        {tag:'爱购物',value:['Amazon','Tmall','Taobao']}
    ]
    var result = mockData.filter((o)=>{
        if(o.tag===exData.tag)
            return true;
    })[0];
    var seriesData = result.value.map((o,i,arr)=>{
        return {name:o,value:parseInt(Math.random()*100+100)}
    })
    var data = ['a'];
    let option = {
        // 'title.text':'test',
        'title.left':'left',
        'title.padding':[10,0],
        'title.textStyle':{
            color:'black'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:result.value
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
                            fontSize: '20',
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

    dispatch({type:'DASHBOARD5_FOURTHCARD_LOAD',option,data});
}



export default actions;