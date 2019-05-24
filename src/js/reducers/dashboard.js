import { objectAppend } from '../utils';

const defaultState = {
    timeTypeList:[
        {id:1,name:'Today'},
        {id:2,name:'Yesterday'},
        {id:5,name:'This week'},
        {id:7,name:'Last 7 days'},
        {id:28,name:'Last 28 days'},
        {id:30,name:'Last 30 days'},
        {id:90,name:'Quarter to date'}
    ],
    timeType:28,
    productList:[],
    subPageShow:false,
    selectedProduct:'',
    detailPageLoading:true,
    searchParams:{
        appVersion:'v8.2.T.0.T060.0',
        appName:'Gallery',
        dateRange:28,
    },
    appVersions:[],
    firstChartData: {
        data: {},
        option: {},
        tooltip:'图中显示一段时间内的 1 天、7 天和 28 天活跃用户数量。右侧的摘要值显示截至相应日期范围最后一天的活跃用户数量。'
    },
    secondChartData: {
        listData: [],
        data: {},
        option: {},
        halfHourNum:0
    },
    thirdChartData:{
        question:'How well do you retain users?',
        list:[],
        option:{},
        tooltip:' 每行代表一个同类群组。“同类群组”是指在相同时间（例如同一天或同一周）开始使用您应用的一组用户。此报告显示各个同类群组的用户留存率。 '
    },
    fourthChartData:{
        question:"What is your audience like?",
        firstChart:{
            data:{},
            option:{},
            list:[],
            tooltip:'显示来自使用者最多的几个国家/地区的会话所占的百分比。'
        },
        secondChart:{
            data:{},
            option:{},
            tooltip:'1.使用者最多的前三种设备型号各自所占的百分比（以及所有其他设备的用户所占的百分比）。' +
                '2.使用者最多的两个操作系统版本各自所占的百分比（以及所有其他操作系统版本的用户所占的百分比)。'
        },
        thirdChart:{
            data1:{},
            option1:{},
            data2:{},
            option2:{},
            tooltip:'显示男女用户各占的百分比，按年龄段细分。'
        },
        //Added-Begin by yaolin.fu for XR-7139756 on 18-12-25
        fourthChart:{
            option:{},
            data:[],
            tooltip:'The percentage of your users who are identified with each interest category.'
        }
        //Added-End by yaolin.fu for XR-7139756 on 18-12-25
    },
    fifthChartData:{
        question:"How often are your users converting?",
        data:{},
        option:{},
        tooltip:'Your most important events are conversions. These graphs show up to three of your top recent conversion events plotted over time. Summary values (on top) show the number of events and percent increase for the selected time period. Note: first_open and session_start events are not shown.'
    },
    sixthChartData:{
        question:"Where are your users engaged?",
        data:{},
        option:{},
        list:[],
        tooltip:'Shows average daily engagement with a graph displaying trends for the time period selected. Move your mouse over the graph to show average engagement for a specific date.\n' +
            'Top screens chart shows the name of the screen class, the percentage that screen accounts for in engagement time, and the average amount of time that screen was used for the time period selected.\n'
    },
    tempData:9.6,
    seventhCardData:{
        question:"用户对您的最新版本采用程度如何？",
        data:{},
        option:{}
    },
    eighthCardData:{
        question:"您如何获取新用户？",
        data:{},
        option:{}
    },
    ninthCardData:{
        question:"你的应用创造了多少收入？",
        data:{},
        option:{},
        info:{}
    },
    tenthCardData:{
        question:"你的应用表现有多稳定？",
        data:{},
        option:{}
    }
};

export default (state, action) => {
    let newState = {};
    switch (action.type) {
        case 'DASHBOARD_DETAILPAGE_LOADING':
            newState.detailPageLoading = action.detailPageLoading;
            break;
        case 'DASHBOARD_SEARCHPARAMS_CHANGE':
            newState.searchParams = {...state.searchParams,...action.params};
            break;
        case 'DASHBOARD_SUBPAGE_SHOW':
            newState.subPageShow = action.subPageShow;
            newState.selectedProduct = action.selectedProduct;
            break;
        case 'DASHBOARD_PRODUCT_LOAD':
            newState.productList = action.list;
            break;
        case 'DASHBOARD_APPVERSION_LOAD':
            newState.appVersions = action.list;
            break;
        case 'DASHBOARD_FIRSTCHART_LOAD':
            newState.firstChartData = {
                data: action.data,
                option: action.option,
                tooltip:state.firstChartData.tooltip
            };
            break;
        case 'DASHBOARD_SECONDCHART_LOAD':
            const preState = state.secondChartData;
            newState.secondChartData = {
                listData: action.listData||preState.listData,
                data: action.data||preState.data,
                option: action.option||preState.option,
                halfHourNum: action.halfHourNum||preState.halfHourNum
            };
            break;
        case 'DASHBOARD_THIRDCHART_LOAD':
            newState.thirdChartData = {
                question:action.question||defaultState.thirdChartData.question,
                list:action.list,
                option:action.option,
                tooltip:state.thirdChartData.tooltip
            }
            break;
        case 'DASHBOARD_FOURTHCHART_LOAD':
            newState.fourthChartData = {
                question:action.question||defaultState.fourthChartData.question,
                firstChart:action.firstChart?{
                    data:action.firstChart.data,
                    option:action.firstChart.option,
                    list:action.firstChart.list,
                    tooltip:state.fourthChartData.firstChart.tooltip
                }:state.fourthChartData.firstChart,
                secondChart: action.secondChart?{
                    data:action.secondChart.data,
                    option:action.secondChart.option,
                    data2:action.secondChart.data2,
                    option2:action.secondChart.option2,
                    tooltip:state.fourthChartData.secondChart.tooltip
                }:state.fourthChartData.secondChart,
                thirdChart: action.thirdChart?{
                    data1:action.thirdChart.option1.series,
                    option1:action.thirdChart.option1,
                    data2:action.thirdChart.option2.series,
                    option2:action.thirdChart.option2,
                    tooltip:state.fourthChartData.thirdChart.tooltip
                }:state.fourthChartData.thirdChart,
                fourthChart: action.fourthChart?{
                    option:action.fourthChart.option,
                    data:action.fourthChart.data,
                    tooltip:state.fourthChartData.fourthChart.tooltip
                }:state.fourthChartData.fourthChart
            };
            break;
        case 'DASHBOARD_FIFTHCHART_LOAD':
            newState.fifthChartData = {
                question:action.question||defaultState.fifthChartData.question,
                data: action.data,
                option: action.option,
                tooltip:state.fifthChartData.tooltip
            };
            break;
        case 'DASHBOARD_SIXTHCHART_LOAD':
            newState.sixthChartData = {
                question:action.question||defaultState.sixthChartData.question,
                data: action.data,
                option: action.option,
                list:action.list,
                tooltip:state.sixthChartData.tooltip
            };
            break;
        case 'DASHBOARD_SIXTHCHART1_LOAD':
            newState.tempData = action.tempData;
            break;
        case 'DASHBOARD_SEVENTHCHART_LOAD':
            newState.seventhCardData = {
                question:action.question||defaultState.seventhCardData.question,
                data: action.data,
                option: action.option
            };
            break;
        case 'DASHBOARD_EIGTHCHART_LOAD':
            newState.eighthCardData = {
                question:action.question||defaultState.eighthCardData.question,
                data: action.dataSource,
                option: action.option
            };
            break;
        case 'DASHBOARD_TENTHCHART_LOAD':
            newState.tenthCardData = {
                question: action.question||defaultState.tenthCardData.question,
                data: action.dataSource,
                option: action.option
            };
            break;
        case 'DASHBOARD_NINTHCHART_LOAD':
            newState.ninthCardData = {
                question:action.question||defaultState.ninthCardData.question,
                data: action.data,
                option: action.option,
                info:action.info
            };
            break;
        default: return state || defaultState;
    }
    return objectAppend(newState, state);
};