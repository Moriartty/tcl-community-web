
module.exports = [
    {
        desc: '获取log列表',
        type: 'GET',
        url: '/logView',
        params: {
            pageNo: '页码',
            'pageSize': '每页显示的条数（不传默认10条）'
        },
        result: {
            'code': '0',
            'data': {
                'pageNo': 1,
                'pageSize': 10,
                'result|10': [
                    {
                        id: '@increment',
                        filename: 'SDT1_325041485171029402120398440' + '@increment',
                        productname: '@pick(2794,4288,3965,1254,6533,7599,3451)',
                        projectname: '@pick("U5A Plus 4G","")',
                        sdtCountry: 'BRASIL',
                        sdtUsername: 'SUBR_Gauss',
                        filetime: '@pick("2018-11-24","2018-11-23","2018-11-22","2018-11-21")',
                        imei1: '35445*****09400',
                        imei2: '@pick(35445*****09418,00000*****00000,35445*****10077,35445*****10598,35445*****08972,35445*****10556)',
                        tool: '@pick("Sugar","")',
                        persoSystem: 'y6j2geh0ce20'
                    }
                ],
                'totalCount': 3300,
                'totalPages': 330
            }
        }
    }
];
