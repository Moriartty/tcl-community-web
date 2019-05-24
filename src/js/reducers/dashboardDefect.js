import { objectAppend } from '../utils';

const defaultState = {
    detailPageLoading:true,
    selectedCountry:'world',
    selectedProduct:'',
    pain:'',
    firstChartData: {
        data:[],
        // country:{},
        option: {},
        mapJsonData:{}
    },
    secondChartData:{
        option:{},
        data:[]
    },
    thirdChartData:{
        option:{},
        data:[]
    },
    fourthChartData:{
        option:{},
        data:[]
    }
}
export default (state, action) => {
    let newState = {};
    switch (action.type) {
        case 'DASHBOARD3_SEARCHPARAMS_CHANGE':
            newState.selectedCountry = action.country;
            newState.selectedProduct = action.product;
            newState.pain = action.pain;
            break;
        case 'DASHBOARD4_DETAILPAGE_LOADING':
            newState.detailPageLoading = action.detailPageLoading;
            break;
        case 'DASHBOARD4_FIRST_CHART_DATA':
            newState.firstChartData = {
                // country: action.data.country,
                data: action.data,
                option: action.option,
                mapJsonData:action.mapJsonData
            }
            break;
        case 'DASHBOARD4_SECOND_CHART_DATA':
            newState.secondChartData = {
                data: action.data.data,
                option: action.data.option
            }
            break;
        case 'DASHBOARD4_THIRD_CHART_DATA':
            newState.thirdChartData = {
                data: action.data.data,
                option: action.data.option
            }
            break;
        case 'DASHBOARD4_FOURTH_CHART_DATA':
            newState.fourthChartData = {
                data: action.data.data,
                option: action.data.option
            }
            break;
            default:return state || defaultState;
        }

        return objectAppend(newState, state);
}