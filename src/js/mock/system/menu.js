module.exports = [
    {
        desc: '获取用户的菜单数据',
        type: 'GET',
        url: '/menu/user',
        params: '从cookie里面获取',
        result: {
            'code': '0',
            'data': [
                { id: 1, name: 'menuName_home', module: 'home' },
                {
                    id: 7,
                    name: 'menuName_contentMgr',
                    list:[
                        { id: 700, name: 'menuName_contentMgr_OGC', module: 'contentMgr/OGC', functions: ['SEARCH'] },
                        { id: 701, name: 'menuName_contentMgr_PGC', module: 'contentMgr/PGC', functions: ['SEARCH'] },
                        { id: 702, name: 'menuName_contentMgr_UGC', module: 'contentMgr/UGC', functions: ['SEARCH'] },
                        { id: 703, name: 'menuName_contentMgr_RichTextEditor', module: 'contentMgr/RichTextEditor',functions: ['SEARCH']},
                    ]
                },
                {
                    id: 9,
                    name: 'menuName_systemConfig',
                    list: [
                        { id: 900, name: 'menuName_systemConfig_role', module: 'systemConfig/role', functions: ['CREATE', 'UPDATE', 'DELETE'] },
                        { id: 901, name: 'menuName_systemConfig_menu', module: 'systemConfig/menu', functions: ['CREATE', 'UPDATE', 'EDIT', 'DELETE'] },
                        { id: 902, name: 'menuName_systemConfig_user', module: 'systemConfig/user', functions: ['CREATE', 'UPDATE', 'DELETE', 'ADD_STAFF', 'ADD_ORG', 'RESET', 'LEAVE'] },
                    ]
                }
            ]
        }
    },
    {
        desc: '获取常用模块列表',
        type: 'GET',
        url: '/home/entry',
        params: {},
        result: {
            'code': '0',
            'data': [
                'systemConfig/role', 'systemConfig/menu', 'systemConfig/user'
            ]
        }
    },
    {
        desc: '获取所有菜单数据',
        type: 'GET',
        url: '/menu',
        params: '无',
        result: {
            'code': '0',
            'data': [
                { id: 1, name: 'menuName_home', module: 'home', display: 1 },
                {
                    id: 7,
                    name: 'menuName_contentMgr',
                    list:[
                        { id: 700, name: 'menuName_contentMgr_OGC', module: 'contentMgr/OGC'},
                        { id: 701, name: 'menuName_contentMgr_PGC', module: 'contentMgr/PGC'},
                        { id: 702, name: 'menuName_contentMgr_UGC', module: 'contentMgr/UGC'},
                        { id: 703, name: 'menuName_contentMgr_RichTextEditor', module: 'contentMgr/RichTextEditor'},
                    ]
                },
                {
                    id: 9,
                    name: 'menuName_systemConfig',
                    list: [
                        { id: 900, name: 'menuName_systemConfig_role', module: 'systemConfig/role', display: 1 },
                        { id: 901, name: 'menuName_systemConfig_menu', module: 'systemConfig/menu', display: 1 },
                        { id: 902, name: 'menuName_systemConfig_user', module: 'systemConfig/user', display: 1 },

                    ],
                    display: 1
                }
            ]
        }
    },
    {
        desc: '添加菜单',
        type: 'POST',
        url: '/menu/create',
        params: {
            parentId: '父级目录菜单ID',
            name: '菜单名称',
            module: '菜单模块名',
            display: '是否显示。1显示，0隐藏'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '更新菜单',
        type: 'POST',
        url: '/menu/update',
        params: {
            id: '菜单ID',
            parentId: '父级目录菜单ID',
            name: '菜单名称',
            module: '菜单模块名',
            display: '是否显示。1显示，0隐藏'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '删除菜单',
        type: 'POST',
        url: '/menu/delete',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '菜单排序－上移',
        type: 'POST',
        url: '/menu/up',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '菜单排序－下移',
        type: 'POST',
        url: '/menu/down',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    }
];
