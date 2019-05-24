import { objectAppend } from '../utils';

const defaultState = {
    loading: false,
    page: {
        pageNo: 1,
        pageCount: 1,
        dataCount: 0
    },
    searchParams: {
        // startTime: moment(new Date()).add(-1,'month'),
        // endTime: moment(new Date())
    },
    list: []
};

export default (state, action) => {
    let newState = {};
    switch (action.type) {
    case 'AUTOTASK_LOADING':
        newState.loading = action.loading;
        break;
    default: return state || defaultState;
    }
    return objectAppend(newState, state);
};
