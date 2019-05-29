import { objectAppend } from '../utils';
import moment from 'moment';

let defaultState = {
    loading: false,
    page: {
        pageNo: 1,
        pageSize: 20,
        dataCount: 0
    },
    searchParams: {
        title:''
        // startTime: moment(new Date()).add(-1,'month'),
        // endTime: moment(new Date())
    },
    editData:{
        id:'',
        title:'',
        content:'',
        author:'',
        happenTime:''
    },
    editModalShow:false,
    editModalLoading:false,
    list: []
};

export default (state, action) => {
    let newState = {};
    switch (action.type) {
        case 'OGC_LOADING':
            newState.loading = action.loading;
            break;
        case 'OGC_SEARCHPARAM':
            newState.searchParams = action.params;
            break;
        case 'OGC_SEARCHPARAM_CHANGE':
            console.log(action.params);
            newState.searchParams = action.params;
            break;
        case 'OGC_LOAD':
            newState.page = {
                pageNo: action.pageNo,
                pageSize: action.pageSize,
                dataCount: action.dataCount
            };
            newState.list = action.list;
            break;
        case 'OGC_EDITMODAL_SHOW':
            newState.editModalShow = action.show;
            break;
        case 'OGC_EDITMODAL_LOADING':
            newState.editModalLoading = action.loading;
            break;
        case 'OGC_EDITMODAL_DATA':
            newState.editData = action.data;
            break;
        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};
