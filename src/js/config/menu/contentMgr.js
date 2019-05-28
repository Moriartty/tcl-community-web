export default {
    'contentMgr/OGC': {
        name: 'menuName_contentMgr_OGC',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/OGC')); }, 'OGC'); }
    },
    'contentMgr/PGC': {
        name: 'menuName_contentMgr_PGC',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/PGC')); }, 'PGC'); }
    },
    'contentMgr/UGC': {
        name: 'menuName_contentMgr_UGC',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/UGC')); }, 'UGC'); }
    },
    'contentMgr/RichTextEditor': {
        name: 'menuName_contentMgr_RichTextEditor',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/RichTextEditor')); }, 'RichTextEditor'); }
    },
}
