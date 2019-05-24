module.exports = [
    {
        desc: '获取log列表',
        type: 'GET',
        url: '/care_survey_online',
        params: {
            pageNo: '页码',
            'pageSize': '每页显示的条数（不传默认10条）'
        },
        result: {
            'code': '0',
            'data': {
                'pageNo': 1,
                'pageSize': 10,
                'totalCount': 4810,
                'totalPages': 481
            }
        }
    }
];
