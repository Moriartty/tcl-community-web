import ajax from 'utils/ajax';

let actions = {};
/*eslint-disable*/
const mockData = {
    'RECORDS': [
        {
            'id': 88988,
            'imei': '86205*****45959',
            'card_number': '00000*****41',
            'model': 'TCL 580',
            'email': '13***44260333',
            'create_date': '2018\/5\/15 10:54:50',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88984,
            'imei': '86084*****93515',
            'card_number': '00000*****70',
            'model': 'TCL 950',
            'email': '13***80430974',
            'create_date': '2018\/5\/15 10:29:35',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88983,
            'imei': '86084*****41876',
            'card_number': '00000*****60',
            'model': 'TCL 950',
            'email': '13***00065451',
            'create_date': '2018\/5\/15 10:24:43',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88982,
            'imei': '86205*****88674',
            'card_number': '00000*****23',
            'model': 'TCL 580',
            'email': '13***12395010',
            'create_date': '2018\/5\/15 10:11:34',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88951,
            'imei': '86205*****76498',
            'card_number': '00000*****56',
            'model': 'TCL 580',
            'email': '13***90906535',
            'create_date': '2018\/5\/14 22:26:19',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88921,
            'imei': '86205*****52953',
            'card_number': '00000*****21',
            'model': 'TCL 580',
            'email': '13***36789022',
            'create_date': '2018\/5\/14 18:15:00',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88919,
            'imei': '86961*****93125',
            'card_number': '00000*****79',
            'model': 'TCL 520',
            'email': '15***85477352',
            'create_date': '2018\/5\/14 18:03:30',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88887,
            'imei': '86205*****01245',
            'card_number': '00000*****49',
            'model': 'TCL 580',
            'email': '18***34513767',
            'create_date': '2018\/5\/14 14:38:45',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88874,
            'imei': '86205*****17291',
            'card_number': '00000*****10',
            'model': 'TCL 580',
            'email': '13***53602813',
            'create_date': '2018\/5\/14 12:05:55',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88845,
            'imei': '86205*****35053',
            'card_number': '00000*****94',
            'model': 'TCL 580',
            'email': '18***66326637',
            'create_date': '2018\/5\/13 21:49:06',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88840,
            'imei': '86205*****12316',
            'card_number': '00000*****29',
            'model': 'TCL 580',
            'email': '18***35620738',
            'create_date': '2018\/5\/13 20:56:35',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88837,
            'imei': '86205*****13134',
            'card_number': '00000*****05',
            'model': 'TCL 580',
            'email': '15***789191@qq.com',
            'create_date': '2018\/5\/13 20:29:33',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88822,
            'imei': '86084*****95665',
            'card_number': '00000*****72',
            'model': 'TCL 750',
            'email': '18***98481347',
            'create_date': '2018\/5\/13 18:45:07',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88788,
            'imei': '86961*****79594',
            'card_number': '00000*****00',
            'model': 'TCL 520',
            'email': '17***20965176',
            'create_date': '2018\/5\/13 14:59:04',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88782,
            'imei': '86084*****06433',
            'card_number': '00000*****56',
            'model': 'TCL 750',
            'email': '13***32172095',
            'create_date': '2018\/5\/13 14:39:46',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88753,
            'imei': '86961*****59112',
            'card_number': '00000*****87',
            'model': 'TCL 520',
            'email': '17***38202295',
            'create_date': '2018\/5\/13 10:01:35',
            'country': 'cn',
            'distributor': '蜗牛移动'
        },
        {
            'id': 88747,
            'imei': '86205*****14112',
            'card_number': '00000*****74',
            'model': 'TCL 580',
            'email': '18***96763953',
            'create_date': '2018\/5\/13 09:24:00',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88726,
            'imei': '86084*****48836',
            'card_number': '00000*****75',
            'model': 'TCL 750',
            'email': '13***84250062',
            'create_date': '2018\/5\/12 22:24:28',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88724,
            'imei': '86084*****69247',
            'card_number': '00000*****36',
            'model': 'TCL 750',
            'email': '18***35440284',
            'create_date': '2018\/5\/12 22:17:32',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88715,
            'imei': '86084*****46065',
            'card_number': '00000*****44',
            'model': 'TCL 950',
            'email': '13***43818465',
            'create_date': '2018\/5\/12 21:13:04',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88693,
            'imei': '86205*****66084',
            'card_number': '00000*****30',
            'model': 'TCL 580',
            'email': '15***13395855',
            'create_date': '2018\/5\/12 18:23:54',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88645,
            'imei': '86205*****63810',
            'card_number': '00000*****72',
            'model': 'TCL 580',
            'email': '13***68578000',
            'create_date': '2018\/5\/12 12:51:08',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88629,
            'imei': '86961*****34677',
            'card_number': '00000*****96',
            'model': 'TCL 520',
            'email': '15***02672719',
            'create_date': '2018\/5\/12 10:08:56',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88620,
            'imei': '86205*****53420',
            'card_number': '00000*****96',
            'model': 'TCL 580',
            'email': '13***14469707',
            'create_date': '2018\/5\/12 08:50:33',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88617,
            'imei': '86205*****06750',
            'card_number': '00000*****15',
            'model': 'TCL 580',
            'email': '10***9478435@qq.com',
            'create_date': '2018\/5\/12 07:52:39',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88591,
            'imei': '86205*****83915',
            'card_number': '00000*****06',
            'model': 'TCL 580',
            'email': '15***11683848',
            'create_date': '2018\/5\/11 20:30:13',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88574,
            'imei': '86205*****49116',
            'card_number': '00000*****99',
            'model': 'TCL 580',
            'email': '18***07407665',
            'create_date': '2018\/5\/11 19:03:01',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88565,
            'imei': '86961*****42231',
            'card_number': '00000*****86',
            'model': 'TCL 520',
            'email': '15***84363329',
            'create_date': '2018\/5\/11 18:06:17',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88562,
            'imei': '86205*****85638',
            'card_number': '00000*****16',
            'model': 'TCL 580',
            'email': '13***66166658',
            'create_date': '2018\/5\/11 17:45:47',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88559,
            'imei': '86084*****66404',
            'card_number': '00000*****93',
            'model': 'TCL 950',
            'email': '15***95910795',
            'create_date': '2018\/5\/11 17:37:52',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88558,
            'imei': '86084*****82945',
            'card_number': '00000*****87',
            'model': 'TCL 750',
            'email': '13***30090106',
            'create_date': '2018\/5\/11 17:35:20',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88550,
            'imei': '86961*****44713',
            'card_number': '00000*****47',
            'model': 'TCL 520',
            'email': '15***53435613',
            'create_date': '2018\/5\/11 16:14:13',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88508,
            'imei': '86205*****78237',
            'card_number': '00000*****61',
            'model': 'TCL 580',
            'email': '17***28100572',
            'create_date': '2018\/5\/11 11:08:26',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88477,
            'imei': '86205*****73074',
            'card_number': '00000*****99',
            'model': 'TCL 580',
            'email': '17***84048192',
            'create_date': '2018\/5\/10 23:12:08',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88462,
            'imei': '86205*****43630',
            'card_number': '00000*****04',
            'model': 'TCL 580',
            'email': '15***19310552',
            'create_date': '2018\/5\/10 20:24:23',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88441,
            'imei': '86084*****72608',
            'card_number': '00000*****02',
            'model': 'TCL 950',
            'email': '15***73713171',
            'create_date': '2018\/5\/10 18:37:58',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88429,
            'imei': 'A1000*****D6EF',
            'card_number': '00000*****96',
            'model': 'TCL 520',
            'email': '13***64746177',
            'create_date': '2018\/5\/10 16:34:13',
            'country': 'cn',
            'distributor': 'China Telecom'
        },
        {
            'id': 88422,
            'imei': '86084*****73228',
            'card_number': '00000*****71',
            'model': 'TCL 950',
            'email': '15***34477992',
            'create_date': '2018\/5\/10 15:49:46',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88415,
            'imei': '86084*****35703',
            'card_number': '00000*****09',
            'model': 'TCL 750',
            'email': '15***80720798',
            'create_date': '2018\/5\/10 15:18:10',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88407,
            'imei': '86084*****68418',
            'card_number': '00000*****34',
            'model': 'TCL 750',
            'email': '13***45165506',
            'create_date': '2018\/5\/10 14:46:08',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88399,
            'imei': '86205*****96875',
            'card_number': '00000*****43',
            'model': 'TCL 580',
            'email': '13***22929060',
            'create_date': '2018\/5\/10 13:59:22',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88382,
            'imei': '86961*****69371',
            'card_number': '00000*****41',
            'model': 'TCL 520',
            'email': '13***15682376',
            'create_date': '2018\/5\/10 12:20:15',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88371,
            'imei': '86084*****16165',
            'card_number': '00000*****74',
            'model': 'TCL 750',
            'email': '17***78970103',
            'create_date': '2018\/5\/10 11:18:02',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88310,
            'imei': '86084*****73885',
            'card_number': '00000*****08',
            'model': 'TCL 750',
            'email': '18***41028984',
            'create_date': '2018\/5\/9 20:20:27',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88309,
            'imei': '86205*****22994',
            'card_number': '00000*****73',
            'model': 'TCL 580',
            'email': '13***75693942',
            'create_date': '2018\/5\/9 20:13:01',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88304,
            'imei': 'A1000*****7152',
            'card_number': '00000*****65',
            'model': 'TCL 950',
            'email': '18***17400975',
            'create_date': '2018\/5\/9 19:54:36',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88301,
            'imei': '86961*****37576',
            'card_number': '00000*****24',
            'model': 'TCL 520',
            'email': '13***95306145',
            'create_date': '2018\/5\/9 19:46:24',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88298,
            'imei': '86205*****84151',
            'card_number': '00000*****95',
            'model': 'TCL 580',
            'email': '15***25527900',
            'create_date': '2018\/5\/9 19:39:10',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88297,
            'imei': '86205*****36054',
            'card_number': '00000*****90',
            'model': 'TCL 580',
            'email': '18***05684075',
            'create_date': '2018\/5\/9 19:38:23',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88282,
            'imei': '86205*****97152',
            'card_number': '00000*****27',
            'model': 'TCL 580',
            'email': '15***49081107',
            'create_date': '2018\/5\/9 17:40:21',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88245,
            'imei': '86084*****77401',
            'card_number': '00000*****77',
            'model': 'TCL 950',
            'email': '13***06871551',
            'create_date': '2018\/5\/9 12:32:37',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88235,
            'imei': '86084*****46651',
            'card_number': '00000*****57',
            'model': 'TCL 950',
            'email': '27***808774@QQ.com',
            'create_date': '2018\/5\/9 11:14:17',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88234,
            'imei': '86205*****14997',
            'card_number': '00000*****64',
            'model': 'TCL 580',
            'email': '18***57728799',
            'create_date': '2018\/5\/9 11:11:35',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88224,
            'imei': '86084*****57395',
            'card_number': '00000*****51',
            'model': 'TCL 950',
            'email': '13***15343666',
            'create_date': '2018\/5\/9 10:11:29',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88223,
            'imei': '86205*****70409',
            'card_number': '00000*****20',
            'model': 'TCL 580',
            'email': '18***03466559',
            'create_date': '2018\/5\/9 10:02:33',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88206,
            'imei': '86953*****18765',
            'card_number': null,
            'model': 'TCL 530',
            'email': 'zu***woobe82@gmail.com',
            'create_date': '2018\/5\/8 22:24:20',
            'country': 'ng',
            'distributor': 'Bharti Airtel Limited'
        },
        {
            'id': 88190,
            'imei': '86205*****75491',
            'card_number': '00000*****53',
            'model': 'TCL 580',
            'email': '15***85775731',
            'create_date': '2018\/5\/8 20:19:27',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88176,
            'imei': '86084*****69960',
            'card_number': '00000*****27',
            'model': 'TCL 950',
            'email': '15***19327924',
            'create_date': '2018\/5\/8 18:30:24',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88140,
            'imei': '86205*****60239',
            'card_number': '00000*****75',
            'model': 'TCL 580',
            'email': '13***30788006',
            'create_date': '2018\/5\/8 14:04:51',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88139,
            'imei': '86084*****74887',
            'card_number': '00000*****74',
            'model': 'TCL 950',
            'email': '26***2624454@qq.com',
            'create_date': '2018\/5\/8 14:04:13',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88121,
            'imei': '86084*****76411',
            'card_number': '00000*****94',
            'model': 'TCL 950',
            'email': '15***65362939',
            'create_date': '2018\/5\/8 11:55:51',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88115,
            'imei': '86205*****49455',
            'card_number': '00000*****16',
            'model': 'TCL 580',
            'email': '13***13277005',
            'create_date': '2018\/5\/8 11:26:00',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88113,
            'imei': '86084*****78475',
            'card_number': '00000*****67',
            'model': 'TCL 750',
            'email': '18***25542835',
            'create_date': '2018\/5\/8 11:06:36',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88106,
            'imei': '86084*****31095',
            'card_number': '00000*****99',
            'model': 'TCL 750',
            'email': '18***62986963',
            'create_date': '2018\/5\/8 10:16:22',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88091,
            'imei': '86205*****53395',
            'card_number': '00000*****13',
            'model': 'TCL 580',
            'email': '13***96033589',
            'create_date': '2018\/5\/8 07:42:51',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 88049,
            'imei': '86205*****38895',
            'card_number': '00000*****11',
            'model': 'TCL 580',
            'email': '18***07756291',
            'create_date': '2018\/5\/7 19:01:52',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88044,
            'imei': '86983*****04335',
            'card_number': '00000*****88',
            'model': 'TCL-550',
            'email': '18***96617459',
            'create_date': '2018\/5\/7 18:30:16',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 88038,
            'imei': '86205*****91755',
            'card_number': '00000*****75',
            'model': 'TCL 580',
            'email': '13***50593048',
            'create_date': '2018\/5\/7 17:28:41',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 88037,
            'imei': '86084*****66248',
            'card_number': '00000*****57',
            'model': 'TCL 750',
            'email': '15***33177332',
            'create_date': '2018\/5\/7 17:21:25',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 88027,
            'imei': '86205*****13901',
            'card_number': '00000*****57',
            'model': 'TCL 580',
            'email': '18***58341373',
            'create_date': '2018\/5\/7 16:07:48',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87998,
            'imei': '86084*****47555',
            'card_number': '00000*****08',
            'model': 'TCL 750',
            'email': '18***86150940',
            'create_date': '2018\/5\/7 11:35:34',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87994,
            'imei': '86205*****13718',
            'card_number': '00000*****81',
            'model': 'TCL 580',
            'email': '30***13095@qq.com',
            'create_date': '2018\/5\/7 11:23:09',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87964,
            'imei': 'A1000*****2867',
            'card_number': '00000*****01',
            'model': 'TCL 950',
            'email': '18***14221992',
            'create_date': '2018\/5\/6 21:49:47',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87962,
            'imei': '86205*****83750',
            'card_number': '00000*****79',
            'model': 'TCL 580',
            'email': '15***32763214',
            'create_date': '2018\/5\/6 21:45:28',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87952,
            'imei': '86084*****80843',
            'card_number': '00000*****93',
            'model': 'TCL 950',
            'email': '13***65902082',
            'create_date': '2018\/5\/6 20:46:06',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87932,
            'imei': '86205*****12235',
            'card_number': '00000*****42',
            'model': 'TCL 580',
            'email': '18***63135578',
            'create_date': '2018\/5\/6 18:13:41',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87923,
            'imei': 'A1000*****110A',
            'card_number': '00000*****47',
            'model': 'TCL 950',
            'email': '13***37908138',
            'create_date': '2018\/5\/6 17:16:55',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87906,
            'imei': '86205*****97451',
            'card_number': '00000*****58',
            'model': 'TCL 580',
            'email': '17***75641977',
            'create_date': '2018\/5\/6 15:22:22',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87878,
            'imei': '86205*****44053',
            'card_number': '00000*****94',
            'model': 'TCL 580',
            'email': '18***86473246',
            'create_date': '2018\/5\/6 11:25:33',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87870,
            'imei': '86084*****00644',
            'card_number': '00000*****65',
            'model': 'TCL 750',
            'email': 'w8***4489813@163.com',
            'create_date': '2018\/5\/6 10:08:17',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87864,
            'imei': '86205*****03715',
            'card_number': '00000*****32',
            'model': 'TCL 580',
            'email': '13***61366392',
            'create_date': '2018\/5\/6 07:31:36',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 87851,
            'imei': '86084*****17200',
            'card_number': '00000*****43',
            'model': 'TCL 750',
            'email': '28***4177278@qq.com',
            'create_date': '2018\/5\/5 21:41:01',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87848,
            'imei': '86205*****37356',
            'card_number': '00000*****89',
            'model': 'TCL 580',
            'email': '15***65539166',
            'create_date': '2018\/5\/5 21:12:32',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87830,
            'imei': '86084*****74630',
            'card_number': '00000*****97',
            'model': 'TCL 950',
            'email': '15***22160183',
            'create_date': '2018\/5\/5 19:11:47',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87827,
            'imei': '86205*****61574',
            'card_number': '00000*****75',
            'model': 'TCL 580',
            'email': '15***50709216',
            'create_date': '2018\/5\/5 19:05:40',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87826,
            'imei': '86983*****68488',
            'card_number': '00000*****49',
            'model': 'TCL-550',
            'email': '13***64373438',
            'create_date': '2018\/5\/5 19:00:25',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 87786,
            'imei': '86205*****70277',
            'card_number': '00000*****18',
            'model': 'TCL 580',
            'email': '18***03023310',
            'create_date': '2018\/5\/5 15:41:24',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87783,
            'imei': '86084*****19326',
            'card_number': '00000*****74',
            'model': 'TCL 750',
            'email': '18***36816330',
            'create_date': '2018\/5\/5 15:22:20',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87765,
            'imei': '86205*****47621',
            'card_number': '00000*****98',
            'model': 'TCL 580',
            'email': '15***86982530',
            'create_date': '2018\/5\/5 13:53:13',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87764,
            'imei': '86205*****47621',
            'card_number': '00000*****98',
            'model': 'TCL 580',
            'email': '15***86982530',
            'create_date': '2018\/5\/5 13:53:08',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87763,
            'imei': '86205*****47621',
            'card_number': '00000*****98',
            'model': 'TCL 580',
            'email': '15***86982530',
            'create_date': '2018\/5\/5 13:52:26',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87755,
            'imei': '86084*****36919',
            'card_number': '00000*****30',
            'model': 'TCL 750',
            'email': '15***33108092',
            'create_date': '2018\/5\/5 12:23:50',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87738,
            'imei': '86205*****02758',
            'card_number': '00000*****57',
            'model': 'TCL 580',
            'email': '13***98944687',
            'create_date': '2018\/5\/5 10:33:47',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 87726,
            'imei': '86084*****66576',
            'card_number': '00000*****51',
            'model': 'TCL 950',
            'email': '15***81826774',
            'create_date': '2018\/5\/5 01:49:27',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87718,
            'imei': '86084*****58088',
            'card_number': '00000*****22',
            'model': 'TCL 950',
            'email': '18***88853608',
            'create_date': '2018\/5\/4 22:58:24',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87696,
            'imei': '86205*****30458',
            'card_number': '00000*****21',
            'model': 'TCL 580',
            'email': '17***77916897',
            'create_date': '2018\/5\/4 20:44:14',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87691,
            'imei': '86205*****66423',
            'card_number': '00000*****34',
            'model': 'TCL 580',
            'email': '18***77621786',
            'create_date': '2018\/5\/4 20:28:22',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87674,
            'imei': '86084*****12745',
            'card_number': '00000*****53',
            'model': 'TCL 950',
            'email': '13***22392568',
            'create_date': '2018\/5\/4 19:03:08',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 87663,
            'imei': '86084*****15144',
            'card_number': '00000*****99',
            'model': 'TCL 950',
            'email': '13***92843588',
            'create_date': '2018\/5\/4 17:56:25',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87662,
            'imei': '86205*****19274',
            'card_number': '00000*****63',
            'model': 'TCL 580',
            'email': '15***30803411',
            'create_date': '2018\/5\/4 17:42:46',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87631,
            'imei': '86205*****08837',
            'card_number': '00000*****57',
            'model': 'TCL 580',
            'email': '17***15283741',
            'create_date': '2018\/5\/4 15:11:21',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87624,
            'imei': '86205*****51837',
            'card_number': '00000*****35',
            'model': 'TCL 580',
            'email': '13***02846687',
            'create_date': '2018\/5\/4 14:07:58',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87600,
            'imei': '86205*****39337',
            'card_number': '00000*****49',
            'model': 'TCL 580',
            'email': '13***33161286',
            'create_date': '2018\/5\/4 10:55:55',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87593,
            'imei': '86205*****66712',
            'card_number': '00000*****40',
            'model': 'TCL 580',
            'email': '13***27199505',
            'create_date': '2018\/5\/4 10:16:05',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87592,
            'imei': '86205*****68205',
            'card_number': '00000*****93',
            'model': 'TCL 580',
            'email': '18***34565673',
            'create_date': '2018\/5\/4 10:01:02',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87579,
            'imei': '86084*****66311',
            'card_number': '00000*****91',
            'model': 'TCL 950',
            'email': '18***20172999',
            'create_date': '2018\/5\/4 07:47:55',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87565,
            'imei': '86205*****41093',
            'card_number': '00000*****43',
            'model': 'TCL 580',
            'email': '15***14048318',
            'create_date': '2018\/5\/3 21:52:43',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87557,
            'imei': '86084*****08438',
            'card_number': '00000*****99',
            'model': 'TCL 950',
            'email': '15***19954577',
            'create_date': '2018\/5\/3 20:41:48',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87545,
            'imei': '86084*****35971',
            'card_number': '00000*****01',
            'model': 'TCL 750',
            'email': '17***94982553',
            'create_date': '2018\/5\/3 19:37:34',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87539,
            'imei': '86084*****55710',
            'card_number': '00000*****09',
            'model': 'TCL 950',
            'email': '35***838209@qq.com',
            'create_date': '2018\/5\/3 19:16:06',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87508,
            'imei': '86205*****89292',
            'card_number': '00000*****32',
            'model': 'TCL 580',
            'email': '15***61894836',
            'create_date': '2018\/5\/3 16:19:12',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87476,
            'imei': '86205*****09654',
            'card_number': '00000*****11',
            'model': 'TCL 580',
            'email': '13***89001121',
            'create_date': '2018\/5\/3 13:15:08',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 87454,
            'imei': '86205*****86179',
            'card_number': '00000*****19',
            'model': 'TCL 580',
            'email': '15***78778227',
            'create_date': '2018\/5\/3 10:37:04',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87453,
            'imei': '86084*****34972',
            'card_number': '00000*****83',
            'model': 'TCL 750',
            'email': '13***35930846',
            'create_date': '2018\/5\/3 10:28:38',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 87429,
            'imei': '86205*****33716',
            'card_number': '00000*****63',
            'model': 'TCL 580',
            'email': '18***50273893',
            'create_date': '2018\/5\/3 00:24:01',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87410,
            'imei': '86084*****80390',
            'card_number': '00000*****87',
            'model': 'TCL 750',
            'email': 'xc***2008@126.com',
            'create_date': '2018\/5\/2 21:28:42',
            'country': 'cn',
            'distributor': 'China Unicom'
        },
        {
            'id': 87392,
            'imei': '86205*****24952',
            'card_number': '00000*****05',
            'model': 'TCL 580',
            'email': '15***06134870',
            'create_date': '2018\/5\/2 19:28:12',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87386,
            'imei': '86205*****17030',
            'card_number': '00000*****40',
            'model': 'TCL 580',
            'email': '15***54325645',
            'create_date': '2018\/5\/2 18:48:07',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87381,
            'imei': '86084*****31643',
            'card_number': '00000*****10',
            'model': 'TCL 750',
            'email': '18***80221582',
            'create_date': '2018\/5\/2 18:11:09',
            'country': 'cn',
            'distributor': '中国电信'
        },
        {
            'id': 87374,
            'imei': '86084*****98738',
            'card_number': '00000*****26',
            'model': 'TCL 950',
            'email': '13***29569167',
            'create_date': '2018\/5\/2 17:43:32',
            'country': 'cn',
            'distributor': 'China Mobile'
        },
        {
            'id': 87356,
            'imei': '86084*****46679',
            'card_number': '00000*****69',
            'model': 'TCL 750',
            'email': '18***05172009',
            'create_date': '2018\/5\/2 16:28:41',
            'country': 'cn',
            'distributor': 'CMCC'
        },
        {
            'id': 87323,
            'imei': '86084*****08730',
            'card_number': '00000*****03',
            'model': 'TCL 750',
            'email': '18***25721149',
            'create_date': '2018\/5\/2 10:59:49',
            'country': 'cn',
            'distributor': 'CMCC'
        }
    ]
};

actions.loadList = (pageNo, pageSize) => (dispatch, getState) => {
    dispatch({ type: 'CARE_ELECTRON_CARD_LOADING', loading: true });
    const state = getState()['care_electron_card'];
    const page = state.page;
    const params = state.searchParams;
    let list = [];
    for (let i = 0; i < 10; i++) {
        list.push(mockData.RECORDS[Math.floor((Math.random() * 30))]);
    }
    return ajax.get('/care_electron_card', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }).then((data) => {
        dispatch({ type: 'CARE_ELECTRON_CARD_LOADING', loading: false });
        dispatch({
            type: 'CARE_ELECTRON_CARD_LOAD',
            pageNo: pageNo || data.pageNo,
            pageSize: data.pageSize,
            dataCount: data.totalCount,
            list: list
        });
    });
};

export default actions;
