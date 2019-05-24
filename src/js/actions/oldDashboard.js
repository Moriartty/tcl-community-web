import ajax from 'utils/ajax';
import moment from 'moment';
import {Icon} from 'antd';
import React from "react";
import {isEmpty} from "utils"

let actions = {};

actions.loadProducts = () => dispatch => {
    return ajax.get('/getProducts',{}).then(list=>{
        dispatch({type:'DASHBOARD_PRODUCT_LOAD',list});
    })
}

//normalLine
actions.loadFirstChart = () => dispatch => {
    //对接代码start
    ajax.get('/report/com.tct.camera/appUserActiveInfo',{}).then(obj=>{
        const option = {
            'xAxis.data': [],

            'yAxis.type':'value',
            'yAxis.axisLine.show':false,
            'yAxis.splitLine.show':true,
            'yAxis.axisLabel.rotate':45,

            'title.text':'活跃用户(千)',
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
                data: ['28天', '7天', '1天']
            }
        };
        let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
        for(let i=1;i<=29;i++){
            option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
        }

        let data = [];
        const keyValue = {
            '28天':'appMonthlyActiveList',
            '7天':'appWeeklyActiveList',
            '1天':'appDailyActiveList'
        }
        option.legend.data.forEach(function (o,i) {
            var temp = [];
            for (let j = 0; j < option['xAxis.data'].length ; j++) {
                temp.push((obj[keyValue[o]][j].activeUsers/1000).toFixed(2));
            }
            data.push(temp);
        });
        dispatch({ type: 'DASHBOARD_FIRSTCHART_LOAD', data, option });
    })
    //对接代码end
    // const option = {
    //     'xAxis.data': [],
    //
    //     'yAxis.type':'value',
    //     'yAxis.axisLine.show':false,
    //     'yAxis.splitLine.show':true,
    //     'yAxis.axisLabel.rotate':45,
    //
    //     'title.text':'活跃用户(万)',
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
    //     color: ['#faad14', '#13c2c2', '#52c41a'].reverse(),
    //
    //     legend: {
    //         show: false,
    //         data: ['28天', '7天', '1天']
    //     }
    // };
    //
    // let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
    // for(let i=1;i<=30;i++){
    //     option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
    // }
    //
    // let data = [];
    // option.legend.data.forEach(function (o,i) {
    //     var temp = [];
    //     for (let j = 0; j < option['xAxis.data'].length ; j++) {
    //         temp.push(parseInt(((Math.random() * 2) + 1) * 10)*(i+2));
    //     }
    //     temp.sort((o1,o2)=>{
    //         if(o1-o2>0)
    //             return 1;
    //         else
    //             return -1;
    //     });
    //     data.push(temp);
    // });
    // data.reverse();
    // dispatch({ type: 'DASHBOARD_FIRSTCHART_LOAD', data, option });
};

//normalBar
actions.loadSecondChart = () => dispatch => {
    //对接代码start
    ajax.get('/report/com.tct.camera/getAppPMActiveInfo',{}).then(obj=>{
        const option = {
            'title.text':'每分钟用户数',
            'title.left':'left',
            'title.top':'top',
            'title.padding':[0,0],
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
                top: '5%',
                containLabel: false
            },
            backgroundColor: 'rgba(0, 0, 0, 0)'
        };
        let data = [];
        let x = [];
        const hl = obj.halfHourDataList;
        let halfHourNum = !isEmpty(hl)?hl[hl.length-1].activeUsers:0
        obj.perMinuteDataList.forEach((o,i)=>{
            data.push(o.activeUsers);
            x.push((30-i)+'分钟前');
        })
        option['xAxis.data'] = x;

        dispatch({ type: 'DASHBOARD_SECONDCHART_LOAD', data,option,halfHourNum });
    })
    //对接代码end
    // const option = {
    //     'title.text':'每分钟用户数',
    //     'title.left':'left',
    //     'title.top':'top',
    //     'title.padding':[0,0],
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
    //         top: '5%',
    //         containLabel: false
    //     },
    //     backgroundColor: 'rgba(0, 0, 0, 0)'
    // };
    // let data = [];
    // let x = [];
    // for (let i = 0; i < 30; i++) {
    //     data.push(parseInt(Math.random() * 300) + 1000);
    //     x.push((30-i)+'分钟前');
    // }
    // let listData = [
    //     { id: 1, event: 'user_engagement', count: 100000 },
    //     { id: 2, event: 'select_content', count: 10000 },
    //     { id: 3, event: 'first_ope', count: 1000 }
    // ];
    // option['xAxis.data'] = x;
    // dispatch({ type: 'DASHBOARD_SECONDCHART_LOAD', data,option,listData,halfHourNum:0 });
};
actions.loadHotEvents = () => dispatch => {
    ajax.get('/report/hotevent',{'packageName':'com.tclhz.gallery'}).then(data=>{
        let listData = [];
        console.log(isEmpty(data));
        if(!isEmpty(data)){
            const list = data.eventSum;
            for(let i in list){
                listData.push({
                    event:i.split('#')[1],
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
    // preData.shift();
    // preData.push(parseInt(Math.random() * 1000) + 1000);
    // dispatch({ type: 'DASHBOARD_SECONDCHART_LOAD', data:preData});
}

actions.loadThirdChart = () => dispatch => {
    //对接代码start
    ajax.get('/report/retention',{}).then((data)=>{
        const option = {
            'title.text':'留存同类群组'
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
        // for(let i=0;i<6;i++){
        //     let temp = {
        //         time:moment().add('days',-7*(i+1)+1).format('MM/DD')+'~'+moment().add('days',-7*(i)).format('MM/DD'),
        //         no:i,
        //     };
        //     const pi = 100/6;
        //     for(let j=0;j<(i+1);j++){
        //         temp['rate'+j] = (Math.random()*(100/6)+(100-(j+1)*pi)).toFixed(1);
        //     }
        //     list.push(temp)
        // }
        list.reverse();
        console.log(list);
        dispatch({type:'DASHBOARD_THIRDCHART_LOAD',list,option})
    })
    //对接代码end
    // const option = {
    //     'title.text':'留存同类群组'
    // }
    // let list = [];
    // for(let i=0;i<6;i++){
    //     let temp = {
    //         time:moment().add('days',-7*(i+1)+1).format('MM/DD')+'~'+moment().add('days',-7*(i)).format('MM/DD'),
    //         no:i,
    //     };
    //     const pi = 100/6;
    //     for(let j=0;j<(i+1);j++){
    //         temp['rate'+j] = (Math.random()*(100/6)+(100-(j+1)*pi)).toFixed(1);
    //     }
    //     list.push(temp)
    // }
    // list.reverse();
    // dispatch({type:'DASHBOARD_THIRDCHART_LOAD',list,option})
}

actions.loadFourthChart = () => (dispatch,getState) => {
    //对接代码start
    ajax.get('/report/getAppDistribution?packageName=com.tclhz.gallery&topK=3',{}).then(data=>{
        let firstChart = {
            option:{
                type:'map',
                title:{
                    show:false
                },
                visualMap:{
                    min: 0,
                    max: 800,
                    // splitNumber: 5,
                    inRange: {
                        color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
                    },
                    textStyle: {
                        color: '#000'
                    },
                    calculable: true,
                    itemHeight:'100px',
                    show:true
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
    let promise1 = ajax.get('/report/getDeviceNumber?topK=3&packageName=com.tclhz.gallery',{});
    let promise2 = ajax.get('/report/getAndroidVersion?topK=3&packageName=com.tclhz.gallery',{})
    Promise.all([promise1,promise2]).then(data=>{
        let secondChart = {
            option:{
                'title.text':'型号',
                'title.x':'left',
                legendData: data[0].map((o)=>{
                    return o.model;
                }),
                'yAxis.type':'category',
                'yAxis.data':['周一'],
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
            option2:{
                'title.text':'操作系统版本',
                'title.x':'left',
                legendData: data[1].map(o=>{
                    return o.androidVersion
                }),
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
    //         {id:1,region:'印度',count:'503万',percent:'24.3%'},
    //         {id:2,region:'印度尼西亚',count:'103万',percent:'5%'},
    //         {id:3,region:'墨西哥',count:'97万',percent:'4.7%'},
    //     ]
    // };
    // let secondChart = {
    //     option:{
    //         'title.text':'型号',
    //         'title.x':'left',
    //         legendData: ['(not set)', 'VFD 620', 'VFD 720','其他'],
    //         'yAxis.type':'category',
    //         'yAxis.data':['周一'],
    //         backgroundColor: 'rgba(0, 0, 0, 0)',
    //     },
    //     option2:{
    //         'title.text':'操作系统版本',
    //         'title.x':'left',
    //         legendData: ['android 8.1', 'android 7.0', 'android 8.0', '其他'],
    //         'yAxis.type':'category',
    //         'yAxis.data':['周一'],
    //         backgroundColor: 'rgba(0, 0, 0, 0)',
    //     },
    //     data:[],
    //     data2:[]
    // }
    // // secondChart.option.yAxis.data = ['周一'];
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
        },
        option2 : {
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
            text: '热门事件转化',
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
        option['xAxis.data'] = obj.scaleList.map((o)=>{
            return o.scale
        }).reverse();
        const map = obj.eventScaleMap;
        for(let key in map){
            option.legend.data.push(key.split('#')[1]);
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
    //         text: '热门事件转化(万)',
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
    //     color: ['#faad14', '#13c2c2', '#52c41a'],
    //     legend: {
    //         show: false,
    //         data: ['user_engagement', 'select_content', 'g_moments_photo_num'].reverse()
    //     }
    //
    // };
    // let data = [];
    // let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
    // for(let i=1;i<=30;i++){
    //     option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
    // }
    // option.legend.data.forEach(function (o,i) {
    //     var temp = [];
    //     let pi = [1,120,600]
    //     for (let j = 0; j < 30; j++) {
    //         temp.push(parseInt(((Math.random() * 2) + 1) * pi[i]));
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
actions.loadSixthChart = () => dispatch => {
    const option = {
        'xAxis.data': [],
        title: {
            text: '用户每日互动时长',
            show: false
        },
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
        color: ['#096dd9', '#69c0ff'],
        legend: {
            show: false,
            data: ['互动时长']
        },
        tooltip:{
            trigger: 'axis',
            formatter: function (params) {
                const curTime = params[0].axisValue;
                const preTime = moment(curTime).add(-30,'days').format('YYYY-MM-DD');
                const title = curTime+'vs'+preTime;
                const content = '每周用户活动时长:'+params[0].data;
                const percent = ((params[0].data-params[1].data)*100/params[1].data).toFixed(2);
                const icon = percent<0?'↓':'↑'
                return title+"<br/>"+content+ ' '+icon+percent+'%'
            }
        }

    };
    let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
    for(let i=1;i<=30;i++){
        option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
    }

    let data = [];
    // option.legend.data.forEach(function (o) {
    var temp1 = [],temp2 = [];
    for (let i = 0; i < 30; i++) {
        temp1.push(parseInt(Math.random() * 50) + 450);
        temp2.push(parseInt(Math.random() * 50) + 400);
    }
    // temp.sort();
    data.push(temp1);
    data.push(temp2);
    // });
    let list = [
        {id:1,screenType:'InternalPr...ewActivity',percent:'30.1%',ratio1:{flag:0,value:'2%'},aveTime:'0分15妙',ratio2:{flag:1,value:'2%'}},
        {id:2,screenType:'GalleryActivity',percent:'27.59%',ratio1:{flag:0,value:'5.9%'},aveTime:'0分55妙',ratio2:{flag:1,value:'1.1%'}},
        {id:3,screenType:'MovieActivity',percent:'13.44%',ratio1:{flag:0,value:'1.2%'},aveTime:'0分08妙',ratio2:{flag:0,value:'0.1%'}}
    ]
    dispatch({ type: 'DASHBOARD_SIXTHCHART_LOAD', data, option,list });
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