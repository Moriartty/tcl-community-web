import { objectAppend } from '../utils';
import moment from 'moment';

let defaultState = {
    loading: false,
    page: {
        pageNo: 1,
        pageSize: 1,
        dataCount: 0
    },
    searchParams: {
        execute_date: moment()
        // startTime: moment(new Date()).add(-1,'month'),
        // endTime: moment(new Date())
    },
    list: []
};

export default (state, action) => {
    let newState = {};
    switch (action.type) {
    case 'UB_ANALYSIS_LOADING':
        newState.loading = action.loading;
        break;
    case 'UB_ANALYSIS_SEARCHPARAM':
        newState.searchParams = action.params;
        break;
    case 'UB_ANALYSIS_SEARCHPARAM_CHANGE':
        console.log(action.params);
        newState.searchParams = action.params;
        break;
    case 'UB_ANALYSIS_LOAD':
        newState.page = {
            pageNo: action.pageNo,
            pageSize: action.pageSize,
            dataCount: action.dataCount
        };
        newState.list = action.list;
        break;
    default:return state || defaultState;
    }
    return objectAppend(newState, state);
};
