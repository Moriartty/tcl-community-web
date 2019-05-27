import ajax from '../utils/ajax';
import test,{get} from '../utils/fetch';
let actions = {};

actions.loadList = (pageNo, pageSize) => (dispatch, getState) => {
    dispatch({ type: 'OGC_LOADING', loading: true });
    const state = getState()['ogc'];
    const page = state.page;
    const params = state.searchParams;

    return get('/ogc', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }).then((resp) => {
        const data = resp.data;
        console.log('mock',data);
        dispatch({ type: 'OGC_LOADING', loading: false });
        dispatch({
            type: 'OGC_LOAD',
            pageNo: pageNo || data.pageNo,
            pageSize: data.pageSize,
            dataCount: data.totalCount,
            list: data.result
        });
    });


    // return ajax.get('/ogc', {
    //     pageNo: pageNo || page.pageNo,
    //     pageSize: pageSize || page.pageSize
    // }).then((data) => {
    //     console.log('mock',data);
    //     dispatch({ type: 'OGC_LOADING', loading: false });
    //     dispatch({
    //         type: 'OGC_LOAD',
    //         pageNo: pageNo || data.pageNo,
    //         pageSize: data.pageSize,
    //         dataCount: data.totalCount,
    //         list: data.result
    //     });
    // });
};

export default actions;
