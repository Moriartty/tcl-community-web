import systemConfig from './systemConfig';
import contentMgr from './contentMgr';

export default {
    ...systemConfig,
    ...contentMgr,
    home: {
        name: 'menuName_home',
        icon: 'home',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Home')); }, 'home'); }
    },
    tagsMgr:{
        name:'menuName_tagsMgr',
        icon:'tags',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/TagsManagement')); }, 'tagsManagement'); }
    },
    profile: {
        name: 'menuName_profile',
        icon: 'user',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Profile')); }, 'profile'); }
    }
};
