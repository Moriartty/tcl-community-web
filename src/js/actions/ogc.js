import ajax from '../utils/ajax';
let actions = {};

const mockData = {
    'RECORDS': [
        {
            'execute_date': '2018-09-18',
            'android_id': '732cb*****d44807',
            'cu': '9008J-PFALBR3',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'AUTOMATIC'
        },
    ]
}

actions.loadList = (pageNo, pageSize) => (dispatch, getState) => {
    dispatch({ type: 'OGC_LOADING', loading: true });
    const state = getState()['ogc'];
    const page = state.page;
    const params = state.searchParams;
    let list = [];
    for (let i = 0; i < 1; i++) {
        list.push(mockData.RECORDS[i]);
    }
    return ajax.get('/ogc', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }).then((data) => {
        dispatch({ type: 'OGC_LOADING', loading: false });
        dispatch({
            type: 'OGC_LOAD',
            pageNo: pageNo || data.pageNo,
            pageSize: data.pageSize,
            dataCount: data.totalCount,
            list: list
        });
    });
};

export default actions;
