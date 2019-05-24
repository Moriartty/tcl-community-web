module.exports = [
    {
        desc: '获取组织数据',
        type: 'GET',
        url: '/org/tree',
        params: '从cookie里面获取',
        result: {
            'code': '0',
            'data': [
                { id: 1, name: 'APPD' },
                {
                    id: 4,
                    name: 'SMO',
                    list: [
                        { id: 5, name: 'Project' },
                        {
                            id: 7,
                            name: 'Platform',
                            list: [
                                { id: 8, name: 'SQM' },
                                { id: 9, name: 'AUTO' },
                                { id: 10, name: 'CTR' }
                            ]
                        },
                        { id: 6, name: 'Product' }
                    ]
                },
                { id: 2, name: 'SYSD' },
                { id: 3, name: 'UXD' }
            ]
        }
    },
    {
        desc: '添加组织',
        type: 'POST',
        url: '/org/create',
        params: {
            parentId: '上级组织ID',
            name: '组织名称'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '更新组织',
        type: 'POST',
        url: '/org/update',
        params: {
            id: '当前组织ID',
            parentId: '上级组织ID',
            name: '组织名称'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '删除组织',
        type: 'POST',
        url: '/org/delete',
        params: {
            id: '组织ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    }
];
