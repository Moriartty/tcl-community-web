export default {
    'systemConfig/role': {
        name: 'menuName_systemConfig_role',
        icon: 'bars',
        operations: [
            { key: 'CREATE', name: 'role_operation_add' },
            { key: 'UPDATE', name: 'role_operation_modify' },
            { key: 'DELETE', name: 'role_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Role')); }, 'role'); }
    },
    'systemConfig/menu': {
        name: 'menuName_systemConfig_menu',
        icon: 'bars',
        operations: [
            { key: 'CREATE', name: 'menu_operation_add' },
            { key: 'UPDATE', name: 'menu_operation_update' },
            { key: 'EDIT', name: 'menu_operation_edit' },
            { key: 'DELETE', name: 'menu_operation_delete' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Menu')); }, 'menu'); }
    },
    'systemConfig/user': {
        name: 'menuName_systemConfig_user',
        icon: 'contacts',
        operations: [
            { key: 'CREATE', name: 'common_operation_add' },
            { key: 'UPDATE', name: 'common_operation_modify' },
            { key: 'DELETE', name: 'common_operation_delete' },
            { key: 'ADD_STAFF', name: 'user_operation_addStaff' },
            { key: 'ADD_ORG', name: 'user_operation_addOrg' },
            { key: 'RESET', name: 'user_operation_reset' },
            { key: 'LEAVE', name: 'user_operation_leave' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/User')); }, 'user'); }
    },
};
