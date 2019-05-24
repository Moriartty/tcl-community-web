import {objectAppend} from "../utils"

const defaultState = {
    firstTableData : [],
    secondTableData : []
}

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'CONVERSIONS_FIRSTTABLE_LOAD':
            newState.firstTableData = action.data;
            break;
        case 'CONVERSIONS_SECONDTABLE_LOAD':
            newState.secondTableData = action.data;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}