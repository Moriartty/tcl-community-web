module.exports = [
    {
        desc: '获取tags列表',
        type: 'GET',
        url: '/tags',
        params: {
            pageNo: '页码',
            'pageSize': '每页显示的条数（不传默认10条）'
        },
        result: {
            'code': '0',
            'data': [
                {
                    name:'一级标签',
                    'list|40':[
                        {
                            id:'@increment',
                            tagName:'@cword(2,4)',
                            createdUserId:'@increment',
                            createdTime:'@date(yyyy-MM-dd)'
                        }
                    ]
                },
                {
                    name:'二级标签',
                    'list|60':[
                        {
                            id:'@increment',
                            tagName:'@cword(3,5)',
                            createdUserId:'@increment',
                            createdTime:'@date(yyyy-MM-dd)'
                        }
                    ]
                }
            ]
        }
    }
];
