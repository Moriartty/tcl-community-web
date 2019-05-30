import {objectAppend} from '../utils';

const defaultState = {
    loading:false,
    data:[],
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'TAGS_LOADING':
            newState.loading = action.loading;
            break;
        case 'TAGS_LOAD':
            newState.data = action.data;
            break;
        default : return state||defaultState;
    }
    return objectAppend(newState,state);
}
