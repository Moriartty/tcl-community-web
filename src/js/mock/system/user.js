module.exports = [
    {
        desc: '获取用户列表',
        type: 'GET',
        url: '/user',
        params: {
            pageNo: '页码',
            'pageSize': '每页显示的条数（不传默认10条）',
            name: '姓名的关键字查询',
            orgId: '组织ID，如果上面的search不为空，则忽略此参数'
        },
        result: {
            'code': '0',
            'data': {
                'pageNo': 1,
                'pageSize': 10,
                'result|10': [
                    {
                        'id': '@increment',
                        // 'loginName':'@first',
                        'name': '@cname',
                        roles: [{ roleCode: 'HR' }],
                        'org': '@cword(4)',
                        // isPic:'@pick(0,1)', //是否微信管理员
                        'phone': '138@cword("0123456789", 8)',
                        'sex': '@pick(["男", "女"])'
                    }
                ],
                'totalCount': 30,
                'totalPages': 3
            }
        }
    },
    {
        desc: '获取指定用户信息',
        type: 'GET',
        url: '/user/info',
        params: {
            id: '用户ID'
        },
        result: {
            'code': '0',
            'data': {
                // no:'NO@cword("0123456789", 6)',
                email: '@first()@tcl.com',
                id: 6,
                // 'loginName':'@first',
                name: '@cname',
                roles: [{ id: 1, roleCode: 'HR', roleName: '管人力资源的' }], // 注意这里roleCode为角色名，roleName为描述
                org: '@cword(4)',
                orgId: 1,
                // isPic:'@pick(0,1)', //是否场地负责人
                // education:'本科', //学历
                // school:'惠州学院', //毕业院校
                phone: '138@cword("0123456789", 8)',
                birthday: '1992-06-06',
                nativePlace: '广东惠州', // 籍贯
                lastLogin: '2017-09-15 10:45:33',
                createTime: '2014-10-14 12:00:00',
                avatar: 'cloud/avatar/13888888888/a_admin20161227151148.jpg'
            }
        }
    },
    {
        desc: '添加用户',
        type: 'POST',
        url: '/user/create',
        params: {
            // loginName:'登录账号',
            password: '登录密码',
            name: '姓名',
            roleIds: '角色ID，多个以逗号分隔',
            // no:'工号', //若为空则后端自动生成
            orgId: '组织ID',
            email: '邮箱',
            phone: '手机'
            // isPic:'是否场地负责人'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '更新用户',
        type: 'POST',
        url: '/user/update',
        params: {
            id: '用户ID',
            name: '姓名',
            roleIds: '角色ID，多个以逗号分隔',
            // no:'工号', //若为空则后端自动生成
            orgId: '组织ID',
            email: '邮箱',
            phone: '电话'
            // isPic:'是否场地负责人'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '设为离职',
        type: 'POST',
        url: '/user/dismiss',
        params: {
            id: '用户ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '密码重置',
        type: 'POST',
        url: '/user/password-reset',
        params: {
            id: '用户ID',
            password: '登录密码'
        },
        result: {
            'code': '0',
            'data': {}
        }
    }
];
