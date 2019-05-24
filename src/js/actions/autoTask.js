import ajax from 'utils/ajax';
let actions = {};

actions.loadList = (pageNo, pageSize) => (dispatch, getState) => {
    dispatch({ type: 'AUTOTASK_LOADING', loading: true });
    const state = getState().autoTask;
    const page = state.page;
    const params = state.searchParams;
    return ajax.get('/test', {}).then(data => {
        dispatch({ type: 'AUTOTASK_LOADING' });
    });
};
export default actions;
