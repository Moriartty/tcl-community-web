import { objectAppend } from '../utils';

const defaultState = {
    mapType: 'map',
    activityCount:0,
    // secondSubPageShow:false,
    secondSubPage:{
        show:false
    },
    thirdSubPage:{
        show:false,
        time:'',
        value:''
    },
    fifthSubPage:{
        show:false,
    },
    fourthSubPage:{
        show:false,
        time:'',
        actionType:''
    },
    firstSubPage:{
        show:false,
        gender:'',
        tag:''
    },
    // fourthSubPageShow:false,
    // fifthSubPageShow:false,
    selectedProduct:'',
    selectedCountry:'world',
    bubbleChartData: {
        data: [],
        option: {},
    },
    mapChartData:{
        data:[],
        option:{},
        mapJsonData:{}
    },
    firstChartData: {},
    secondChartData: {
        data: {},
        option: {}
    },
    thirdChartData: {
        data: {},
        option: {}
    },
    fourthChartData: {
        data: {},
        option: {}
    },
    fifthChartData: {
        data: [],
        option: {}
    }
};

export default (state, action) => {
    let newState = {};
    switch (action.type) {
        case 'HOME_ACTIVITY_COUNT_LOAD':
            newState.activityCount = action.data;
            break;
        case 'HOME_FIRSTSUBPAGE_SHOW':
            newState.firstSubPage =  {
                show:action.subPageShow,
                gender:action.gender,
                tag:action.tag
            }
            break;
        case 'HOME_SECONDSUBPAGE_SHOW':
            newState.secondSubPage = {
                show:action.subPageShow
            }
            // newState.secondSubPageShow = action.subPageShow;
            newState.selectedProduct = action.selectedProduct;
            break;
        case 'HOME_THIRDSUBPAGE_SHOW':
            newState.thirdSubPage = {
                show:action.subPageShow,
                time:action.time,
                value:action.value
            };
            break;
        case 'HOME_FOURTHSUBPAGE_SHOW':
            newState.fourthSubPage = {
                show:action.subPageShow,
                time:action.time,
                actionType:action.actionType
            };
            break;
        case 'HOME_FIFTHSUBPAGE_SHOW':
            newState.fifthSubPage = {
                show:action.subPageShow
            }
            newState.selectedProduct = action.selectedProduct;
            break;
        case 'HOME_COUNTRY_CHANGE':
            // if(action.selectedCountry=='United States'){
            //     // action.selectedCountry='USA'
            //     action.selectedCountry='United States'
            // }
            if(state.selectedCountry==action.selectedCountry){
                newState.selectedCountry = 'world';
            }else{
                newState.selectedCountry = action.selectedCountry;
            }

            break;
        case 'HOME_TOGGLE_MAP':
            newState.mapType = action.mapType;
            break;
        case 'HOME_BUBBLE_DATA':
            newState.bubbleChartData = {
                data: action.data,
                option: action.option,
            };
            break;
        case 'HOME_REFRESHBUBBLE_DATA':
            newState.bubbleChartData = {
                data: action.chartData.data,
                option: action.chartData.option,
            };
            break;
        case 'HOME_MAP_DATA':
            newState.mapChartData = {
                data: action.data,
                option: action.option||state['mapChartData'].option,
                mapJsonData: action.mapJsonData||state['mapChartData'].mapJsonData
            };
            break;
        case 'HOME_FIRST_DATA':
            newState.firstChartData = {
                // data:action.data,
                option: action.option
            };
            break;
        case 'HOME_SECOND_DATA':
            newState.secondChartData = {
                data: action.data,
                option: action.option
            };
            break;
        case 'HOME_THIRD_DATA':
            newState.thirdChartData = {
                data: action.data,
                option: action.option
            };
            break;
        case 'HOME_FOURTH_DATA':
            newState.fourthChartData = {
                data: action.data,
                option: action.option
            };
            break;
        case 'HOME_FIFTH_DATA':
            newState.fifthChartData = {
                data: action.data,
                option: action.option
            };
            break;

        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};


