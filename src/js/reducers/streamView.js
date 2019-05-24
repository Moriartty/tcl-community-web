import {objectAppend} from "../utils"

const defaultState = {
    loading:false,
    chartData:{
        option:{},
        data:{}
    }
}

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'STREAMVIEW_CHART_LOAD':
            newState.chartData = action.chartData;
            break;
        case 'STREAMVIEW_LOADING':
            newState.loading = action.loading;
            break;
        default:
            return state||defaultState;
    };
    return objectAppend(newState,state);
}