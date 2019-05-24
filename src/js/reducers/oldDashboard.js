import { objectAppend } from '../utils';

const defaultState = {
    productList:[],
    subPageShow:false,
    selectedProduct:'',
    firstChartData: {
        data: {},
        option: {}
    },
    secondChartData: {
        listData: [],
        data: {},
        option: {},
        halfHourNum:0
    },
    thirdChartData:{
        question:'您在留住用户方面取得的成效如何？',
        list:[],
        option:{}
    },
    fourthChartData:{
        question:"您的受众群体有什么特征？",
        firstChart:{
            data:{},
            option:{},
            list:[]
        },
        secondChart:{
            data:{},
            option:{}
        },
        thirdChart:{
            data1:{},
            option1:{},
            data2:{},
            option2:{}
        },
        //Added-Begin by yaolin.fu for XR-7139756 on 18-12-25
        fourthChart:{
            option:{},
            data:[]
        }
        //Added-End by yaolin.fu for XR-7139756 on 18-12-25
    },
    fifthChartData:{
        question:"您的用户发生转化的频率如何？",
        data:{},
        option:{}
    },
    sixthChartData:{
        question:"您在什么位置吸引用户互动？",
        data:{},
        option:{},
        list:[]
    },
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
        case 'DASHBOARD_SUBPAGE_SHOW':
            newState.subPageShow = action.subPageShow;
            newState.selectedProduct = action.selectedProduct;
            break;
        case 'DASHBOARD_PRODUCT_LOAD':
            newState.productList = action.list;
            break;
        case 'DASHBOARD_FIRSTCHART_LOAD':
            newState.firstChartData = {
                data: action.data,
                option: action.option
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
                option:action.option
            }
            break;
        case 'DASHBOARD_FOURTHCHART_LOAD':
            newState.fourthChartData = {
                question:action.question||defaultState.fourthChartData.question,
                firstChart:action.firstChart?{
                    data:action.firstChart.data,
                    option:action.firstChart.option,
                    list:action.firstChart.list
                }:state.fourthChartData.firstChart,
                secondChart: action.secondChart?{
                    data:action.secondChart.data,
                    option:action.secondChart.option,
                    data2:action.secondChart.data2,
                    option2:action.secondChart.option2
                }:state.fourthChartData.secondChart,
                thirdChart: action.thirdChart?{
                    data1:action.thirdChart.option1.series,
                    option1:action.thirdChart.option1,
                    data2:action.thirdChart.option2.series,
                    option2:action.thirdChart.option2
                }:state.fourthChartData.thirdChart,
                fourthChart: action.fourthChart?{
                    option:action.fourthChart.option,
                    data:action.fourthChart.data
                }:state.fourthChartData.fourthChart
            };
            break;
        case 'DASHBOARD_FIFTHCHART_LOAD':
            newState.fifthChartData = {
                question:action.question||defaultState.fifthChartData.question,
                data: action.data,
                option: action.option
            };
            break;
        case 'DASHBOARD_SIXTHCHART_LOAD':
            newState.sixthChartData = {
                question:action.question||defaultState.sixthChartData.question,
                data: action.data,
                option: action.option,
                list:action.list
            };
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