import {get,post} from 'utils/fetch';

let actions = {};

actions.loadAllTags = () => dispatch => {
    dispatch({type:'TAGS_LOADING',loading:true});
    return get('/tags').then(data=>{
        dispatch({type:'TAGS_LOAD',data:data});
        dispatch({type:'TAGS_LOADING',loading:false});
    })
};

export default actions;
