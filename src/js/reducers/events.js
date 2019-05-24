import {objectAppend} from "../utils";

const defaultState = {
    events:[],
    searchParams:{
        event:0
    },

};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'EVENTS_EVENTS_LOAD':
            newState.events = action.data;
            break;
        case 'EVENTS_SEARCHPARAMS_CHANGE':
            newState.searchParams = {...state.searchParams,...action.param}
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}