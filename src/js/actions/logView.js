import ajax from 'utils/ajax';
let actions = {};

let mockData = [
    {
        'autoId': 2928,
        'filename': 'SDT1_32504148517102940212039844060.zip',
        'filetime': '2018-11-24 22:38:46',
        'imei1': '354457090109400',
        'imei2': '354457090109418',
        'projectname': 'U5A PLUS 4G',
        'productname': '5159',
        'persoSystem': 'y6j2geh0ce20',
        'sdtUsername': 'SUBR_Gauss',
        'sdtCountry': 'BRASIL',
        'tool': 'Sugar',
        'createTime': '2018-11-26 09:55:30',
        'imeiCount': 1,
        'bdDataNum': 0
    },
    {
        'autoId': 2923,
        'filename': 'SDT1_32504148517102940212018995654.zip',
        'filetime': '2018-11-24 22:19:55',
        'imei1': '354457090108964',
        'imei2': '354457090108972',
        'projectname': 'U5A PLUS 4G',
        'productname': '5159',
        'persoSystem': 'y6j2geh0ce20',
        'sdtUsername': 'SUBR_Gauss',
        'sdtCountry': 'BRASIL',
        'tool': 'Sugar',
        'createTime': '2018-11-26 09:55:30',
        'imeiCount': 1,
        'bdDataNum': 0
    },
    {
        'autoId': 2927,
        'filename': 'SDT1_32504148517102940211100350419.zip',
        'filetime': '2018-11-24 21:03:01',
        'imei1': '354457090110549',
        'imei2': '354457090110556',
        'projectname': 'U5A PLUS 4G',
        'productname': '5159',
        'persoSystem': 'y6j2geh0ce20',
        'sdtUsername': 'SUBR_Gauss',
        'sdtCountry': 'BRASIL',
        'tool': 'Sugar',
        'createTime': '2018-11-26 09:55:33',
        'imeiCount': 1,
        'bdDataNum': 0
    },
    {
        'autoId': 2926,
        'filename': 'SDT1_32504148517102940210130510483.zip',
        'filetime': '2018-11-24 20:35:08',
        'imei1': '354457090110143',
        'imei2': '354457090110150',
        'projectname': 'U5A PLUS 4G',
        'productname': '5159',
        'persoSystem': 'y6j2geh0ce20',
        'sdtUsername': 'SUBR_Gauss',
        'sdtCountry': 'BRASIL',
        'tool': 'Sugar',
        'createTime': '2018-11-26 09:55:30',
        'imeiCount': 1,
        'bdDataNum': 0
    },
    {
        'autoId': 2915,
        'filename': 'SDT1_32504148516102940116924255033.zip',
        'filetime': '2018-11-24 16:22:53',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:55:28',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 2798,
        'filename': 'SDT1_32504148514102942143653015704.zip',
        'filetime': '2018-11-24 13:50:50',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:54:56',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 16,
        'filename': 'SDT1_02000108010102040100050402080.zip',
        'filetime': '2018-11-24 10:54:28',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:42:24',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 2797,
        'filename': 'SDT1_32504148514102941170744442087.zip',
        'filetime': '2018-11-24 10:44:28',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:54:54',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 2929,
        'filename': 'SDT1_32504148517102930212150255634.zip',
        'filetime': '2018-11-23 22:52:53',
        'imei1': '354457090110564',
        'imei2': '354457090110572',
        'projectname': 'U5A PLUS 4G',
        'productname': '5159',
        'persoSystem': 'y6j2geh0ce20',
        'sdtUsername': 'SUBR_Gauss',
        'sdtCountry': 'BRASIL',
        'tool': 'Sugar',
        'createTime': '2018-11-26 09:55:30',
        'imeiCount': 1,
        'bdDataNum': 0
    },
    {
        'autoId': 2924,
        'filename': 'SDT1_32504148517102930212130342605.zip',
        'filetime': '2018-11-23 22:33:20',
        'imei1': '354457090110465',
        'imei2': '354457090110473',
        'projectname': 'U5A PLUS 4G',
        'productname': '5159',
        'persoSystem': 'y6j2geh0ce20',
        'sdtUsername': 'SUBR_Gauss',
        'sdtCountry': 'BRASIL',
        'tool': 'Sugar',
        'createTime': '2018-11-26 09:55:30',
        'imeiCount': 1,
        'bdDataNum': 0
    },
    {
        'autoId': 2922,
        'filename': 'SDT1_32504148517102930211140953800.zip',
        'filetime': '2018-11-23 21:49:30',
        'imei1': '354457090110580',
        'imei2': '354457090110598',
        'projectname': 'U5A PLUS 4G',
        'productname': '5159',
        'persoSystem': 'y6j2geh0ce20',
        'sdtUsername': 'SUBR_Gauss',
        'sdtCountry': 'BRASIL',
        'tool': 'Sugar',
        'createTime': '2018-11-26 09:55:29',
        'imeiCount': 1,
        'bdDataNum': 0
    },
    {
        'autoId': 2921,
        'filename': 'SDT1_32504148517102930211120705689.zip',
        'filetime': '2018-11-23 21:27:58',
        'imei1': '354457090110069',
        'imei2': '354457090110077',
        'projectname': 'U5A PLUS 4G',
        'productname': '5159',
        'persoSystem': 'y6j2geh0ce20',
        'sdtUsername': 'SUBR_Gauss',
        'sdtCountry': 'BRASIL',
        'tool': 'Sugar',
        'createTime': '2018-11-26 09:55:28',
        'imeiCount': 1,
        'bdDataNum': 0
    },
    {
        'autoId': 2910,
        'filename': 'SDT1_32504148515102931220316960699.zip',
        'filetime': '2018-11-23 20:19:09',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:55:26',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 2913,
        'filename': 'SDT1_32504148515102931129346462639.zip',
        'filetime': '2018-11-23 19:44:23',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:55:26',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 3135,
        'filename': 'SDT1_32506128616102932159635053377.zip',
        'filetime': '2018-11-23 19:30:37',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:56:29',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 3136,
        'filename': 'SDT1_32506128616102934199338042345.zip',
        'filetime': '2018-11-23 19:30:24',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:56:29',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 2796,
        'filename': 'SDT1_32504148514102931158652400158.zip',
        'filetime': '2018-11-23 18:54:05',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:54:54',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 18,
        'filename': 'SDT1_02000108010102030107020701020.zip',
        'filetime': '2018-11-23 17:27:12',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:42:23',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 3037,
        'filename': 'SDT1_32506128615102930127513475969.zip',
        'filetime': '2018-11-23 17:14:56',
        'imei1': '',
        'imei2': '',
        'projectname': '',
        'productname': '',
        'persoSystem': '',
        'sdtUsername': '',
        'sdtCountry': '',
        'tool': '',
        'createTime': '2018-11-26 09:56:00',
        'imeiCount': 0,
        'bdDataNum': 0
    },
    {
        'autoId': 2794,
        'filename': 'SDT1_32504148514102930116841550514.zip',
        'filetime': '2018-11-23 16:45:01',
        'imei1': '354454090181554',
        'imei2': '000000000000000',
        'projectname': 'U5A PLUS 4G',
        'productname': '5059',
        'persoSystem': 'Y6J2QS31CE10',
        'sdtUsername': 'SU_AnovoPE',
        'sdtCountry': '',
        'tool': 'Sugar',
        'createTime': '2018-11-26 09:54:53',
        'imeiCount': 1,
        'bdDataNum': 0
    }
];
function format (input) {
    if (input) {
        return input.slice(0, 5) + '*****' + input.slice(10, input.length);
    }

    return input;
}
/**
 * 加载log列表
 * @returns {function(*): *}
 */
actions.loadList = (pageNo, pageSize) => (dispatch, getState) => {
    dispatch({ type: 'LOGVIEW_LOADING', loading: true });
    const state = getState().logView;
    const page = state.page;
    const params = state.searchParams;
    let list = [];
    for (let i = 0; i < 10; i++) {
        let temp = mockData[Math.floor((Math.random() * 20))];
        temp.imei1 = format(temp.imei1);
        temp.imei2 = format(temp.imei2);
        list.push(temp);
    }
    return ajax.get('/logView', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize,
        startTime: params.startTime,
        endTime: params.endTime
    }).then(data => {
        dispatch({
            type: 'LOGVIEW_PAGE_LOAD',
            list: list,
            no: pageNo || page.pageNo,
            size: data.pageSize,
            dataCount: data.totalCount
        });
        dispatch({ type: 'LOGVIEW_LOADING', loading: false });
    });
};

export default actions;
