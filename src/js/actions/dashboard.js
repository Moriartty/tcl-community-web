import ajax from 'utils/ajax';
import moment from 'moment';
import {Icon} from 'antd';
import React from "react";
import {isEmpty} from "utils"

let actions = {};

/**
 * 从有数据开始，往后找第一个零的位置，把此位置后的数据都删了
 * @param array
 * @param key
 * @returns {*}
 */
function arrayFilter(array,key){
    const preIndex = array.findIndex(o=>~~o[key]>0);
    const lastIndex = array.findIndex((o,i)=>{
        if(~~o[key]==0&&i>preIndex)
            return true;
        return false;
    })
    return lastIndex==-1?array:array.slice(0,lastIndex);
}

/**
 * 只删空数据
 * @param array
 * @param key
 * @returns {*}
 */
function arrayFilter2(array,key){
    const preIndex = array.findIndex(o=>~~o[key]>0);
    array.forEach((o,i)=>{
        if(~~o[key]==0&&i>preIndex)
            array.splice(i,1);
    })
    return array;
}



/**
 * 插入假数据
 * @returns {function(*): *}
 */
function arrayFilter3(array,key){
    const preIndex = array.findIndex(o=>~~o[key]>0);
    if(preIndex==-1)
        return array;
    else{
        for(let i=preIndex+1;i<array.length;i++){
            const preVal = array[i-1][key];
            if(array[i][key]==0)
                array[i][key] = preVal;
        }
        return array;
    }
}

actions.loadProducts = () => dispatch => {
    return ajax.get('/getProducts',{}).then(list=>{
        dispatch({type:'DASHBOARD_PRODUCT_LOAD',list:list.map((o,i)=>{
            return {id:o,name:o};
            })});
    })
}

actions.loadAppVersions = () => dispatch => {
    return ajax.get('/report/com.tclhz.gallery/getAppVersionList',{}).then(data=>{
        dispatch({
            type:'DASHBOARD_APPVERSION_LOAD',
            list:Object.keys(data.appVersionList).map(o=>{
                return {id:data.appVersionList[o],name:data.appVersionList[o]}
            })
        })
    })
}

actions.refreshPage = () => dispatch => {
    dispatch(actions.loadFirstChart());
    dispatch(actions.loadSecondChart());
    dispatch(actions.loadThirdChart());
    dispatch(actions.loadFourthChart());
    dispatch(actions.loadFifthChart());
    dispatch(actions.loadSixthChart());
    dispatch(actions.loadSeventhChart());
    dispatch(actions.loadEighthChart());
    dispatch(actions.loadNinthChart());
    //Added-Begin by yaolin.fu for XR-7139756 on 18-12-26
    dispatch(actions.loadTenthChart());
    //Added-End by yaolin.fu for XR-7139756 on 18-12-26
    //对接代码注释
    dispatch(actions.loadHotEvents());
}

//normalLine
actions.loadFirstChart = () => (dispatch,getState) => {
    const state = getState().dashboard;
    const searchParams = state.searchParams;
    const version = searchParams.appVersion;
    //对接代码start
    ajax.get('/report/com.tct.camera/appUserActiveInfo',{appVersion:version}).then(obj=>{

        const option = {
            // 'xAxis.type':'time',
            'xAxis.data': [],
            'xAxis.min':-1,
            'xAxis.max':30,
            'xAxis.interval':7*24*3600*1000,
            'yAxis.type':'value',
            'yAxis.axisLine.show':false,
            'yAxis.splitLine.show':true,
            'yAxis.axisLabel.rotate':45,

            'title.text':'Active users (K)',
            'title.show':false,

            backgroundColor: 'rgba(0, 0, 0, 0)',
            grid: {
                left: '2%',
                right: '2%',
                bottom: '2%',
                top: '3%',
                containLabel: true
            },
            multiple: true,
            color: ['#4285f4','#ab47bc','#00acc1'],

            legend: {
                show: false,
                data: ['28-Day', '7-Day', '1-Day']
            }
        };
        // let startDate = moment().subtract(31, "days").format("YYYY-MM-DD");
        // for(let i=1;i<=30;i++){
        //     option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
        // }
        option['xAxis.data'] = obj['appMonthlyActiveList'].map(o=>o.timeScal);

        let data = [];
        const keyValue = {
            '28-Day':'appMonthlyActiveList',
            '7-Day':'appWeeklyActiveList',
            '1-Day':'appDailyActiveList'
        }

        option.legend.data.forEach(function (o,i) {
            var temp = [];
            const array = arrayFilter3(obj[keyValue[o]],'activeUsers');
            // const array = obj[keyValue[o]];
            data.push(array.map(item=>(item.activeUsers/1000).toFixed(2)));
            // for (let j = 0; j < option['xAxis.data'].length ; j++) {
            //     temp.push((obj[keyValue[o]][j].activeUsers/1000).toFixed(2));
            // }
            // data.push(temp);
        });
        dispatch({ type: 'DASHBOARD_FIRSTCHART_LOAD', data, option });
    })
    //对接代码end
    // const option = {
    //     'xAxis.data': [],
    //     'xAxis.min':-2,
    //     'xAxis.max':31,
    //     'yAxis.type':'value',
    //     'yAxis.axisLine.show':false,
    //     'yAxis.splitLine.show':true,
    //     'yAxis.axisLabel.rotate':45,
    //
    //     'title.text':'Active users (K)',
    //     'title.show':false,
    //
    //     backgroundColor: 'rgba(0, 0, 0, 0)',
    //     grid: {
    //         left: '2%',
    //         right: '2%',
    //         bottom: '2%',
    //         top: '3%',
    //         containLabel: true
    //     },
    //     multiple: true,
    //     color: ['#4285f4','#ab47bc','#00acc1'],
    //
    //     legend: {
    //         show: false,
    //         data: ['28-Day', '7-Day', '1-Day']
    //     }
    // };
    //
    // let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
    // for(let i=1;i<=30;i++){
    //     option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
    // }
    //
    // let data = [];
    // const mockData = [
    //     [569,571,575,578,582,584,588,590,591,591,593,593,600,602,606,608,608,611,616,616,619,621,624,630,633,637,640,643,647,651],
    //     [397,400,405,408,412,413,416,418,421,421,420,423,423,426,430,432,434,437,440,440,446,450,453,458,462,466,470,473,477,478],
    //     [258,259,267,266,266,266,268,270,271,271,271,273,274,277,280,283,282,284,293,293,296,295,298,305,306,305,308,314,304,298]
    // ]
    // option.legend.data.forEach(function (o,i) {
    //     var temp = [];
    //     for (let j = 0; j < option['xAxis.data'].length ; j++) {
    //         // temp.push(parseInt(((Math.random() * 1) + 2) * 10)*(i+3)*4);
    //         temp.push(mockData[i][j])
    //     }
    //     // temp.sort((o1,o2)=>{
    //     //     if(o1-o2>0)
    //     //         return 1;
    //     //     else
    //     //         return -1;
    //     // });
    //     data.push(temp);
    // });
    // // data.reverse();
    // dispatch({ type: 'DASHBOARD_FIRSTCHART_LOAD', data, option });
};

//normalBar
actions.loadSecondChart = () => (dispatch,getState) => {
    const state = getState().dashboard;
    const searchParams = state.searchParams;
    const version = searchParams.appVersion;
    //对接代码start
    ajax.get('/report/com.tct.camera/getAppPMActiveInfo',{version}).then(obj=>{
        const option = {
            'title.text':'Users pre minutes',
            'title.left':'left',
            'title.top':'top',
            'title.padding':[5,0],
            'title.textStyle':{
                fontSize: '12px'
            },
            // subTitle: moment(new Date()).format('YYYY-MM-DD'),
            // legendData: [moment(new Date())],
            'xAxis.show':false,
            yAxis: {
                show: false
            },
            color: ['#91d5ff'],
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top: '20%',
                containLabel: false
            },
            backgroundColor: 'rgba(0, 0, 0, 0)'
        };
        let data = [];
        let x = [];
        const hl = obj.halfHourDataList;
        let halfHourNum = !isEmpty(hl)?hl[hl.length-1].num:0
        obj.perMinuteDataList.reverse().forEach((o,i)=>{
            data.push(o.num);
            x.push((30-i)+'分钟前');
        })
        option['xAxis.data'] = x;

        dispatch({ type: 'DASHBOARD_SECONDCHART_LOAD', data,option,halfHourNum });
    })
    //对接代码end
    // const option = {
    //     'title.text':'Users pre minutes',
    //     'title.left':'left',
    //     'title.top':'top',
    //     'title.padding':[5,0],
    //     'title.textStyle':{
    //         fontSize: '12px'
    //     },
    //     // subTitle: moment(new Date()).format('YYYY-MM-DD'),
    //     // legendData: [moment(new Date())],
    //     'xAxis.show':false,
    //     yAxis: {
    //         show: false
    //     },
    //     color: ['#91d5ff'],
    //     grid: {
    //         left: '0%',
    //         right: '0%',
    //         bottom: '0%',
    //         top: '20%',
    //         containLabel: false
    //     },
    //     backgroundColor: 'rgba(0, 0, 0, 0)'
    // };
    // let data = [];
    // let x = [];
    // let halfHourNum = 0;
    // for (let i = 0; i < 30; i++) {
    //     const temp = parseInt(Math.random() * 200) + 600;
    //     halfHourNum+=temp;
    //     data.push(temp);
    //     x.push((30-i)+'分钟前');
    // }
    // let listData = [
    //     { id: 1, event: 'screen_view', count: 270000 },
    //     { id: 2, event: 'user_engagement', count: 260000 },
    //     { id: 3, event: 'select_content', count: 53000 }
    // ];
    // option['xAxis.data'] = x;
    // dispatch({ type: 'DASHBOARD_SECONDCHART_LOAD', data,option,listData,halfHourNum });
};
actions.loadHotEvents = () => (dispatch,getState) => {
    const version = getState().dashboard.searchParams.appVersion;
    ajax.get('/report/hotevent',{'packageNames':'com.tclhz.gallery','appVersions':version}).then(data=>{
        let listData = [];
        if(!isEmpty(data)){
            const list = data.eventSum;
            for(let i in list){
                listData.push({
                    event:i,
                    count:list[i]
                })
            }
        }
        dispatch({ type: 'DASHBOARD_SECONDCHART_LOAD', listData });
        dispatch(actions.loadFifthChart(data));
    })
}
/**
 * 每分钟更新数据
 * @param preData
 * @returns {Function}
 */
actions.updateSecondChart = (preData) => dispatch => {
    preData.shift();
    preData.push(parseInt(Math.random() * 200) + 600);
    let halfHourNum = preData.reduce((sum,o)=>sum+o);
    dispatch({ type: 'DASHBOARD_SECONDCHART_LOAD', data:preData,halfHourNum});
}

actions.loadThirdChart = () => dispatch => {
    //对接代码start
    ajax.get('/report/retention',{}).then((data)=>{
        const option = {
            'title.text':'Retention cohorts'
        }
        let list = [];
        data.forEach((o,i)=>{
            let temp = {
                time:moment(o.timeScale.begin).format('MM/DD')+'~'+moment(o.timeScale.end).add(-1).format('MM/DD'),
                no:i
            }
            o.list.forEach((item,j)=>{
                if(item.retention>0)
                    temp['rate'+j] = (item.retention*100).toFixed(1);
            })
            list.push(temp)
        })
        list.reverse();
        dispatch({type:'DASHBOARD_THIRDCHART_LOAD',list,option})
    })
    //对接代码end
    // const option = {
    //     'title.text':'Retention cohorts'
    // }
    // const mockData = [
    //     [99],
    //     [99,62],
    //     [99,62,52],
    //     [99,63,53,48],
    //     [99,62,52,46,43],
    //     [99,61,50,45,41,39]
    // ]
    // let list = [];
    // for(let i=0;i<6;i++){
    //     let temp = {
    //         time:moment().add('days',-7*(i+1)+1).format('MM/DD')+'~'+moment().add('days',-7*(i)).format('MM/DD'),
    //         no:i,
    //     };
    //     const pi = 100/6;
    //     for(let j=0;j<(i+1);j++){
    //         // temp['rate'+j] = (Math.random()*(100/6)+(100-(j+1)*pi)).toFixed(1);
    //         temp['rate'+j] = mockData[i][j];
    //     }
    //     list.push(temp)
    // }
    // list.reverse();
    // dispatch({type:'DASHBOARD_THIRDCHART_LOAD',list,option})
}

actions.loadFourthChart = () => (dispatch,getState) => {
    const version = getState().dashboard.searchParams.appVersion;
    // 对接代码start
    ajax.get('/report/getAppDistribution',{packageName:'com.tclhz.gallery',topK:3,fieldName:'appVersion',fieldValue:version}).then(data=>{
        let firstChart = {
            option:{
                type:'map',
                title:{
                    show:false
                },
                visualMap:{
                    min: 10000,
                    max: 110000,
                    // splitNumber: 5,
                    inRange: {
                        color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
                    },
                    textStyle: {
                        color: '#000'
                    },
                    calculable: true,
                    itemHeight:'100px',
                    show:false
                },
            },
            list:data.map((o,i)=>{
                return {
                    id:i,
                    region:o.countryNo,
                    count:o.counts,
                    percent:o.accounting
                }
            }).slice(0,3)
        };
        dispatch({
            type:'DASHBOARD_FOURTHCHART_LOAD',
            firstChart
        })
    })
    let promise1 = ajax.get('/report/getDeviceNumber',{topK:3,packageName:'com.tclhz.gallery',fieldName:'appVersion',fieldValue:version});
    let promise2 = ajax.get('/report/getAndroidVersion',{topK:3,packageName:'com.tclhz.gallery',fieldName:'appVersion',fieldValue:version})
    Promise.all([promise1,promise2]).then(data=>{
        let secondChart = {
            option:{
                'title.text':'Model',
                'title.x':'left',
                legendData: data[0].map((o)=>{
                    return o.model;
                }),
                color:['#003a8c','#096dd9','#69c0ff','#d9d9d9'],
                'yAxis.type':'category',
                'yAxis.data':['周一'],
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
            option2:{
                'title.text':'OS version',
                'title.x':'left',
                legendData: data[1].map(o=>{
                    return o.androidVersion
                }),
                color:['#003a8c','#096dd9','#69c0ff','#d9d9d9'],
                'yAxis.type':'category',
                'yAxis.data':['周一'],
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
            data:data[0].map(o=>{
                return [o.counts]
            }),
            data2:data[1].map(o=>{
                return [o.counts]
            })
        }
        dispatch({
            type:'DASHBOARD_FOURTHCHART_LOAD',
            secondChart
        })
    })

    //对接代码end
    // let firstChart = {
    //     option:{
    //         type:'map',
    //         title:{
    //             show:false
    //         },
    //         visualMap:{
    //             min: 0,
    //             max: 800,
    //             // splitNumber: 5,
    //             inRange: {
    //                 color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
    //             },
    //             textStyle: {
    //                 color: '#000'
    //             },
    //             calculable: true,
    //             itemHeight:'100px',
    //             show:true
    //         },
    //     },
    //     list:[
    //         {id:1,region:'India',count:'188万',percent:'35.3%'},
    //         {id:2,region:'Indonesia',count:'46万',percent:'8.8%'},
    //         {id:3,region:'Brazil',count:'32万',percent:'6%'},
    //     ]
    // };
    // let secondChart = {
    //     option:{
    //         'title.text':'Model',
    //         'title.x':'left',
    //         legendData: ['(not set)', 'X00TD', 'Mi A2 Lite','Others'],
    //         'yAxis.type':'category',
    //         'yAxis.data':['周一'],
    //         color:['#003a8c','#096dd9','#69c0ff','#d9d9d9'],
    //         backgroundColor: 'rgba(0, 0, 0, 0)',
    //     },
    //     option2:{
    //         'title.text':'OS version',
    //         'title.x':'left',
    //         legendData: ['android 8.1', 'android 9', 'android 7.0', 'Others'],
    //         'yAxis.type':'category',
    //         'yAxis.data':['周一'],
    //         color:['#003a8c','#096dd9','#69c0ff','#d9d9d9'],
    //         backgroundColor: 'rgba(0, 0, 0, 0)',
    //     },
    //     data:[[17],[5.5],[4.8],[72.6]],
    //     data2:[[35.9],[17.7],[14.5],[31.8]]
    // }
    // secondChart.option.yAxis.data = ['周一'];
    // for (let i = 0; i < 4; i++) {
    //     for (let j = 0; j < 1; j++) {
    //         if (!secondChart.data[i]) { secondChart.data[i] = []; }
    //         if (!secondChart.data2[i]) { secondChart.data2[i] = []; }
    //         secondChart.data[i].push((123*(4-i)));
    //         secondChart.data2[i].push((123*(4-i)));
    //     }
    //     // secondChart.data[0].push((Math.random() * 2) + 1);
    // }

    let thirdChart = {
        option1 :{
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                x: 'center',
                y:'bottom',
                itemGap:10,
                data:['Male','Female']
            },
            title:{
              text:'Gender',
              x:'left',
              textStyle: {
                  color:'black',
                  fontWeight:'normal',
                  fontSize:14
              }
            },
            color:['#0050b3','#40a9ff'],
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
                                fontSize: '15',
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
                        {value:335000, name:'Male'},
                        {value:210000, name:'Female'}
                    ]
                }
            ]
        },
        option2 : {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            title:{
                text:'Age',
                textStyle:{
                    color:'black',
                    fontSize:14,
                    fontWeight: 'normal'
                }
            },
            legend: {
                data: ['Male', 'Female'],
                right: 0,
                itemWidth:20
            },
            color:['#0050b3','#40a9ff'],
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
                    name: 'Male',
                    type: 'bar',
                    data: [0.05, 0.15, 0.25, 0.35, 0.15, 0.25]
                },
                {
                    name: 'Female',
                    type: 'bar',
                    data: [0.15, 0.25, 0.35, 0.15, 0.05, 0.45]
                }
            ]
        }
    };

    let fourthChart = {
        option:{
            title : {
                show: false,
                top: 10,
                text: '兴趣相似的受众群体',
                textStyle: {
                    color: '#787878',
                    fontSize: 12,
                }
            },
            tooltip : {
                trigger: 'item'  //悬浮提示框不显示
            },
            grid:{         //绘图区调整
                x:0,       //左留白
                y:2,      //上留白
                x2:'80%',  //右留白
                y2:20      //下留白
            },
            xAxis : [
                {
                    inverse: true,
                    position: 'top',
                    show:false,
                    type : 'value',
                    boundaryGap : [0, 0]
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : [
                        'Media & Entertainment/Music Lovers',
                        'Technology/Technophiles',
                        'Lifestyles & Hobbies/Pet Lovers',
                        'Media & Entertainment/Movies Lovers',
                        'Foot & Dining/Cookies...asts/30 Minute Chefs',
                        'Technology',
                        'Shoppers',
                        'Media & Entertainment...ics & Animation Fans',
                        'Technology/Mobile Enthusiasts'
                    ],
                    axisLine:{
                        show:false,
                        onZero: false
                    },
                    axisTick:[{
                        show:false
                    }],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#212121'
                        }
                    },
                    position: 'right',
                    offset:50
                }
            ],
            series : [
                {
                    name:'',
                    type:'bar',
                    tooltip:{show:false},
                    barWidth:8,
                    data:[
                        42.3,
                        44.9,
                        46.8,
                        49.9,
                        50.8,
                        60.6,
                        66.0,
                        72.1,
                        72.5
                    ],
                    itemStyle:{
                        color: function (params){
                            return [
                                '#93d5ed',
                                '#93d5ed',
                                '#45a5f5',
                                '#45a5f5',
                                '#45a5f5',
                                '#45a5f5',
                                '#4285f4',
                                '#4285f4',
                                '#4285f4'
                            ][params.dataIndex];
                        }
                    },
                    label: {
                        normal: {
                            formatter: (function(params) {
                                return params.data + '%';
                            }),
                            show: true,
                            position: 'right',
                            color: '#212121'
                        }
                    }
                }
            ],
            backgroundColor:'rgba(0, 0, 0, 0)'
        },
        data:[
            42.3,
            44.9,
            46.8,
            49.9,
            50.8,
            60.6,
            66.0,
            72.1,
            72.5
        ]
    };

    // dispatch({type:'DASHBOARD_FOURTHCHART_LOAD',firstChart,secondChart, thirdChart,fourthChart})
    dispatch({type:'DASHBOARD_FOURTHCHART_LOAD',thirdChart,fourthChart})
};

actions.loadFifthChart = (obj) => dispatch => {
    //对接代码start
    const option = {
        'xAxis.data': [],
        title: {
            text: 'Top conversion events',
            show: false
        },
        'yAxis.type':'value',
        'yAxis.axisLine.show':false,
        'yAxis.splitLine.show':true,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            top: '3%',
            containLabel: true
        },
        multiple: true,
        color: ['#4285f4','#ab47bc','#00acc1'],
        legend: {
            show: false,
            data: []
        }

    };
    let data = [];
    let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
    for(let i=1;i<=30;i++){
        option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
    }
    if(obj){
        obj.sum = 0;
        option['xAxis.data'] = obj.scaleList.map((o)=>{
            return o.scale
        }).reverse();
        const map = obj.eventScaleMap;
        for(let key in map){
            option.legend.data.push(key);
            let temp = [];
            option['xAxis.data'].forEach((o)=>{
                if(map[key][o])
                    temp.push(map[key][o]);
                else
                    temp.push(0);
            })
            data.push(temp);
        }
    }
    dispatch({ type: 'DASHBOARD_FIFTHCHART_LOAD', data, option });
    //对接代码end
    // const option = {
    //     'xAxis.data': [],
    //     title: {
    //         text: 'Top conversion events(10K)',
    //         show: false
    //     },
    //     'yAxis.type':'value',
    //     'yAxis.axisLine.show':false,
    //     'yAxis.splitLine.show':true,
    //     backgroundColor: 'rgba(0, 0, 0, 0)',
    //     grid: {
    //         left: '2%',
    //         right: '2%',
    //         bottom: '2%',
    //         top: '3%',
    //         containLabel: true
    //     },
    //     multiple: true,
    //     color: ['#4285f4','#ab47bc','#00acc1'],
    //     legend: {
    //         show: false,
    //         data: ['screen_view', 'user_engagement', 'select_content']
    //     }
    //
    // };
    // let data = [];
    // let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
    // for(let i=1;i<=30;i++){
    //     option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
    // }
    //
    // option.legend.data.forEach(function (o,i) {
    //     var temp = [];
    //     let pi = [20,125,150].reverse()
    //     for (let j = 0; j < 30; j++) {
    //         temp.push(parseInt(((Math.random() * 1) + 2) * pi[i]));
    //     }
    //     temp.sort((o1,o2)=>{
    //         if(o1-o2>0)
    //             return 1;
    //         else
    //             return -1;
    //     });
    //     data.push(temp);
    // });
    // dispatch({ type: 'DASHBOARD_FIFTHCHART_LOAD', data, option });
}
actions.loadSixthChart = () => (dispatch,getState) => {
    const searchParams = getState().dashboard.searchParams;
    const version = searchParams.appVersion;
    //这里写死包名
    // const packageNames = searchParams.appName;
    const packageNames = 'com.tclhz.gallery'
    return ajax.get('/report/userEngagement',{appVersions:version,days:12,packageNames}).then(obj=>{
        const option = {
            'xAxis.data': [],
            'title.text':'Daily user engagement',
            'title.show':false,
            'yAxis.axisLine.show':false,
            'yAxis.splitLine.show':true,
            // 'yAxis.axisLabel.rotate':45,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            grid: {
                left: '2%',
                right: '2%',
                bottom: '2%',
                top: '5%',
                containLabel: true
            },
            multiple: true,
            color: ['#096dd9', '#69c0ff'],
            'legend.show':false,
            'legend.data':['互动时长'],
            tooltip:{
                trigger: 'axis',
                formatter: function (params) {
                    const curTime = params[0].axisValue;
                    const preTime = moment(curTime).add(-30,'days').format('YYYY-MM-DD');
                    const title = curTime+'vs'+preTime;
                    const minute = Math.floor(params[0].data/60);
                    const second = params[0].data%60;
                    const content = '每周用户活动时长:'+minute+'分'+second+'秒';
                    const percent = ((params[0].data-params[1].data)*100/params[1].data).toFixed(2);
                    const icon = percent<0?'↓':'↑'
                    return title+"<br/>"+content+ ' '+icon+percent+'%'
                }
            }

        };
        // let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
        // for(let i=1;i<=30;i++){
        //     option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
        // }
        // let data = [];
        // var temp1 = [],temp2 = [];
        // for (let i = 0; i < 30; i++) {
        //     temp1.push(parseInt(Math.random() * 50) + 600);
        //     temp2.push(parseInt(Math.random() * 50) + 550);
        // }
        // data.push(temp1);
        // data.push(temp2);

        let data = [];
        var temp1 = [],temp2 = [];
        // let startDate = moment().subtract(12,'days').format('YYYY-MM-DD');
        // for(let i=1;i<=12;i++){
        //     option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
        // }
        // option['xAxis.data'].forEach((o)=>{
        //     temp1.push(obj.durationList[o]?obj.durationList[o]:1);
        //     temp2.push(1);
        // })
        // data.push(temp1);
        // data.push(temp2);

        for(let i in obj.durationList){
            option['xAxis.data'].push(i);
            temp1.push(obj.durationList[i]?obj.durationList[i]/1000:1);
            temp2.push(1);
        }
        data.push(temp1);
        data.push(temp2);

        var list = [];
        for(let i=0;i<3;i++){
            list.push( {
                id:i,
                screenType:obj.activityCountList[i].activityName,
                percent:(obj.activityCountList[i].interactPercent*100).toFixed(2)+'%',
                ratio1:{flag:0,value:'1.7%'},
                aveTime:parseInt(obj.activityCountList[i].duration/(60*1000))+' m '+(obj.activityCountList[i].duration/1000)%60+' s',
                ratio2:{flag:0,value:'0.3%'}}
                )
        }
        // let list = [
        //     {id:1,screenType:'InternalPr...ewActivity',percent:'41.58%',ratio1:{flag:1,value:'2.7%'},aveTime:'0m15s',ratio2:{flag:1,value:'3.1%'}},
        //     {id:2,screenType:'MovieActivity',percent:'33.13%',ratio1:{flag:0,value:'1.7%'},aveTime:'0m55s',ratio2:{flag:0,value:'0.3%'}},
        //     {id:3,screenType:'GalleryActivity',percent:'15.24%',ratio1:{flag:0,value:'0.6%'},aveTime:'0m08s',ratio2:{flag:1,value:'0%'}},
        // ]
        dispatch({ type: 'DASHBOARD_SIXTHCHART_LOAD', data, option,list });
    })
    // const option = {
    //     'xAxis.data': [],
    //     title: {
    //         text: 'Daily user engagement',
    //         show: false
    //     },
    //     'yAxis.axisLine.show':false,
    //     'yAxis.splitLine.show':true,
    //     // 'yAxis.axisLabel.rotate':45,
    //     backgroundColor: 'rgba(0, 0, 0, 0)',
    //     grid: {
    //         left: '2%',
    //         right: '2%',
    //         bottom: '2%',
    //         top: '5%',
    //         containLabel: true
    //     },
    //     multiple: true,
    //     color: ['#096dd9', '#69c0ff'],
    //     legend: {
    //         show: false,
    //         data: ['互动时长']
    //     },
    //     tooltip:{
    //         trigger: 'axis',
    //         formatter: function (params) {
    //             const curTime = params[0].axisValue;
    //             const preTime = moment(curTime).add(-30,'days').format('YYYY-MM-DD');
    //             const title = curTime+'vs'+preTime;
    //             const minute = Math.floor(params[0].data/60);
    //             const second = params[0].data%60;
    //             const content = '每周用户活动时长:'+minute+'分'+second+'秒';
    //             const percent = ((params[0].data-params[1].data)*100/params[1].data).toFixed(2);
    //             const icon = percent<0?'↓':'↑'
    //             return title+"<br/>"+content+ ' '+icon+percent+'%'
    //         }
    //     }
    //
    // };
    // let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
    // for(let i=1;i<=30;i++){
    //     option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
    // }
    //
    // let data = [];
    // // option.legend.data.forEach(function (o) {
    // var temp1 = [],temp2 = [];
    // for (let i = 0; i < 30; i++) {
    //     temp1.push(parseInt(Math.random() * 50) + 600);
    //     temp2.push(parseInt(Math.random() * 50) + 550);
    // }
    // // temp.sort();
    // data.push(temp1);
    // data.push(temp2);
    // // });
    // let list = [
    //     {id:1,screenType:'InternalPr...ewActivity',percent:'41.58%',ratio1:{flag:1,value:'2.7%'},aveTime:'0m15s',ratio2:{flag:1,value:'3.1%'}},
    //     {id:2,screenType:'MovieActivity',percent:'33.13%',ratio1:{flag:0,value:'1.7%'},aveTime:'0m55s',ratio2:{flag:0,value:'0.3%'}},
    //     {id:3,screenType:'GalleryActivity',percent:'15.24%',ratio1:{flag:0,value:'0.6%'},aveTime:'0m08s',ratio2:{flag:1,value:'0%'}},
    // ]
    // dispatch({ type: 'DASHBOARD_SIXTHCHART_LOAD', data, option,list });
}


actions.loadSeventhChart = () => dispatch => {
    const data = {
        listTitle:"应用版本采用率",
        dataSource:[{
            key: '1',
            app: 'NoeKey',
            version: 'V1.7.1.012445.0',
            state: '成功'
        }, {
            key: '2',
            app: 'Launcher P',
            version: 'v7.3.9.0.0101.0',
            state: '成功'
        }, {
            key: '3',
            app: 'Smart Manager',
            version: 'v6.0.5.2.0477.0',
            state: '成功'
        }, {
            key: '4',
            app: 'Gallery',
            version: 'v8.2.1.0.4025.0',
            state: '成功'
        }, {
            key: '5',
            app: 'Photos',
            version: 'v8.1.4.1.0020.0',
            state: '成功'
        }, {
            key: '6',
            app: 'Dialog',
            version: 'v8.0.1.1.0027.0',
            state: '成功'
        }, {
            key: '7',
            app: 'Camera',
            version: 'V7.7.1.012445.0',
            state: '成功'
        }]
    };
    dispatch({ type: 'DASHBOARD_SEVENTHCHART_LOAD', data});
}
actions.loadEighthChart = () => dispatch => {
    const dataSource=[{
        key: '1',
        col1: 'google play',
        col2: '80万',
        col3: '$200.00'
    }, {
        key: '2',
        col1: '(direct)',
        col2: '69万',
        col3: '$55.00'
    }, {
        key: '3',
        col1: 'com.yandex.launcher',
        col2: '3',
        col3: '$3.00'
    }, {
        key: '4',
        col1: 'Smart Launcher',
        col2: '3',
        col3: '$330.00'
    }, {
        key: '5',
        col1: 'google play',
        col2: '1',
        col3: '$400.00'
    }, {
        key:'6',
        col1: 'google',
        col2: '1',
        col3: '$100.00'
    }, {
        key:'7',
        col1: 'test_source',
        col2: '1',
        col3: '$00.00'
    }];
    dispatch({ type: 'DASHBOARD_EIGTHCHART_LOAD', dataSource});
}
actions.loadNinthChart = () => dispatch => {
    const option = {
        'xAxis.data': [],
        'yAxis.axisLine.show':false,
        'yAxis.splitLine.show':true,
        // 'yAxis.axisLabel.rotate':45,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            top: '3%',
            containLabel: true
        },
        multiple: true,
        color: '#096dd9',
        tooltip:{
            trigger: 'axis',
            formatter: '{c}'
        }

    };
    let startDate = moment().subtract(28, "days").format("YYYY-MM-DD");
    for(let i=0;i<=28;i+=7){
        option['xAxis.data'].push(moment(startDate).add(i,'days').format('MM-DD'));
    }

    let data = [];
    // option.legend.data.forEach(function (o) {
    var temp1 = [];
    for (let i = 0; i < 28; i++) {
        temp1.push(parseInt(Math.random()));
    }
    // temp.sort();
    data.push(temp1);
    // });
    let info ={
        info1:'$0.00',
        info2:'$0.00',
        info3:'$0.00',
        info4:'$0.00',
        info5:'$0.00'
    }
    dispatch({ type: 'DASHBOARD_NINTHCHART_LOAD', data, option,info });
};

//Added-Begin by yaolin.fu for XR-7139756 on 18-12-26
actions.loadTenthChart = () => dispatch => {
    const dataSource=[{
        key: '1',
        col1: 'Gallery-Google Play',
        col2: '99.3%',
        col3: '0%'
    }, {
        key: '2',
        col1: 'Gallery',
        col2: '100%',
        col3: '0%'
    }, {
        key: '3',
        col1: 'Camera',
        col2: '100%',
        col3: '0%'
    }, {
        key: '4',
        col1: 'Simple Launcher-Google Play',
        col2: '100%',
        col3: '0%'
    }, {
        key: '5',
        col1: 'Nowkey',
        col2: '100%',
        col3: '0%'
    }, {
        key:'6',
        col1: 'Contacts',
        col2: '100%',
        col3: '0%'
    }, {
        key:'7',
        col1: 'Color Catcher v3',
        col2: '100%',
        col3: '0%'
    }];
    dispatch({ type: 'DASHBOARD_TENTHCHART_LOAD', dataSource});
};
//Added-End by yaolin.fu for XR-7139756 on 18-12-26

export default actions;