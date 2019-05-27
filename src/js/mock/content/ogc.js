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
                'pageSize': 10,
                'totalCount': 2560,
                'totalPages': 256,
                'result|10': [
                    {
                        id: '@increment',
                        'execute_date': '2018-09-18',
                        'android_id': '732cb*****d44807',
                        'cu': '9008J-PFALBR3',
                        'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
                        'value': 'AUTOMATIC'
                    }
                ],
            }
        }
    }
];
