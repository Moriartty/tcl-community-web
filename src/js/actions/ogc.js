
import {get,post} from '../utils/fetch';
let actions = {};

/**
 * 加载OGC列表
 * @param pageNo
 * @param pageSize
 * @returns {function(*, *)}
 */
actions.loadList = (pageNo, pageSize) => (dispatch, getState) => {
    dispatch({ type: 'OGC_LOADING', loading: true });
    const state = getState()['ogc'];
    const page = state.page;
    const params = state.searchParams;

    return get('/ogc', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }).then((data) => {
        dispatch({ type: 'OGC_LOADING', loading: false });
        dispatch({
            type: 'OGC_LOAD',
            pageNo: pageNo || data.pageNo,
            pageSize: data.pageSize,
            dataCount: data.totalCount,
            list: data.result
        });
    });
};
/**
 * 保存编辑
 * @param data
 * @returns {function(*)}
 */
actions.editItem = (data) => dispatch => {
    dispatch({type:'OGC_EDITMODAL_LOADING',loading:true});
    post('/ogc',data).then(data=>{
        dispatch({type:'OGC_EDITMODAL_LOADING',loading:false});
        dispatch({type:'OGC_EDITMODAL_SHOW',show:false});
    })
};

export default actions;
