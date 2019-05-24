import ajax from 'utils/ajax';

let actions = {};
/*eslint-disable*/
const mockData = {
    'RECORDS': [
        {
            'id': 12866,
            'topic': 'no es del todo compatible con las app',
            'email': 'ww***omanxti@hotmail.com',
            'description': 'mi celular no quiere agarra la app de Uber cierra la app',
            'create_time': '2018\/12\/9 01:40:35',
            'phone': '5058A',
            'imei': '01509*****82027'
        },
        {
            'id': 12865,
            'topic': 'Ajudem por favor',
            'email': 'cl***iamarivieirasilva41@gmail.com',
            'description': 'Gostaria de ser presenteada com um celular novo da Alcatel, já tive três sendo os mesmos roubados. 55 (21)974649877\nPORFAVOR ME AJUDEM A ENDEREÇO ESTRADA DO CALUNDU 1000 BLOCO 9 APARTAMENTO 402 NOSSA SENHORA DO CARMO DUQUE DE CAXIAS RJ. CEP 25040610 GRATA POR SUA ATENÇÃO.',
            'create_time': '2018\/12\/8 22:56:16',
            'phone': '8050E',
            'imei': '35689*****78922'
        },
        {
            'id': 12864,
            'topic': 'Ajudem',
            'email': 'cl***iavieiramarisilva41@gmail.com',
            'description': 'Gostaria de ser presenteada com um celular, pois já tive três da Alcatel e foram roubados. (se possível for me ajudem tel 21 974649877) gosto muito da Alcatel.\nEndereço de entrega estrada do calundu e 1000 bloco 9 apartamento 402. Nossa Senhora do Carmo - Duque de Caxias RJ.\nGrata por sua atenção.',
            'create_time': '2018\/12\/8 22:50:10',
            'phone': '8050E',
            'imei': '35689*****78922'
        },
        {
            'id': 12863,
            'topic': 'моя старая страница в контакте',
            'email': 'ol***akimov@13923gmail.com',
            'description': 'не могу открыть старую страницу в контакте',
            'create_time': '2018\/12\/8 20:49:06',
            'phone': '4034D',
            'imei': '35428*****59163'
        },
        {
            'id': 12862,
            'topic': 'lalala',
            'email': 'es***olablanca638@gmail.com',
            'description': 'poner un fondo de bloqueo y otro distinto para el de escritorio',
            'create_time': '2018\/12\/8 17:59:42',
            'phone': '8050G',
            'imei': '01457*****88800'
        },
        {
            'id': 12861,
            'topic': 'Renseignements nouveaux smartphones',
            'email': 'Gi***s1959@live.com',
            'description': "Quel est l'équivalent récent de l'alcatel pixi 4 6 pouces.? Je souhaite changer le mien et j'en cherche un plus rapide et puissant avec une batterie plus puissante. Cordialement",
            'create_time': '2018\/12\/8 11:49:30',
            'phone': '9001D',
            'imei': '35834*****16971'
        },
        {
            'id': 12860,
            'topic': 'Alcatel 5V',
            'email': 'ma***ias.muenster70@googlemail.com',
            'description': 'Hallo liebe Alcatel Mitarbeiter wir sind lange Jahre Nutzer von euren Smartphones wir sind begeistert habe jetzt 2 Alcatel 5v und 4 3v in Betrieb sind sehr zufrieden muss auch Mal gesagt werden .Was für die Zukunft toll wäre gute Updates  ich benutzte noch ein Alcatel 5 und warte auf Android 8 kommt das noch ??liebe Grüsse aus Königslutter',
            'create_time': '2018\/12\/8 10:14:00',
            'phone': '5060D',
            'imei': '35753*****52695'
        },
        {
            'id': 12858,
            'topic': 'teléfono defectuoso',
            'email': 'ra***haolin@gmail.com',
            'description': 'que teléfono tan malo tan malo no tiene dos meses y ha estado en garantía 2 veces esperemos q está vez este mejor pero arrepentido de haber elegido está marca',
            'create_time': '2018\/12\/8 02:54:38',
            'phone': '5011A',
            'imei': '35826*****15769'
        },
        {
            'id': 12857,
            'topic': 'e warranty',
            'email': 'ka***eendaly92@gmail.com',
            'description': 'what happens when I activated the e warranty.. e warranty',
            'create_time': '2018\/12\/7 21:43:31',
            'phone': '5052Y',
            'imei': '35321*****27586'
        },
        {
            'id': 12856,
            'topic': 'kathleen daly',
            'email': 'ka***eendaly92@gmail.com',
            'description': "it's activated e warranty",
            'create_time': '2018\/12\/7 21:42:06',
            'phone': '5052Y',
            'imei': '35321*****27586'
        },
        {
            'id': 12855,
            'topic': 'problem',
            'email': 'le***drehamiltion@gmail.com',
            'description': "a lot of people don't like alaktel please make the phone bigger and higher in storage and camera quality and make the phone stronger",
            'create_time': '2018\/12\/7 20:28:17',
            'phone': '5044A',
            'imei': '01481*****40269'
        },
        {
            'id': 12854,
            'topic': 'play store not down loading apps need help',
            'email': 'th***ongem2@gmail.com',
            'description': 'can you please notify me ASAP',
            'create_time': '2018\/12\/7 19:57:03',
            'phone': '4017X',
            'imei': '35638*****70116'
        },
        {
            'id': 12853,
            'topic': "système d'exploitation",
            'email': 'cl***c2@gmail.com',
            'description': 'à quand une mise à jour Android vers une autre version ?',
            'create_time': '2018\/12\/7 19:33:02',
            'phone': '6055P',
            'imei': '35847*****69131'
        },
        {
            'id': 12852,
            'topic': 'Панель навигации',
            'email': 'ma***unarev557@gmail.com',
            'description': 'При включении игр или сторонних приложений начали оставаться черные полосы, и как то не удобно.',
            'create_time': '2018\/12\/7 17:57:31',
            'phone': '5033D_RU',
            'imei': '35626*****82397'
        },
        {
            'id': 12851,
            'topic': 'Update about Android Version',
            'email': 'vi***lrdalal@GMAIL.com',
            'description': 'I want latest android version, i.e. you can provide Android 8.1 as of now.ok',
            'create_time': '2018\/12\/7 17:23:39',
            'phone': '9026T',
            'imei': '35686*****52242'
        },
        {
            'id': 12850,
            'topic': 'head phones',
            'email': 'th***s774@sky.com',
            'description': 'I have found the head phones provided are poor quality . as i was listening to the radio and I missed calls .',
            'create_time': '2018\/12\/7 16:42:47',
            'phone': '5033X',
            'imei': '35627*****68269'
        },
        {
            'id': 12849,
            'topic': 'süper tasarruf modu',
            'email': 'ma***kolay037@hotmail.com',
            'description': 'bazen süper tasarruf modundayken ekranı döndürmem gerekiyor. bu nedenle ekran döndürme özelliğini eklemenizi tavsiye ediyorum.',
            'create_time': '2018\/12\/7 16:42:13',
            'phone': '5086Y',
            'imei': '35424*****09834'
        },
        {
            'id': 12848,
            'topic': 'alcatel 3v',
            'email': 'sa***esachin2000@gmail.com',
            'description': 'very bad mobile and very bad process sorry this mobile is not good\nthis mobile not support pubg mobile game\nthis mobile is very hang company with compare to intex aur Micromax or Lenovo\nbattery will be fastly discharge as compared to Lenovo Micromax Intex or other other mobile',
            'create_time': '2018\/12\/7 14:09:44',
            'phone': '5099I',
            'imei': '35572*****81120'
        },
        {
            'id': 12847,
            'topic': 'actualizar androide',
            'email': 'ga***an87.ec@gmail.com',
            'description': 'se actualiza el androide',
            'create_time': '2018\/12\/7 03:21:17',
            'phone': '5080A',
            'imei': '01472*****55460'
        },
        {
            'id': 12846,
            'topic': 'tatiane Silva',
            'email': 'ta***nesilva7...9@gmail.com',
            'description': 'Tatiane Silva',
            'create_time': '2018\/12\/6 22:59:37',
            'phone': '4034E',
            'imei': '35352*****04341'
        },
        {
            'id': 12845,
            'topic': 'mais memória interna',
            'email': 'or***domattosss@gmail.com',
            'description': 'O dispositivo poderia ter mais memória interna',
            'create_time': '2018\/12\/6 19:48:23',
            'phone': '8050E',
            'imei': '35689*****04419'
        },
        {
            'id': 12844,
            'topic': 'Me podíais regalar un teléfono nuevo el más caro que tengáis???',
            'email': 'ja***eos71@gmail.com',
            'description': 'Venga hombre un poco de buena voluntad',
            'create_time': '2018\/12\/6 19:22:59',
            'phone': '5046D',
            'imei': '35515*****24809'
        },
        {
            'id': 12843,
            'topic': 'tarjeta de memoria',
            'email': 'ma***m2004@hotmail.com',
            'description': 'como hago para pasar archivos a la tarjeta externa de memoria',
            'create_time': '2018\/12\/6 17:44:27',
            'phone': '5080A',
            'imei': '01472*****67524'
        },
        {
            'id': 12842,
            'topic': 'Needs Brand Image creations and more innovative Promotions.',
            'email': 'va***alipokale2014@gmail.com',
            'description': "Dear Sir\/Madam,\nI'm Satish, writing on behalf of my sister., it's easy to brand and promote Alcatel smartphone by telling it's special best features like size in category,  low affordable cost,  easy handling,  color combinations,  sales and services network across country. \nI will be happy if I get a chance to work with Alcatel for Brand & Business development in India (urban + rural ).\nThanks & Regards,\nSatish Pokale ,\nAmravati - Maharashtra, India. \n(BE - Electronics & Telecommunications ) + MBA with 10+ years experience in Business & Brand development and Technology operations. \nEmail : satishengr1@gmail.com",
            'create_time': '2018\/12\/6 15:52:23',
            'phone': '9001I',
            'imei': '35834*****41319'
        }
    ]
};

actions.loadList = (pageNo, pageSize) => (dispatch, getState) => {
    dispatch({ type: 'CARE_SUGGESTION_LOADING', loading: true });
    const state = getState()['care_suggestion'];
    const page = state.page;
    const params = state.searchParams;
    let list = [];
    for (let i = 0; i < 10; i++) {
        list.push(mockData.RECORDS[Math.floor((Math.random() * 20))]);
    }
    return ajax.get('/care_suggestion', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }).then((data) => {
        dispatch({ type: 'CARE_SUGGESTION_LOADING', loading: false });
        dispatch({
            type: 'CARE_SUGGESTION_LOAD',
            pageNo: pageNo || data.pageNo,
            pageSize: data.pageSize,
            dataCount: data.totalCount,
            list: list
        });
    });
};

export default actions;
