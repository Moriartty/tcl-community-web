import ajax from 'utils/ajax';

let actions = {};
actions.loadFirstTable = () => dispatch => {
    const mockData = [
        {'con-name':'app_update',count:3246,'count-per':'20%',value:0,'value-per':0,'con-flag':true}
    ];
    dispatch({type:'CONVERSIONS_FIRSTTABLE_LOAD',data:mockData});
}

actions.loadSecondTable = () => dispatch => {
    const mockData = [
        {'col1':'',col2:'','col3':'',col4:'','col5':''}
    ];
    dispatch({type:'CONVERSIONS_SECONDTABLE_LOAD',data:mockData});
}

export default actions;