export default {
    'tBase/authentication': {
        name: 'menuName_tBase_authentication',
        icon: 'team',
        operations: [
            { key: 'CREATE', name: 'authentication_operation_add' },
            { key: 'UPDATE', name: 'authentication_operation_modify' },
            { key: 'DELETE', name: 'authentication_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/database': {
        name: 'menuName_tBase_database',
        icon: 'database',
        operations: [
            { key: 'CREATE', name: 'database_operation_add' },
            { key: 'UPDATE', name: 'database_operation_modify' },
            { key: 'DELETE', name: 'database_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/storage': {
        name: 'menuName_tBase_storage',
        icon: 'folder',
        operations: [
            { key: 'CREATE', name: 'storage_operation_add' },
            { key: 'UPDATE', name: 'storage_operation_modify' },
            { key: 'DELETE', name: 'storage_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/hosting': {
        name: 'menuName_tBase_hosting',
        icon: 'global',
        operations: [
            { key: 'CREATE', name: 'hosting_operation_add' },
            { key: 'UPDATE', name: 'hosting_operation_modify' },
            { key: 'DELETE', name: 'hosting_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/function': {
        name: 'menuName_tBase_function',
        icon: 'ellipsis',
        operations: [
            { key: 'CREATE', name: 'function_operation_add' },
            { key: 'UPDATE', name: 'function_operation_modify' },
            { key: 'DELETE', name: 'function_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/mlKit': {
        name: 'menuName_tBase_mlKit',
        icon: 'medium',
        operations: [
            { key: 'CREATE', name: 'mlKit_operation_add' },
            { key: 'UPDATE', name: 'mlKit_operation_modify' },
            { key: 'DELETE', name: 'mlKit_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/carshlytics': {
        name: 'menuName_tBase_carshlytics',
        icon: 'setting',
        operations: [
            { key: 'CREATE', name: 'carshlytics_operation_add' },
            { key: 'UPDATE', name: 'carshlytics_operation_modify' },
            { key: 'DELETE', name: 'carshlytics_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/performance': {
        name: 'menuName_tBase_performance',
        icon: 'dashboard',
        operations: [
            { key: 'CREATE', name: 'performance_operation_add' },
            { key: 'UPDATE', name: 'performance_operation_modify' },
            { key: 'DELETE', name: 'performance_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/testLab': {
        name: 'menuName_tBase_testLab',
        icon: 'tablet',
        operations: [
            { key: 'CREATE', name: 'testLab_operation_add' },
            { key: 'UPDATE', name: 'testLab_operation_modify' },
            { key: 'DELETE', name: 'testLab_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/dashboard': {
        name: 'menuName_tBase_dashboard',
        icon: 'bar-chart',
        operations: [
            { key: 'CREATE', name: 'dashboard_operation_add' },
            { key: 'UPDATE', name: 'dashboard_operation_modify' },
            { key: 'DELETE', name: 'dashboard_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Dashboard')); }, 'dashboard'); }
    },
    'tBase/events': {
        name: 'menuName_tBase_events',
        icon: 'deployment-unit',
        operations: [
            { key: 'CREATE', name: 'events_operation_add' },
            { key: 'UPDATE', name: 'events_operation_modify' },
            { key: 'DELETE', name: 'events_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Events')); }, 'events'); }
    },
    'tBase/conversions': {
        name: 'menuName_tBase_conversions',
        icon: 'swap',
        operations: [
            { key: 'CREATE', name: 'conversions_operation_add' },
            { key: 'UPDATE', name: 'conversions_operation_modify' },
            { key: 'DELETE', name: 'conversions_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Conversions')); }, 'conversions'); }
    },
    'tBase/audiences': {
        name: 'menuName_tBase_audiences',
        icon: 'global',
        operations: [
            { key: 'CREATE', name: 'audiences_operation_add' },
            { key: 'UPDATE', name: 'audiences_operation_modify' },
            { key: 'DELETE', name: 'audiences_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/funnels': {
        name: 'menuName_tBase_funnels',
        icon: 'project',
        operations: [
            { key: 'CREATE', name: 'funnels_operation_add' },
            { key: 'UPDATE', name: 'funnels_operation_modify' },
            { key: 'DELETE', name: 'funnels_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/userProperties': {
        name: 'menuName_tBase_userProperties',
        icon: 'user',
        operations: [
            { key: 'CREATE', name: 'userProperties_operation_add' },
            { key: 'UPDATE', name: 'userProperties_operation_modify' },
            { key: 'DELETE', name: 'userProperties_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/latestRelease': {
        name: 'menuName_tBase_latestRelease',
        icon: 'rocket',
        operations: [
            { key: 'CREATE', name: 'latestRelease_operation_add' },
            { key: 'UPDATE', name: 'latestRelease_operation_modify' },
            { key: 'DELETE', name: 'latestRelease_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
    'tBase/retention': {
        name: 'menuName_tBase_retention',
        icon: 'heart',
        operations: [
            { key: 'CREATE', name: 'retention_operation_add' },
            { key: 'UPDATE', name: 'retention_operation_modify' },
            { key: 'DELETE', name: 'retention_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Retention')); }, 'retention'); }
    },
    'tBase/streamView': {
        name: 'menuName_tBase_streamView',
        icon: 'clock-circle',
        operations: [
            { key: 'CREATE', name: 'streamView_operation_add' },
            { key: 'UPDATE', name: 'streamView_operation_modify' },
            { key: 'DELETE', name: 'streamView_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/StreamView')); }, 'streamView'); }
    },
    'tBase/debugView': {
        name: 'menuName_tBase_debugView',
        icon: 'project',
        operations: [
            { key: 'CREATE', name: 'debugView_operation_add' },
            { key: 'UPDATE', name: 'debugView_operation_modify' },
            { key: 'DELETE', name: 'debugView_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/WhitePage')); }, 'whitePage'); }
    },
}