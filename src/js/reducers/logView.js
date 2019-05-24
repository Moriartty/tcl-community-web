import { objectAppend } from '../utils';
import moment from 'moment';

const defaultState = {
    loading: false,
    historySearchParams: {
        test1: {
            startTime: moment(new Date()).add(-1, 'month'),
            endTime: moment(new Date())
        },
        test2: {
            startTime: moment(new Date()).add(-1, 'month'),
            endTime: moment(new Date())
        }
    },
    page: {
        pageNo: 1,
        pageSize: 1,
        dataCount: 0
    },
    searchParams: {
        startTime: moment(new Date()).add(-1, 'month'),
        endTime: moment(new Date())
    },
    list: []
};

export default (state, action) => {
    let newState = {};
    switch (action.type) {
    case 'LOGVIEW_LOADING':
        newState.loading = action.loading;
        break;
    case 'LOGVIEW_SEARCHPARAMS':
        newState.searchParams = action.params;
        break;
    case 'LOGVIEW_PAGE_LOAD':
        newState.page = {
            pageNo: action.no,
            pageSize: action.count,
            dataCount: action.dataCount
        };
        newState.list = action.list;
        break;
    case 'LOGVIEW_SEARCHPARAMS_CHANGE':
        newState.searchParams = action.params;
        break;
    default:return state || defaultState;
    }
    return objectAppend(newState, state);
};
