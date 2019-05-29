module.exports = [
    {
        desc: '获取ogc列表',
        type: 'GET',
        url: '/ogc',
        params: {
            pageNo: '页码',
            'pageSize': '每页显示的条数（不传默认10条）'
        },
        result: {
            'code': '0',
            'data': {
                'pageNo': 1,
                'pageSize': 20,
                'totalCount': 1000,
                'totalPages': 50,
                'result|10': [
                    {
                        id: '@increment',
                        title:'@ctitle',
                        content:'@cparagraph',
                        author: '@cname',
                        happenTime:'@date(yyyy-MM-dd)'
                    }
                ],
            }
        }
    }
];
