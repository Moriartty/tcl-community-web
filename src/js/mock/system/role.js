module.exports = [
    {
        desc: '获取角色列表',
        type: 'GET',
        url: '/role',
        params: '需要根据当前登录角色判断返回数据',
        result: {
            'code': '0',
            'data': [
                { id: 1, name: '用户', desc: '也被称作用户管理员。' },
                { id: 2, name: 'UE', desc: '也被称作用户管理员。' },
                { id: 3, name: 'SWE', desc: '也被称作用户管理员。' },
                { id: 4, name: 'SQE', desc: '也被称作用户管理员。' },
                { id: 5, name: '管理员', desc: '系统管理员。' }
            ]
        }
    },
    {
        desc: '获取指定角色有哪些菜单权限',
        type: 'GET',
        url: '/role/auth',
        params: {
            id: '角色ID'
        },
        result: {
            'code': '0',
            data: [
                { menuId: 1 }, // 目录
                { menuId: 900, functions: ['CREATE', 'UPDATE', 'DELETE'] }
            ]
        }
    },
    {
        desc: '更新指定角色的菜单权限',
        type: 'POST',
        url: '/role/auth-update',
        params: {
            id: '角色ID',
            data: '权限JSON串：[{menuId:6},{menuId:9, functions:["CREATE","UPDATE"]}]' // 注意有些菜单是没有functions字段的，如目录
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '添加角色',
        type: 'POST',
        url: '/role/create',
        params: {
            name: '角色名称',
            desc: '描述'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '更新角色',
        type: 'POST',
        url: '/role/update',
        params: {
            id: '角色ID',
            name: '角色名称',
            desc: '描述'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '删除角色',
        type: 'POST',
        url: '/role/delete',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    }
];
