import ajax from 'utils/ajax';

let actions = {};
/*eslint-disable*/
const mockData = {
    'RECORDS': [
        {
            'id': 65397,
            'issue': 'Problema con la cámara',
            'email': 'ma***angelachicaamal@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'porque la aplicación de mi cámara cuando lo abro me dice intente modicar los permisos',
            'create_time': '2018\/11\/30 14:12:47',
            'imei': '01501*****51212'
        },
        {
            'id': 65396,
            'issue': 'Andere Probleme',
            'email': 'al***jn1@gmail.com',
            'country_mcc': '262',
            'mnc': '00',
            'description': 'dieses Handy ist so unglaublich langsam ,das es schon fasst weh tut.tut mir leid das zu sagen ,aber das Ding ist die reinste Zumutung und nicht Mal die 100 Euro wert.',
            'create_time': '2018\/11\/30 13:59:41',
            'imei': '35344*****05744'
        },
        {
            'id': 65395,
            'issue': 'Installed applications',
            'email': 'zi***m@gmail.com',
            'country_mcc': '404',
            'mnc': '00',
            'description': 'In this  mobile there is no updates and trust face unlock \nregards\nG M Jigrullah .',
            'create_time': '2018\/11\/30 13:58:01',
            'imei': '35686*****50216'
        },
        {
            'id': 65394,
            'issue': 'Installed applications',
            'email': 'zi***m@gmail.com',
            'country_mcc': '404',
            'mnc': '00',
            'description': 'There is no updates of latest version and in smart lock no trusted face. We need to solve this problems.\nRegards,\nJigrullah G M',
            'create_time': '2018\/11\/30 13:31:51',
            'imei': '35686*****50216'
        },
        {
            'id': 65393,
            'issue': 'Consumo anormal de bateria',
            'email': 'au***ybarbara6@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'o som e baixo e a tela trava muito',
            'create_time': '2018\/11\/30 13:16:56',
            'imei': '35515*****67002'
        },
        {
            'id': 65391,
            'issue': 'مشكلات أخرى',
            'email': 'th***.3388@gmail.com',
            'country_mcc': '420',
            'mnc': '00',
            'description': 'الشركه فاشله لايوجد ارقام للتواصل ولايوجد لها فروع للصيانه ولايوجد رد على العملا نهائي',
            'create_time': '2018\/11\/30 13:07:57',
            'imei': '35849*****74972'
        },
        {
            'id': 65390,
            'issue': 'Other issues',
            'email': 'pr***2001@gmail.com',
            'country_mcc': '405',
            'mnc': '00',
            'description': "for clearness about the tablet of videos\nit's very unclear",
            'create_time': '2018\/11\/30 13:03:26',
            'imei': '35686*****71630'
        },
        {
            'id': 65389,
            'issue': 'Other issues',
            'email': 'pr***2001@gmail.com',
            'country_mcc': '405',
            'mnc': '00',
            'description': 'for clearness about the tablet',
            'create_time': '2018\/11\/30 13:01:00',
            'imei': '35686*****71630'
        },
        {
            'id': 65388,
            'issue': 'Consumo anormal de bateria',
            'email': 'sa***009598@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'não está carregando, e a temperatura da bateria está normal. o que pode ser .\nnão tive aviso nenhum',
            'create_time': '2018\/11\/30 12:54:00',
            'imei': '35736*****67681'
        },
        {
            'id': 65387,
            'issue': 'Другие проблемы',
            'email': 'ra***ov_izzat@mail.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'часто тупит, блокировка не хорошо, музика поставится, кому-то чего-то отправляет. туфта',
            'create_time': '2018\/11\/30 12:34:34',
            'imei': '35515*****96576'
        },
        {
            'id': 65386,
            'issue': 'Problema com a câmara',
            'email': 'sa***a_roosa_rodriguesrosa@hotmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'minha câmera não abre',
            'create_time': '2018\/11\/30 12:19:46',
            'imei': '35166*****77042'
        },
        {
            'id': 65384,
            'issue': 'Случайная перезагрузка',
            'email': 'fr***v.andrey@autorambler.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Телефон время от времени перезагружается. Что это может быть?',
            'create_time': '2018\/11\/30 12:14:53',
            'imei': '35393*****00256'
        },
        {
            'id': 65385,
            'issue': 'Diğer Sorunlar',
            'email': 'ma***62007@gmail.com',
            'country_mcc': '286',
            'mnc': '00',
            'description': 'almış olduğum alcatel shine lite 5080 ürünün ekran solunda görüntüyü dağıtıyor, pixel problemi var galiba',
            'create_time': '2018\/11\/30 12:14:53',
            'imei': '35209*****89988'
        },
        {
            'id': 65383,
            'issue': 'Случайная перезагрузка',
            'email': 'fr***v.andrey@autorambler.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Телефон время от времени перезагружается. Что это может быть?',
            'create_time': '2018\/11\/30 12:14:40',
            'imei': '35393*****00256'
        },
        {
            'id': 65382,
            'issue': 'Другие проблемы',
            'email': 'ru***vdaler88@mail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'мой телефон отказывался от зарядки и я ошибься мне надо было обратиться к вам но я обратился к мастеру он мне поченил аппарат но он украл слухавой динамик что мне теперь делает можно будет поченит мой телефон',
            'create_time': '2018\/11\/30 12:06:03',
            'imei': '35904*****16878'
        },
        {
            'id': 65381,
            'issue': 'Consumo anormal de bateria',
            'email': 'ro***tojosesaless@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'software ruim muito lento e trava muito',
            'create_time': '2018\/11\/30 11:54:11',
            'imei': '35322*****07134'
        },
        {
            'id': 65380,
            'issue': 'Câmera',
            'email': 'si***theus@mail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'a câmera tira foto ao contrário',
            'create_time': '2018\/11\/30 11:44:56',
            'imei': '01482*****84512'
        },
        {
            'id': 65379,
            'issue': 'Ошибки подключения',
            'email': 'eh***rd-zakharenkv@rambler.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'отключается кнопка Wi-Fi переодически',
            'create_time': '2018\/11\/30 11:36:07',
            'imei': '86702*****58265'
        },
        {
            'id': 65378,
            'issue': 'Otros problemas',
            'email': 'co***erasjohana563@gmail.com',
            'country_mcc': '732',
            'mnc': '00',
            'description': 'por que al dispositivo no se le quita el patrón?',
            'create_time': '2018\/11\/30 11:13:08',
            'imei': '01467*****69616'
        },
        {
            'id': 65377,
            'issue': 'Alte probleme',
            'email': 'ia***lean000@gmail.com',
            'country_mcc': '226',
            'mnc': '00',
            'description': 'manual utiluzare in limba romana nu are,ce po sa fac.',
            'create_time': '2018\/11\/30 11:11:41',
            'imei': '01472*****71944'
        },
        {
            'id': 65376,
            'issue': 'Connection Failure',
            'email': 'bi***.melodias@gmail.com',
            'country_mcc': '515',
            'mnc': '00',
            'description': 'APS support laging stops.',
            'create_time': '2018\/11\/30 10:45:01',
            'imei': '35936*****16250'
        },
        {
            'id': 65375,
            'issue': 'Connectivity',
            'email': 'ha***malarkey8@gmail.com',
            'country_mcc': '505',
            'mnc': '00',
            'description': "my phone won't take my simcards\nand I need this mobile for work",
            'create_time': '2018\/11\/30 10:42:49',
            'imei': '35539*****68913'
        },
        {
            'id': 65374,
            'issue': 'Consumo de batería anormal',
            'email': 'sd***osc@gmail.com',
            'country_mcc': '214',
            'mnc': '00',
            'description': 'buenos días. ahora el problema es que se descarga la batería más rápido. no hay aplicaciones en segundo plano y sin utilizar baja hasta 5% menos. y ahora también se calienta la parte superior del celular, en donde se encuentra los lentes de la cámara.',
            'create_time': '2018\/11\/30 10:20:20',
            'imei': '01491*****89924'
        },
        {
            'id': 65372,
            'issue': 'Other issues',
            'email': 'dg***jjj',
            'country_mcc': '310',
            'mnc': '00',
            'description': 'gghjjgffhhjjk\nguhhjfssfti',
            'create_time': '2018\/11\/30 09:42:16',
            'imei': '35753*****03856'
        },
        {
            'id': 65371,
            'issue': 'Быстрый разряд батареи',
            'email': 'is***f-el.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'зарядки хватает часов на 5 в день',
            'create_time': '2018\/11\/30 08:47:03',
            'imei': '35657*****87390'
        },
        {
            'id': 65370,
            'issue': 'Други проблеми',
            'email': 'ge***geo@gmail.com',
            'country_mcc': '284',
            'mnc': '00',
            'description': 'Невъзможност за актуализиране на системата на телефона',
            'create_time': '2018\/11\/30 08:30:30',
            'imei': '35424*****93002'
        },
        {
            'id': 65369,
            'issue': 'Aplicaciones instaladas',
            'email': 'se***osaulvalencia@hotmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'se detienen las aplicaciones',
            'create_time': '2018\/11\/30 08:14:33',
            'imei': '01457*****90694'
        },
        {
            'id': 65368,
            'issue': 'Altri problemi',
            'email': 'ma***morgan71@hotmail.com',
            'country_mcc': '222',
            'mnc': '00',
            'description': 'Da qualche tempo non funziona più google play store e non riesco a sistemarlo in nessun modo, con pessimi risultati per gli aggiornamenti delle app che vi sono istallate. Whatsapp non funziona più, la radio non ha mai funzionato, non posso installare Skype e non posso fare praticamente niente. Ho fatto il test hardware e mi dice che tutto funziona correttamente. Da cosa possono dipendere questi malfunzionamenti?',
            'create_time': '2018\/11\/30 08:11:27',
            'imei': '35412*****56164'
        },
        {
            'id': 65367,
            'issue': 'Autres problèmes',
            'email': 'te***n92@gmail.com',
            'country_mcc': '208',
            'mnc': '00',
            'description': 'nettoyeur mémoire ne fonctionne plus depuis 42 jours. Que faire ?',
            'create_time': '2018\/11\/30 08:09:24',
            'imei': '35515*****22984'
        },
        {
            'id': 65366,
            'issue': 'Проблема камеры',
            'email': 'iv***2_86@mail.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'вопрос, какое фокусное расстояние камеры на идол 4 ??',
            'create_time': '2018\/11\/30 08:05:12',
            'imei': '35613*****06221'
        },
        {
            'id': 65364,
            'issue': 'Установленные приложения',
            'email': 'ba***maksim78@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Периодически отключаются приложения установленные на SD КАРТУ',
            'create_time': '2018\/11\/30 07:07:25',
            'imei': '35209*****64459'
        },
        {
            'id': 65363,
            'issue': 'Autres problèmes',
            'email': 'fo***irate28rwan@gmail.com',
            'country_mcc': '208',
            'mnc': '00',
            'description': 'serait il possible de faire la mise à jour 8.0',
            'create_time': '2018\/11\/30 07:01:23',
            'imei': '35765*****13135'
        },
        {
            'id': 65362,
            'issue': 'Conectividad',
            'email': 'bo***n_1980@hotmail.com',
            'country_mcc': '214',
            'mnc': '00',
            'description': 'Internet... Hola mi internet se corta con mucha frecuencia como si tuviera un tiempo estimado " tengo que estar reiniciar el celular varias veces al día y me resulta incómodo" gracias saludos " mi número 660623391',
            'create_time': '2018\/11\/30 06:48:14',
            'imei': '35344*****79265'
        },
        {
            'id': 65361,
            'issue': 'Другие проблемы',
            'email': 'Ku***naev@mail.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Не работает будильник. Совсем. Ставлю для проверки на час - работает, но до утра или за какой то промежуток времени слетает с экрана значок и не срабатывает. Также, многие уведомления: все приходят разом, когда только откроешь приложение. Это совсем нехорошо. Прям очень нехорошо.... Скажите, в чем дело. Может проверите и доработае ПО. Я писал уже про это. С уважением....',
            'create_time': '2018\/11\/30 06:34:14',
            'imei': '35325*****50593'
        },
        {
            'id': 65360,
            'issue': 'Connectivity',
            'email': 'br***akisa@hotmail.com',
            'country_mcc': '274',
            'mnc': '00',
            'description': "I need to find my password for my phone I change it and I can't remember it thanks brynja",
            'create_time': '2018\/11\/30 06:17:23',
            'imei': '35498*****14194'
        },
        {
            'id': 65359,
            'issue': 'Other issues',
            'email': 'pa***kparbat3@gmail.com',
            'country_mcc': '429',
            'mnc': '00',
            'description': 'Anytime display light be hight and low.',
            'create_time': '2018\/11\/30 05:56:44',
            'imei': '35849*****86158'
        },
        {
            'id': 65358,
            'issue': 'Reboots',
            'email': 'cl***fishnemo86@gmail.com',
            'country_mcc': '505',
            'mnc': '00',
            'description': 'my phone keeps resetting it self can U tell me why & what can I do about it.',
            'create_time': '2018\/11\/30 05:49:28',
            'imei': '35539*****71810'
        },
        {
            'id': 65357,
            'issue': 'Autres problèmes',
            'email': 'jl***aud91@gmail.com',
            'country_mcc': '208',
            'mnc': '00',
            'description': 'Bonjour, lors de la réinitialisation , tous les numéros de téléphone ont disparu de la carte SIM',
            'create_time': '2018\/11\/30 05:35:13',
            'imei': '35736*****09538'
        },
        {
            'id': 65356,
            'issue': 'Otros problemas',
            'email': 'al***ons05@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'mi dispositivo Alcatel 3c, está muy lento y apenas tiene una semana que lo adquirí',
            'create_time': '2018\/11\/30 05:04:01',
            'imei': '01508*****38741'
        },
        {
            'id': 65355,
            'issue': 'Problema con la cámara',
            'email': 'jo***hava1951@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'no tiene flahs??',
            'create_time': '2018\/11\/30 04:42:10',
            'imei': '01489*****06380'
        },
        {
            'id': 65354,
            'issue': 'Otros problemas',
            'email': 'ab***amlagunez333@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'En instagram las historias se hacen verdes vendría bien una actualizacion',
            'create_time': '2018\/11\/30 04:36:58',
            'imei': '35826*****49911'
        },
        {
            'id': 65353,
            'issue': 'Установленные приложения',
            'email': 'mi***ev78@mail.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Меня достало уже, когда захожу в браузер гугл, сразу начинает загружаться алкатель',
            'create_time': '2018\/11\/30 04:36:41',
            'imei': '35444*****12478'
        },
        {
            'id': 65352,
            'issue': 'Otros problemas',
            'email': 'sa***ata08@gmail.com',
            'country_mcc': '732',
            'mnc': '00',
            'description': 'El celular se traba a cada instante, necesito reiniciarlo seguido para que esté funcione bien,   siempre se detienen todas las aplicaciones y es muy molesto.',
            'create_time': '2018\/11\/30 04:36:29',
            'imei': '35826*****85183'
        },
        {
            'id': 65351,
            'issue': 'Otros problemas',
            'email': 'ab***amlagunez333@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'Tengo el Alcatel A3 Plus y va súper lageado mucho lag muy lento cámaras horribles como pueden ser según de 13mp espero una actualización para el equipo que mejore desempeño la verdad es una burla para mí el procesador el de los peores que hay !!!!!HAGAN ALGO CON ESTE EQUIPO URGE!!!!',
            'create_time': '2018\/11\/30 04:36:04',
            'imei': '35826*****49911'
        },
        {
            'id': 65350,
            'issue': 'Outros problemas',
            'email': 'ed***do1019181@hotmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'o wife não segura ligado. liga e desliga no mesmo minuto.',
            'create_time': '2018\/11\/30 02:46:49',
            'imei': '35662*****70805'
        },
        {
            'id': 65349,
            'issue': 'Connettività',
            'email': 'si***ruiz@hotmail.com',
            'country_mcc': '222',
            'mnc': '00',
            'description': 'ogni tanto se scollega dal internet in modo automatico anche se blocca di continuo molto spesso',
            'create_time': '2018\/11\/30 02:40:49',
            'imei': '35412*****35559'
        },
        {
            'id': 65348,
            'issue': 'Otros problemas',
            'email': 'li***enett@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'no puedo entrar a muchas aplicaciones y creo que es por el modo seguro pero yo no puse ningún modo seguro',
            'create_time': '2018\/11\/30 02:36:07',
            'imei': '35626*****65143'
        },
        {
            'id': 65347,
            'issue': 'Câmera',
            'email': 've***ruzalvesferreira@hotmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'câmera tanto pra câmara como vídeo embassada!!',
            'create_time': '2018\/11\/30 02:17:01',
            'imei': '01500*****55358'
        },
        {
            'id': 65346,
            'issue': 'Other issues',
            'email': 'mu***o289@gmail.com',
            'country_mcc': '639',
            'mnc': '00',
            'description': 'phone homologation\n\nI am a Kenyan citizen and l love Alcatel mobile so much. \nA month a go I bough a new Alcatel U5 HD in Kenya.\nkam now in Colombia and my phone is not homologous here what can I do or what can be done to continue using the device here.\nthanks looking forward to hear from you .\n\nThank you\n\nkindly regards \n\n\nMathew munyao',
            'create_time': '2018\/11\/30 01:21:56',
            'imei': '35846*****35573'
        },
        {
            'id': 65345,
            'issue': 'Conectividad',
            'email': 'ch***sramirez640@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'me conecto al WiFi y no m puedo meter a nada más que sea el whattsap no puedo ni buscar nada ni descargar en play stor \ncomo le hago para que me funcione??',
            'create_time': '2018\/11\/30 00:46:50',
            'imei': '35826*****63745'
        },
        {
            'id': 65344,
            'issue': 'Outros problemas',
            'email': 'pa***ricardobrentano@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'como posso revisar se meu celular tem o IMEI identificado pela Anatel?',
            'create_time': '2018\/11\/30 00:44:23',
            'imei': '35352*****43411'
        },
        {
            'id': 65343,
            'issue': 'Otros problemas',
            'email': 'su***a_md2005@yahoo.com.mx',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'acabo de comprar un celular Alcatel, y al dar de alta mi número me dicen que es incorrecto',
            'create_time': '2018\/11\/30 00:21:04',
            'imei': '01509*****30205'
        },
        {
            'id': 65342,
            'issue': 'Aplicaciones instaladas',
            'email': 'al***ruzchavez@mail.com',
            'country_mcc': '716',
            'mnc': '00',
            'description': 'no puedo descargar aplicaciones en play store',
            'create_time': '2018\/11\/30 00:07:48',
            'imei': '01460*****53645'
        },
        {
            'id': 65341,
            'issue': 'Autres problèmes',
            'email': 'pi***lt105@gmail.com',
            'country_mcc': '340',
            'mnc': '00',
            'description': 'Pas de couverture téléphonique sur vieux fort merci',
            'create_time': '2018\/11\/30 00:05:33',
            'imei': '35498*****98854'
        },
        {
            'id': 65340,
            'issue': 'Autres problèmes',
            'email': 'pi***lt105@gmail.com',
            'country_mcc': '340',
            'mnc': '00',
            'description': 'De plus de six mois que je ne suis abonné je mais pas de couverture téléphonique sur vieux fort merci de me de voir le problème amicalement votre',
            'create_time': '2018\/11\/30 00:03:59',
            'imei': '35498*****98854'
        },
        {
            'id': 65339,
            'issue': 'Outros problemas',
            'email': 'fa***ia.bamberg.berta@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'Pluguei a antena e não aparece imagem da TV Digital... fiz o que tinha que ser feito para funcionar.',
            'create_time': '2018\/11\/29 23:20:36',
            'imei': '35515*****95792'
        },
        {
            'id': 65338,
            'issue': 'الاتصال',
            'email': 'mo***ahmed138@gmail.com',
            'country_mcc': '420',
            'mnc': '00',
            'description': 'دائما ال wifi فى وضع off mode بمعنى أنه لايصل إلى اى اشعارات من اى برنامج متصل بالإنترنت الا اذا فتحت الشاشه ودخلت على البرنامج مثل الواتس اب والفيس بوك وهكذا \nارجو المساعده للاهميه وشكرا مقدما',
            'create_time': '2018\/11\/29 23:06:15',
            'imei': '35833*****51470'
        },
        {
            'id': 65337,
            'issue': 'Autres problèmes',
            'email': 'ly***ynaba6@gmail.com',
            'country_mcc': '608',
            'mnc': '00',
            'description': "pourquoi l'application wathsapp s'est arrêté?",
            'create_time': '2018\/11\/29 22:56:29',
            'imei': '35428*****32137'
        },
        {
            'id': 65335,
            'issue': 'Otros problemas',
            'email': 'ma***la.giuliani@live.com.ar',
            'country_mcc': '722',
            'mnc': '00',
            'description': 'se escucha muy baja la musica',
            'create_time': '2018\/11\/29 22:02:22',
            'imei': '01482*****62284'
        },
        {
            'id': 65334,
            'issue': 'Otros problemas',
            'email': 'lu***aabrahamer@gmail.com',
            'country_mcc': '722',
            'mnc': '00',
            'description': 'No admite la tarjeta SD y antes sí\nno deja formatear ni nada\nque sucede? como lo resuelvo?',
            'create_time': '2018\/11\/29 22:01:03',
            'imei': '01481*****13013'
        },
        {
            'id': 65333,
            'issue': 'Photos',
            'email': 'sa***lhaj2@gmail.com',
            'country_mcc': '604',
            'mnc': '00',
            'description': 'appareil photo ne fonctionne plus',
            'create_time': '2018\/11\/29 22:00:16',
            'imei': '35834*****56252'
        },
        {
            'id': 65332,
            'issue': 'Outros problemas',
            'email': 'sa***aporto1979@gmail.com',
            'country_mcc': '268',
            'mnc': '00',
            'description': 'não sei como fazer para transferência de todas as chamadas para outro número',
            'create_time': '2018\/11\/29 21:17:49',
            'imei': '35736*****93618'
        },
        {
            'id': 65331,
            'issue': 'Aplicaciones instaladas',
            'email': 'he***or1958@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'se me forraron unas aplicaciónes k hago para restablecerla',
            'create_time': '2018\/11\/29 21:14:47',
            'imei': '35626*****30930'
        },
        {
            'id': 65330,
            'issue': 'Problème d’appareil photo',
            'email': 'ce***e28@ymail.com',
            'country_mcc': '208',
            'mnc': '00',
            'description': 'appareil photo et lampe de poche ne fonctionne plus',
            'create_time': '2018\/11\/29 21:09:14',
            'imei': '86702*****76127'
        },
        {
            'id': 65329,
            'issue': 'Installed Apps',
            'email': 'ju***cendou55@gmail.con',
            'country_mcc': '655',
            'mnc': '00',
            'description': 'The device is slow in Snaptube',
            'create_time': '2018\/11\/29 20:51:17',
            'imei': '35765*****15356'
        },
        {
            'id': 65328,
            'issue': 'Camera',
            'email': 'sh***oncawley2017@gmail.com',
            'country_mcc': '234',
            'mnc': '00',
            'description': 'my both cameras rear and front are not working they are just black what can be the problem',
            'create_time': '2018\/11\/29 20:47:35',
            'imei': '35321*****30358'
        },
        {
            'id': 65327,
            'issue': 'مشكلات أخرى',
            'email': 'th***.3388@gmail.com',
            'country_mcc': '420',
            'mnc': '00',
            'description': 'البصمه لاتعمل وتعليق للجهاز وتوجهت للوكيل رفض استلام الجهاز بحجه ان الشركه الام لاتوفر له قطع غيار للكاتيل',
            'create_time': '2018\/11\/29 20:30:11',
            'imei': '35849*****74972'
        },
        {
            'id': 65326,
            'issue': 'Другие проблемы',
            'email': 'ci***en04@mail.ru',
            'country_mcc': '257',
            'mnc': '00',
            'description': 'Я использую программу adidas micoach и часто бывает так, что долго не может найти спутник либо теряет его, что можно предпринять?',
            'create_time': '2018\/11\/29 20:28:17',
            'imei': '35809*****87340'
        },
        {
            'id': 65325,
            'issue': 'Aplicaciones instaladas',
            'email': 'gl***a.lt31@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'como puedo desinstalar el modo seguro de telcel ? por error al intentar apagar el teléfono al pulsar aceptar se comenzó a reiniciar elmodo seguro y deshabilito los juegos que tenia instalados y no se como resolverlo ayudeme por favor.Gracias',
            'create_time': '2018\/11\/29 19:34:46',
            'imei': '01467*****89518'
        },
        {
            'id': 65324,
            'issue': 'Épuisement inhabituel de la batterie',
            'email': 'gi***sebisse@gmail.com',
            'country_mcc': '624',
            'mnc': '00',
            'description': 'ma batterie fini trés vitre sa ne fait même pas 30min',
            'create_time': '2018\/11\/29 19:05:19',
            'imei': '35982*****73755'
        },
        {
            'id': 65323,
            'issue': 'Другие проблемы',
            'email': 'ar***-timofeev-1988@mail.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Я уже не знаю что делать, выпустите обновление, в котором будет отдельная настройка блокировки экрана с помощью тряски... Блокировка экрана переворотом отключена, ОТКЛЮЧЕНА!!! Вообще любая блокировка экрана у меня отключена... НО, стоит телефон немного встряхнуть или чуть резче повернуть, экран блокируется... Какого чёрта?! Что это за прикол такой?! Почему это нельзя отключить, это невероятно бесит... Сделайте что нибудь!!!',
            'create_time': '2018\/11\/29 19:00:18',
            'imei': '35368*****41486'
        },
        {
            'id': 65322,
            'issue': 'Случайная перезагрузка',
            'email': 'an***nd@mail.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Само произвольная перезагрузка смартфона 5015d при том что приложения установлены проверенные. В чем может быть причина.',
            'create_time': '2018\/11\/29 18:50:07',
            'imei': '35211*****79372'
        },
        {
            'id': 65321,
            'issue': 'Consumo de batería anormal',
            'email': '41***21252',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'consume bastante batería',
            'create_time': '2018\/11\/29 18:48:58',
            'imei': '01491*****86020'
        },
        {
            'id': 65320,
            'issue': 'Conectividad',
            'email': 'go***lezpreciadoarys@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'siempre que abro Facebook o WhatsApp me aparecen en página de segundo plano, y esto me hace pensar en que desde algún lugar este abierto el original. lo formatie y sigue igual',
            'create_time': '2018\/11\/29 18:42:29',
            'imei': '01491*****62450'
        },
        {
            'id': 65319,
            'issue': 'Otros problemas',
            'email': 'le***dahianagalano@@gmail.com',
            'country_mcc': '732',
            'mnc': '00',
            'description': 'no me funciona la memoriá',
            'create_time': '2018\/11\/29 18:38:59',
            'imei': '35445*****88431'
        },
        {
            'id': 65318,
            'issue': 'Другие проблемы',
            'email': 'Va***kin_i_u@mail.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'режим не беспокоить. я установили режим не беспокоить (кроме будильника) и потом выключил телефон и теперь я не могу выключить режим не беспокоить. нажимаю на клавишу, но экранная форма не открывается. и в главном меню отображается всегда что включён режим не беспокоить. выключение и перезагрузка не помогают. как отключить режим не беспокоить?',
            'create_time': '2018\/11\/29 18:36:06',
            'imei': '35809*****73818'
        },
        {
            'id': 65317,
            'issue': 'Другие проблемы',
            'email': 'el***ratova@yandrx.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Видит сим-карту, но не видит сеть.',
            'create_time': '2018\/11\/29 18:12:59',
            'imei': '35809*****43343'
        },
        {
            'id': 65316,
            'issue': 'Другие проблемы',
            'email': 'el***ratova@yandrx.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Видит сим-карту, но не видит сеть.',
            'create_time': '2018\/11\/29 18:12:12',
            'imei': '35809*****43343'
        },
        {
            'id': 65315,
            'issue': 'Egyéb problémák',
            'email': 'ys***clkfkk@gmail.com',
            'country_mcc': '216',
            'mnc': '00',
            'description': 'My phone is very slow',
            'create_time': '2018\/11\/29 17:17:37',
            'imei': '35470*****16186'
        },
        {
            'id': 65314,
            'issue': 'Egyéb problémák',
            'email': 'ys***clkfkk@gmail.com',
            'country_mcc': '216',
            'mnc': '00',
            'description': 'Performance error my phone is very slow please fix!',
            'create_time': '2018\/11\/29 17:16:50',
            'imei': '35470*****16186'
        },
        {
            'id': 65313,
            'issue': 'الاتصال',
            'email': 'ww***ma276@gmail.com',
            'country_mcc': '602',
            'mnc': '00',
            'description': 'توقف الاتصال',
            'create_time': '2018\/11\/29 17:04:28',
            'imei': '35448*****53909'
        },
        {
            'id': 65312,
            'issue': 'Εγκατεστημένες εφαρμογές',
            'email': 'ka***_g@hotmail.com',
            'country_mcc': '202',
            'mnc': '00',
            'description': 'Καλησπέρα, έχω ένα πρόβλημα με το bitdefender.Πρωτον δε μου ξεκινάει όταν ανοίγω το κινητό από μόνο του.Υπαρχει κάποιος τρόπος να ενεργοποιήται αυτόματα όταν ανοίγει το κινητό;Επίσης κάθε φορά που την ανοίγω μου βγάζει αυτό που σας επισυνάπτω στη φωτογραφία.Εμω κάνω όλες τις διαδικασίες την επόμενη φορά που θα ανοίξω την εφαρμογή, μου ζητάει τα ίδια πράγματα και δε ξέρω τι να κάνω.',
            'create_time': '2018\/11\/29 16:52:44',
            'imei': '35424*****26657'
        },
        {
            'id': 65311,
            'issue': 'Otros problemas',
            'email': 'ge***s2002789@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'el Bluetooth se desactiva cuando lo intento usar, y me pasaba con una aplicación, ee cerraba',
            'create_time': '2018\/11\/29 16:39:08',
            'imei': '35445*****00015'
        },
        {
            'id': 65310,
            'issue': 'Другие проблемы',
            'email': 'gu***cin.23@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'телефон новый сначало неработает вспышка потом показывает ошибку в батарее',
            'create_time': '2018\/11\/29 16:39:01',
            'imei': '35445*****51552'
        },
        {
            'id': 65309,
            'issue': 'Otros problemas',
            'email': 'di***fcolunga@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'actualicé mi dispositivo y después de esa actualización en la barra de notificaciones me aparece datos del usuario bloqueados y para mí es muy molesto pues no me deja ver la notificación.\n¿qué puedo hacer para quitar eso ?',
            'create_time': '2018\/11\/29 16:37:18',
            'imei': '35445*****61197'
        },
        {
            'id': 65308,
            'issue': 'Conectividad',
            'email': 'fr***obeel15@gmail.com',
            'country_mcc': '370',
            'mnc': '00',
            'description': 'los datos móviles no funcionan.',
            'create_time': '2018\/11\/29 16:24:40',
            'imei': '01491*****12329'
        },
        {
            'id': 65303,
            'issue': 'Problema con la cámara',
            'email': 'da***haylinjimenezlopez@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'porque mi cámara frontal y trasera no funciona?',
            'create_time': '2018\/11\/29 15:59:10',
            'imei': '01467*****31825'
        },
        {
            'id': 65302,
            'issue': 'Камера',
            'email': 'lo***olfal@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'здравствуйте не могу фотографироваться какая то проблема\nКогда я нажимаю кнопку чтобы сделать фотографию вылетает надпись ,что фото не сохранено ,а в каких то редакторах такой проблемы не возникает...\nраньше никогда такого не было ,память на устройстве достаточно,Как это исправить?',
            'create_time': '2018\/11\/29 15:48:01',
            'imei': '35445*****40512'
        },
        {
            'id': 65301,
            'issue': 'No se pudo conectar',
            'email': 'ja***-padilla2@hotmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'se conecta al WiFi y en menos de 5 segundos el solo se desconecta y si vuelvo a hacer la operación de volverme a conectar pasa lo mismo...el solo automáticamente se desconecta después de casi 5 segundos',
            'create_time': '2018\/11\/29 15:37:35',
            'imei': '01489*****88252'
        },
        {
            'id': 65300,
            'issue': 'Outros problemas',
            'email': 'ro***go_closs@hotmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'Bom dia. estou muito insatisfeito com esse aparelho. Os celulares da Alcatel são muito bonitos, porem tem um problema muito sério. em especial esse modelo que fica desativando o WiFi todo momento. e todo momento tem que desligar o aparelho e fazer o procedimento de limpeza de cache. ai ele volta a funcionar mas logo volta a dar o mesmo problema. Levei na assistência técnica a atendente constatou o problema foi levado para o tecnico e foi feito uma atualização do software. nos primeiros dias parecia que o problema tinha se resolvido. Mas depois de uns três dias de uso voltou tudo de novo. Levei novamente na assistência. e dessa vez ficou para análise e o tecnico disse que não constatou nenhum problema. só que o aparelho continua apresentando os mesmo problema. Resumindo quero que vocês da Alcatel resolva o meu problema. Já tive vários celulares e nunca teve problema parecido. Quando comprei esse aparelho eu escolhi por ser uma marca diferente dos que eu já tinha adquiridos.',
            'create_time': '2018\/11\/29 15:24:27',
            'imei': '35433*****97483'
        },
        {
            'id': 65298,
            'issue': 'Épuisement inhabituel de la batterie',
            'email': 'mb***igabriel@gmail.com',
            'country_mcc': '624',
            'mnc': '00',
            'description': 'La batterie finie vite et le téléphone chauffe',
            'create_time': '2018\/11\/29 15:17:14',
            'imei': '35515*****90980'
        },
        {
            'id': 65297,
            'issue': 'Cámara',
            'email': 'ge***22.gg@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'cámara frontal no se inicia.',
            'create_time': '2018\/11\/29 15:00:46',
            'imei': '35424*****37053'
        },
        {
            'id': 65296,
            'issue': 'Vấn đề về Máy ảnh',
            'email': 'qu***uihuu@yahoo.com',
            'country_mcc': '452',
            'mnc': '00',
            'description': 'không chụp ở chế độ phơi sáng được',
            'create_time': '2018\/11\/29 14:23:16',
            'imei': '01487*****00054'
        },
        {
            'id': 65294,
            'issue': 'Otros problemas',
            'email': 'ma***re99@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'mi teléfono móvil se descarga bastante rápido aún sin estar en uso',
            'create_time': '2018\/11\/29 13:23:47',
            'imei': '01509*****59308'
        },
        {
            'id': 65292,
            'issue': 'Otros problemas',
            'email': 'vl***941@gmail.com',
            'country_mcc': '704',
            'mnc': '00',
            'description': 'El teléfono se pone muy lento cunado conecto los datos ala red del internet pero solo al conectarlos y luego vuelve a su estado normal pero tiene que pasar como unos diez minutos funcionando para que vuelva a su estado normal por favor quiero respuestas del problema gracias',
            'create_time': '2018\/11\/29 12:52:44',
            'imei': '01481*****41639'
        },
        {
            'id': 65291,
            'issue': 'Consumo anormal de bateria',
            'email': 'an***araviana368@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'Consumo muito rápido da bateria',
            'create_time': '2018\/11\/29 12:13:27',
            'imei': '01482*****76160'
        },
        {
            'id': 65290,
            'issue': 'Outros problemas',
            'email': 'al***iasmin_ribeiro@hotmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'Olá, bom dia.\n\nMeu Alcatel esta desligando e pega e não pega automaticamente o WiFi, e só funcional colocando no modo economia de energia.\n\nPreciso saber se é normal ou a um problema?\n\nA foto esta com o modo economia de energia.',
            'create_time': '2018\/11\/29 12:00:03',
            'imei': '35736*****92449'
        },
        {
            'id': 65289,
            'issue': 'Другие проблемы',
            'email': 'gr***rovicholga1994@yanfex.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'нет звука при звонке. звуки все включены, громкость включена, но звука при входящем вызове нет.',
            'create_time': '2018\/11\/29 11:50:43',
            'imei': '35708*****73340'
        },
        {
            'id': 65287,
            'issue': 'Connection Failure',
            'email': 'bi***.melodias@gmail.com',
            'country_mcc': '515',
            'mnc': '00',
            'description': 'laging nawawala ang support ng Alcatel.or stop .',
            'create_time': '2018\/11\/29 11:45:40',
            'imei': '35936*****16250'
        },
        {
            'id': 65286,
            'issue': 'Другие проблемы',
            'email': 'Vi***.22@mail.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Аппарат алкатель а7 иногда вай фай при включении работает около пяти секунд и сам выключается. Помогает только перезагрузка телефона. К сети вай фай при о этом подключается и сразу сам выключается',
            'create_time': '2018\/11\/29 11:43:43',
            'imei': '35810*****43725'
        },
        {
            'id': 65285,
            'issue': 'Inny problem',
            'email': 'ma***zym1959@wp.pl',
            'country_mcc': '260',
            'mnc': '00',
            'description': 'Przy 17 % bateri rozłancza połączenia bardzo wolno pracuje',
            'create_time': '2018\/11\/29 11:38:45',
            'imei': '35662*****36293'
        },
        {
            'id': 65284,
            'issue': 'Inny problem',
            'email': 'ma***zym1959@wp.pl',
            'country_mcc': '260',
            'mnc': '00',
            'description': 'Przy 17 % bateri rozłancza połączenia bardzo wolno pracuje',
            'create_time': '2018\/11\/29 11:36:29',
            'imei': '35662*****36293'
        },
        {
            'id': 65283,
            'issue': 'مشكلات أخرى',
            'email': 'ma***od219m@gmail.com',
            'country_mcc': '420',
            'mnc': '00',
            'description': 'تعليق والمساحة غير كافية يحتاج الي تحديث',
            'create_time': '2018\/11\/29 11:29:06',
            'imei': '35412*****20522'
        },
        {
            'id': 65282,
            'issue': 'الاتصال',
            'email': 'ah***soltandemoo@gmail.com',
            'country_mcc': '602',
            'mnc': '00',
            'description': 'اغضبنى جهازى تم شراءه من شهر فقط مشكله الجهاز ضعف شديد فى استقبال اشارة الشبكه الهاتف المحمول ارجو منك حل المشكله',
            'create_time': '2018\/11\/29 10:17:57',
            'imei': '35445*****85600'
        },
        {
            'id': 65281,
            'issue': 'Другие проблемы',
            'email': 'sv***.bashkirova@bk.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'после ремонта вашей антенны снизилось качество связи. Треск, шум, слышно только обрывки фраз. И так чуть больше месяца и у всех абонентов Билайн. Не хотелось бы менять оператора, может как-то решительно проблему со связью?',
            'create_time': '2018\/11\/29 10:12:15',
            'imei': '86702*****74737'
        },
        {
            'id': 65280,
            'issue': 'Other issues',
            'email': 'mo***aku@gmail.com',
            'country_mcc': '234',
            'mnc': '00',
            'description': "I have only gag this phone for a month and I am already experiencing issues with the charging ports. it doesn't click when I connect it, it's loose and now have to position it in a particular angle for my phone to charge. I suspect it's a charger issue but can't be certain. can you help me with this? I've got warranty.",
            'create_time': '2018\/11\/29 09:25:30',
            'imei': '35627*****91108'
        },
        {
            'id': 65279,
            'issue': 'Andere problemen',
            'email': 'pr***essattia@gmail.com',
            'country_mcc': '204',
            'mnc': '00',
            'description': "Telefoon loopt regelmatig vast, vooral bij het afspelen van online video's.",
            'create_time': '2018\/11\/29 08:55:58',
            'imei': '35344*****57126'
        },
        {
            'id': 65278,
            'issue': 'Andere problemen',
            'email': 'w.***ner@gmail.com',
            'country_mcc': '204',
            'mnc': '00',
            'description': 'Het verplaatsen van apps naar het aanvullend geheugen lukt niet. In het overzicht van de apps is de betreffende mogelijkheid grijs dus kan niet toegepast worden.',
            'create_time': '2018\/11\/29 08:55:13',
            'imei': '35558*****91820'
        },
        {
            'id': 65277,
            'issue': 'Andere problemen',
            'email': 'br***corp42@gmail.com',
            'country_mcc': '204',
            'mnc': '00',
            'description': 'i need my phone to work and respond faster...i cant do anything but try fixing non stop',
            'create_time': '2018\/11\/29 08:54:25',
            'imei': '35990*****10343'
        },
        {
            'id': 65276,
            'issue': 'Outros problemas',
            'email': 'Ar***fortes20@gmail.com',
            'country_mcc': '268',
            'mnc': '00',
            'description': 'As aplicações fecham sozinhos, ou seja, fechamento repentino',
            'create_time': '2018\/11\/29 08:48:21',
            'imei': '35847*****71207'
        },
        {
            'id': 65272,
            'issue': 'Olağan Dışı Pil Boşalması',
            'email': 'hi***dastan@hotmail.com',
            'country_mcc': '286',
            'mnc': '00',
            'description': 'Şarjı çabuk bitiyor bazen şarjı olmasına rağmen kapanıyor',
            'create_time': '2018\/11\/29 07:39:30',
            'imei': '35209*****75197'
        },
        {
            'id': 65271,
            'issue': 'Other issues',
            'email': 'ai***eegan02@yahoo.ie',
            'country_mcc': '272',
            'mnc': '00',
            'description': 'call quality extremely bad - many calls people cannot hear me and describe call as very muffled - do not have or never had this problem with any other phone - my old phone is Sony Experia, still working, and it has great phone call quality - what is the problem?',
            'create_time': '2018\/11\/29 07:23:56',
            'imei': '35515*****31217'
        },
        {
            'id': 65270,
            'issue': 'Otros problemas',
            'email': 'su***ague@yahoo.es',
            'country_mcc': '214',
            'mnc': '00',
            'description': 'se me han quedado las aplicaciones en blanco bloqueado y cd le di a apagar se bloqueo la pantalla en negro. se ha reiniciado al conectarlo a la luz. tenia batería. Q ha podido ser. gracias',
            'create_time': '2018\/11\/29 07:09:32',
            'imei': '35810*****69266'
        },
        {
            'id': 65269,
            'issue': 'Другие проблемы',
            'email': 'al***er1410@mail.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'смартфон с первого дня греется ,антенна попадает',
            'create_time': '2018\/11\/29 07:08:57',
            'imei': '35846*****39415'
        },
        {
            'id': 65268,
            'issue': 'Установлені програми',
            'email': 'mi***mahas@mail.ru',
            'country_mcc': '255',
            'mnc': '00',
            'description': 'лагає сторіс в інстаграм',
            'create_time': '2018\/11\/29 07:03:56',
            'imei': '35344*****39883'
        },
        {
            'id': 65267,
            'issue': 'Connectivity',
            'email': 'sh***n@gmail.com',
            'country_mcc': '272',
            'mnc': '00',
            'description': 'connection',
            'create_time': '2018\/11\/29 06:45:45',
            'imei': '35428*****82899'
        },
        {
            'id': 65265,
            'issue': 'Reinicialização aleatória',
            'email': 'pa***garcia_72@hotmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'ten dias q meu cel trav do nada e se reinicia sozinho',
            'create_time': '2018\/11\/29 06:14:30',
            'imei': '35433*****32698'
        },
        {
            'id': 65264,
            'issue': 'Other issues',
            'email': 'de***naosborne2004@gmail.com',
            'country_mcc': '338',
            'mnc': '00',
            'description': 'phone has little bit of giga bytes it want more to install stuffs on the phone',
            'create_time': '2018\/11\/29 06:08:35',
            'imei': '35889*****07781'
        },
        {
            'id': 65263,
            'issue': 'Consumo de batería anormal',
            'email': 'da***agdel1@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'oigan ya les había mandado un mensaje que hago con la batería lo formateo o lo cambio en la sucursal ?',
            'create_time': '2018\/11\/29 06:06:29',
            'imei': '35826*****48363'
        },
        {
            'id': 65262,
            'issue': 'Battery drain',
            'email': 'am***drasingh0619@gmail.com',
            'country_mcc': '405',
            'mnc': '00',
            'description': 'Battery is not so good and also give updates',
            'create_time': '2018\/11\/29 05:46:29',
            'imei': '35515*****50460'
        },
        {
            'id': 65261,
            'issue': 'Останати проблеми',
            'email': 'pa***.tray@gmail.com',
            'country_mcc': '294',
            'mnc': '00',
            'description': 'Како да се направи меморија со мем карта',
            'create_time': '2018\/11\/29 05:19:36',
            'imei': '35227*****32590'
        },
        {
            'id': 65260,
            'issue': 'Other issues',
            'email': 'cr***h1987@outlook.com',
            'country_mcc': '234',
            'mnc': '00',
            'description': 'phone is shockingly bad forever crashing and system failure all the time I have to reset my phone to factory reset every other day as just keeps freezing and telling me system uri is not working, this is the worst experience I have ever had with a phone',
            'create_time': '2018\/11\/29 04:57:31',
            'imei': '35889*****93045'
        },
        {
            'id': 65259,
            'issue': 'Outros problemas',
            'email': 'la***cbarreto@outlook.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'Não consigo navegar na internet por muito tempo porque meu wifi desliga sozinho.',
            'create_time': '2018\/11\/29 04:53:44',
            'imei': '35433*****34729'
        },
        {
            'id': 65258,
            'issue': 'Outros problemas',
            'email': 'la***cbarreto@outlook.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'Não consigo navegar na internet por muito tempo porque meu wifi desliga sozinho.',
            'create_time': '2018\/11\/29 04:52:46',
            'imei': '35433*****34729'
        },
        {
            'id': 65257,
            'issue': 'Aplicaciones instaladas',
            'email': 'ma***ingisselamartinez@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'cuando recibo mensajes o notificaciones de mis apps instaladas, en la barra de notificaciones aparece el mensaje "Datos del usuario bloqueados" y no sé qué hacer al respecto',
            'create_time': '2018\/11\/29 04:50:20',
            'imei': '35445*****35865'
        },
        {
            'id': 65256,
            'issue': 'Aplicaciones instaladas',
            'email': 'nh***y819@gmail.com',
            'country_mcc': '732',
            'mnc': '00',
            'description': 'mi movil no quiere actualizar aplicaciones de su propio sistema como el hrabador de sonido y el lector de archivos, ¿que puedo hacer?',
            'create_time': '2018\/11\/29 04:33:37',
            'imei': '35989*****02601'
        },
        {
            'id': 65255,
            'issue': 'Outros problemas',
            'email': 'se***o.ribeirinho@gmail.com',
            'country_mcc': '268',
            'mnc': '00',
            'description': 'rede wi fi. liga a rede e desliga repetidamente. Fiz diagnóstico do aparelho e aparece informação de problema  hardware wi fi',
            'create_time': '2018\/11\/29 03:23:20',
            'imei': '35847*****12164'
        },
        {
            'id': 65254,
            'issue': 'Consumo de batería anormal',
            'email': 'la***gue1090@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'no agarra el cargador y se consume muy rápido la pila y se calienta mucho el telefono',
            'create_time': '2018\/11\/29 02:42:28',
            'imei': '01509*****17678'
        },
        {
            'id': 65253,
            'issue': 'تفريغ غير عادي للبطارية',
            'email': 'ra***frh32@gmail.com',
            'country_mcc': '420',
            'mnc': '00',
            'description': 'الجوال يغلق من نفسه(اعادة تشغيل عشوائي)،ويتم تحسين البرامج(التطبيقات المثبتة)ويستغرق وقتا طويلا ثم يفتح الجهاز والشاحن فارغ',
            'create_time': '2018\/11\/29 02:37:09',
            'imei': '35412*****09183'
        },
        {
            'id': 65252,
            'issue': 'Otros problemas',
            'email': 'ma***sanchez140902@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'Solo Funciona La Tecla De Regresar Para Regresar Atrás,Las Otras 2 Teclas De La Derecha(El Círculo Y Las 3 Líneas)No Funcionan',
            'create_time': '2018\/11\/29 02:34:31',
            'imei': '01510*****46161'
        },
        {
            'id': 65250,
            'issue': 'Aplicaciones instaladas',
            'email': 'ca***oplazas1831@gmail.com',
            'country_mcc': '732',
            'mnc': '00',
            'description': 'Hola el problema es que tengo variedad de aplicaciones y cada vez que entro a una de ellas se traba el celular y se queda así un buen rato y se sale de las aplicaciones.',
            'create_time': '2018\/11\/29 01:45:21',
            'imei': '35445*****25165'
        },
        {
            'id': 65249,
            'issue': 'Cámara',
            'email': 'je***franleos@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'se me rompió la cámara, ayudaaaa!! porfavor díganme qué hacer, creo que no hay centro de reparación en Hermosillo Sonora lo cual es muy absurdo no es una queja ni nada pero la cámara se rompió de una manera bastante tonta en cuanto a la pantalla muy bien mejor que el Cristal de la cámara',
            'create_time': '2018\/11\/29 01:04:25',
            'imei': '35445*****64660'
        },
        {
            'id': 65248,
            'issue': 'Other issues',
            'email': 'de***romam@gmail.com',
            'country_mcc': '338',
            'mnc': '00',
            'description': "My device won't stop jumping out of the applications and telling me that the app has stopped working. And I don't know what's happening.\nAlso, I don't know how to make my media storage is place on my SD card and not in my internal storage. \nAdditionally, the device is raising at high temperatures (burning temperatures), I have to place it on a cool surface to keep it down. And there have been various glitches etc...",
            'create_time': '2018\/11\/29 00:05:15',
            'imei': '35626*****89316'
        },
        {
            'id': 65247,
            'issue': 'Consumo de batería anormal',
            'email': 'sa***thavaldez489@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'no acepta la tarjeta SIM y se descarga muy rápido',
            'create_time': '2018\/11\/28 23:33:35',
            'imei': '35826*****67640'
        },
        {
            'id': 65246,
            'issue': 'Outros problemas',
            'email': 'na***darcia@hotmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'o telefone está desligado sozinho',
            'create_time': '2018\/11\/28 23:27:55',
            'imei': '01508*****74565'
        },
        {
            'id': 65245,
            'issue': 'Cámara',
            'email': 'el***ador12.203@gmail.com',
            'country_mcc': '716',
            'mnc': '00',
            'description': 'Al momento de la toma de fotos o al grabar la cámara enfoca repetidas veces, razón por la cual se vuelve tedioso usarla',
            'create_time': '2018\/11\/28 22:18:19',
            'imei': '35445*****61127'
        },
        {
            'id': 65244,
            'issue': 'إعادة تشغيل عشوائي',
            'email': 'Ge***emajed11@gmail.com',
            'country_mcc': '602',
            'mnc': '00',
            'description': 'عندي التحميل الشاشه لا تنطفاه',
            'create_time': '2018\/11\/28 22:15:41',
            'imei': '35708*****95065'
        },
        {
            'id': 65243,
            'issue': 'Applications installées',
            'email': 'ne***1042005@gmail.com',
            'country_mcc': '340',
            'mnc': '00',
            'description': "Je ne peux pas installée assez d'applications.",
            'create_time': '2018\/11\/28 21:21:19',
            'imei': '35736*****03612'
        },
        {
            'id': 65242,
            'issue': 'Outros problemas',
            'email': 'we***ny2006@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'não consigo acesar meus contatos aparece uma MSG contato parou',
            'create_time': '2018\/11\/28 21:15:40',
            'imei': '01500*****71581'
        },
        {
            'id': 65241,
            'issue': 'Consumo anormal de bateria',
            'email': 'an***zasouzadasilva54@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'descarrega muito rápido e quando estou usando esquenta muito? ele corre o risco de explodir?',
            'create_time': '2018\/11\/28 21:15:07',
            'imei': '35674*****08473'
        },
        {
            'id': 65240,
            'issue': 'Otros problemas',
            'email': 'ju***rsilverio100@gmail.com',
            'country_mcc': '370',
            'mnc': '00',
            'description': 'el teléfono no quiere leer una Tarjeta (SD)',
            'create_time': '2018\/11\/28 21:09:49',
            'imei': '01460*****75684'
        },
        {
            'id': 65239,
            'issue': 'Other issues',
            'email': 'ma***sh400@gmail.com',
            'country_mcc': '530',
            'mnc': '00',
            'description': 'Getting photos on to a mac computer',
            'create_time': '2018\/11\/28 20:49:39',
            'imei': '35448*****14419'
        },
        {
            'id': 65238,
            'issue': 'Камера',
            'email': 'us***lnik21@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'не работает камера и вспышка выдаёт ошибки системы',
            'create_time': '2018\/11\/28 20:18:45',
            'imei': '35708*****56452'
        },
        {
            'id': 65237,
            'issue': 'Connectivity',
            'email': 'da***leney44@gmail.com',
            'country_mcc': '505',
            'mnc': '00',
            'description': "doesn't work for me",
            'create_time': '2018\/11\/28 20:12:47',
            'imei': '35539*****84000'
        },
        {
            'id': 65236,
            'issue': 'Andere problemen',
            'email': 'pe***nellavanheesewijck@gmail.com',
            'country_mcc': '204',
            'mnc': '00',
            'description': 'De tijd blijft staan?',
            'create_time': '2018\/11\/28 19:55:12',
            'imei': '35989*****35693'
        },
        {
            'id': 65235,
            'issue': 'Applicazioni installate',
            'email': 'sh***imcaush@gmail.com',
            'country_mcc': '222',
            'mnc': '00',
            'description': 'voglio per cominciare da capo perche ho fato casinò, non mi ricordo gmail.com,password, sofro un po da memorie ,mi aiutare. Grazie.',
            'create_time': '2018\/11\/28 19:49:52',
            'imei': '35412*****66513'
        },
        {
            'id': 65234,
            'issue': 'Camera',
            'email': 'ar***rm66@gmail.com',
            'country_mcc': '204',
            'mnc': '00',
            'description': 'afbeelding niet mogelijk suggesties verdwijnt te snel .klein wit rechthoek midden scherm letters zwart',
            'create_time': '2018\/11\/28 19:45:57',
            'imei': '35570*****34027'
        },
        {
            'id': 65233,
            'issue': 'مشكلات أخرى',
            'email': 'ka***fouani9@gmail.com',
            'country_mcc': '415',
            'mnc': '00',
            'description': 'جيد',
            'create_time': '2018\/11\/28 19:43:38',
            'imei': '35445*****82138'
        },
        {
            'id': 65232,
            'issue': 'Camera',
            'email': 'ar***rm66@gmail.com',
            'country_mcc': '204',
            'mnc': '00',
            'description': 'bij de camera pictogram: flitser wordt bij andere apps gebruikt. Whatsapp zegt opnieuw opstarten',
            'create_time': '2018\/11\/28 19:43:33',
            'imei': '35570*****34027'
        },
        {
            'id': 65231,
            'issue': 'Olağan Dışı Pil Boşalması',
            'email': 'ha***cankayali249@gmail.com',
            'country_mcc': '286',
            'mnc': '00',
            'description': 'Merhaba inanılmaz hızlı bir pil boşalması var. 3 saat aralıksız mobil veri ile sosyal medya ve oyunlarla en. Fazla 4 saat dayanıyor. Güncelleme gelmişti onu yapmıştım sonra düzeldi ama yine böyle oldu güncelleme 5 ay önce gelmişti. Lütfen yazılım güncellemesini kısa zamanda yayınlayın. Gereğinin yapılmasını arz ederim.    (Hasancan Kayalı)',
            'create_time': '2018\/11\/28 19:42:41',
            'imei': '35209*****61874'
        },
        {
            'id': 65230,
            'issue': 'Aplicaciones instaladas',
            'email': 'ba***loeusebio@gmail.com',
            'country_mcc': '214',
            'mnc': '00',
            'description': 'la gestión de archivos es tan mala que la tengo que desastualizar pues me bloquea me lo entorpezee lo oscurece definitivamente una mierda si podría quitarla la quitaria',
            'create_time': '2018\/11\/28 19:32:18',
            'imei': '35662*****55566'
        },
        {
            'id': 65229,
            'issue': 'Reinicio aleatorio',
            'email': 'ba***loeusebio@gmail.com',
            'country_mcc': '214',
            'mnc': '00',
            'description': 'las gestión de archivos la tengo que destualizar pues me atasca el teléfono si podría eliminarla lo Adrià',
            'create_time': '2018\/11\/28 19:29:46',
            'imei': '35662*****55566'
        },
        {
            'id': 65228,
            'issue': 'Other issues',
            'email': 'ja***angamingYT@gmail.com',
            'country_mcc': '234',
            'mnc': '00',
            'description': "it says my SD card is malfunctioning and I don't know how to fix it",
            'create_time': '2018\/11\/28 19:15:51',
            'imei': '35515*****46607'
        },
        {
            'id': 65227,
            'issue': 'Outros problemas',
            'email': 'ev***yn.possato@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'fica embasada todas as fotos que eu tiro',
            'create_time': '2018\/11\/28 18:59:26',
            'imei': '35363*****72455'
        },
        {
            'id': 65226,
            'issue': 'Autres problèmes',
            'email': 'mo***rfj@gmail.com',
            'country_mcc': '624',
            'mnc': '00',
            'description': "le téléphone a tendance à ce bloquer lors qu'il y a surcharge de  Notification",
            'create_time': '2018\/11\/28 18:57:07',
            'imei': '35424*****79397'
        },
        {
            'id': 65225,
            'issue': 'Applications installées',
            'email': 'fr***ric.mboumba68@gmail.com',
            'country_mcc': '208',
            'mnc': '00',
            'description': 'Google play ne fonctionne plus .',
            'create_time': '2018\/11\/28 17:56:49',
            'imei': '35834*****11914'
        },
        {
            'id': 65224,
            'issue': 'Быстрый разряд батареи',
            'email': 'mi***a1122@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'во время прослушивания музыки батарея быстро разряжается',
            'create_time': '2018\/11\/28 17:44:57',
            'imei': '35515*****45251'
        },
        {
            'id': 65223,
            'issue': 'Geïnstalleerde apps',
            'email': 'go***hizzlee@gmail.com',
            'country_mcc': '204',
            'mnc': '00',
            'description': "Hallo,\n\nWaar kan ik een Alcatel galerij app downloaden? Mijn Alcatel 3C heeft geen (eigen) Galerij app, dat heb ik nog nooit meegemaakt, ik moet nu alles via Google (foto's) doen, en dat werkt totaal niet fijn ! En via de Playstore zijn er een aantal galerij Apps beschikbaar, maar die werken niet goed ! Hoop dat er een eigen Alcatel Galerij App bestaat ? Hoor heel graag van u \n\nMvg Lorenzo Roelofs",
            'create_time': '2018\/11\/28 17:33:49',
            'imei': '35344*****35610'
        },
        {
            'id': 65222,
            'issue': 'Outros problemas',
            'email': 'na***a.regina.f@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'celular não lê o cartão de memória mesmo depois do mesmo ser configurado pelo aparelho... câmera Tbn não está funcionando alega que não a espaço no dispositivo',
            'create_time': '2018\/11\/28 17:16:08',
            'imei': '01500*****90139'
        },
        {
            'id': 65221,
            'issue': 'Altri problemi',
            'email': 'pa***iciobonfanti@libero.it',
            'country_mcc': '222',
            'mnc': '00',
            'description': 'mi si è disattivata la possibilità di registrare nuovi contatti,come posso riattivarla?',
            'create_time': '2018\/11\/28 16:50:18',
            'imei': '35325*****94253'
        },
        {
            'id': 65220,
            'issue': 'Altri problemi',
            'email': 'pa***iciobonfanti@libero.it',
            'country_mcc': '222',
            'mnc': '00',
            'description': "non riesco più a registrare nuovi contatti perché mi dice che ho disinstallato l'applicazione.... ovviamente non so come....vorrei poterla riattivare mi sapete dire come?",
            'create_time': '2018\/11\/28 16:49:10',
            'imei': '35325*****94253'
        },
        {
            'id': 65219,
            'issue': 'Aplicaciones instaladas',
            'email': 'is***l@alma.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'el teléfono si descargo una aplicación no  funsiona durante una semana o menos y PS no funciona me tengo q esperar asta q agarre BN y  funcione',
            'create_time': '2018\/11\/28 16:33:36',
            'imei': '01508*****83354'
        },
        {
            'id': 65218,
            'issue': 'Cámara',
            'email': 'se***var6@gmail.com',
            'country_mcc': '732',
            'mnc': '00',
            'description': 'la cámara frontal me sirve de maravilla , el problema es la cámara trasera que antes de la última actualización me enfocaba muy bien de lejos y de cerca , actualmente no enfoca de cerca y de lejos parece ser que la calidad es poca . el teléfono lleva menos de un mes comprado por lo cual no debería tener este tipo de fallos . quiero una solución por favor . gracias .',
            'create_time': '2018\/11\/28 16:20:56',
            'imei': '35344*****83909'
        },
        {
            'id': 65217,
            'issue': 'Installed apps',
            'email': 'fr***inaadams108@gmail.com',
            'country_mcc': '505',
            'mnc': '00',
            'description': 'where is the gallery application',
            'create_time': '2018\/11\/28 16:09:34',
            'imei': '35539*****64551'
        },
        {
            'id': 65216,
            'issue': 'Autres problèmes',
            'email': 'ha***eaux65@gmail.com',
            'country_mcc': '208',
            'mnc': '00',
            'description': 'processeur système ne répond pas',
            'create_time': '2018\/11\/28 16:07:26',
            'imei': '35834*****54926'
        },
        {
            'id': 65215,
            'issue': 'Aplicaciones instaladas',
            'email': 'da***lcastroernesto44@gmail.com',
            'country_mcc': '214',
            'mnc': '00',
            'description': 'La aplicación Joy Launcher no responde y no salen las noticias',
            'create_time': '2018\/11\/28 16:00:07',
            'imei': '35699*****24869'
        },
        {
            'id': 65214,
            'issue': 'Другие проблемы',
            'email': 'ta***apolevina378@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Как снять блокировку экрана? Удаление сертификатов не работает.',
            'create_time': '2018\/11\/28 15:54:25',
            'imei': '35209*****24939'
        },
        {
            'id': 65213,
            'issue': 'Consumo de batería anormal',
            'email': 'an***icaruby33@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'se consume la batería el doble de rápido que antes o más rápido y es muy molesto les pido porfavor que hagan que la batería dure más',
            'create_time': '2018\/11\/28 15:25:53',
            'imei': '01508*****79857'
        },
        {
            'id': 65212,
            'issue': 'Otros problemas',
            'email': 'an***icaruby33@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'play stote no me deja instalar ninguna aplicación sin el permiso de un adulto y eso me molesta y no puedo instalar YouTube y no me vino instalado',
            'create_time': '2018\/11\/28 15:24:03',
            'imei': '01508*****79857'
        },
        {
            'id': 65211,
            'issue': 'Consumo de batería anormal',
            'email': 'so***anisyanni@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'se le acaba la batería muy rápido no dura 100% mas de 30 segundos luego cuando se acaba los 30 segundos queda en 97% y continua así asta que  llegue a 0%',
            'create_time': '2018\/11\/28 15:14:19',
            'imei': '01462*****62428'
        },
        {
            'id': 65210,
            'issue': 'Otros problemas',
            'email': 'so***anisyanni@gmail.com',
            'country_mcc': '334',
            'mnc': '00',
            'description': 'no se actualiza a android 8.0 sigue diciéndome que esta actualizado pero sigue con android 6.0',
            'create_time': '2018\/11\/28 15:11:58',
            'imei': '01462*****62428'
        },
        {
            'id': 65209,
            'issue': 'Battery drain',
            'email': 'to***tpaul59@gmail.com',
            'country_mcc': '234',
            'mnc': '00',
            'description': 'phone will not charge above 12%',
            'create_time': '2018\/11\/28 14:58:45',
            'imei': '35393*****32034'
        },
        {
            'id': 65208,
            'issue': 'Connectivité',
            'email': 'ju***ne.fraeye@outlook.fr',
            'country_mcc': '208',
            'mnc': '00',
            'description': "je n'arrive plus à envoyer de message",
            'create_time': '2018\/11\/28 13:58:23',
            'imei': '35424*****99971'
        },
        {
            'id': 65207,
            'issue': 'No se pudo conectar',
            'email': 'ad***ertomolina2304@gmail.com',
            'country_mcc': '706',
            'mnc': '00',
            'description': 'lo que pasa es que mi celular de repente sin mas se desconecta de mi WiFi y lo conecto otra vez a la red pero después de unos segundos se vuelve a desconectar y solo reiniciando el teléfono se arregla pero igual el problema sigue',
            'create_time': '2018\/11\/28 13:50:23',
            'imei': '01452*****44037'
        },
        {
            'id': 65206,
            'issue': 'Câmera',
            'email': 'si***theus@mail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'a câmera não funciona',
            'create_time': '2018\/11\/28 13:49:11',
            'imei': '01482*****84512'
        },
        {
            'id': 65205,
            'issue': 'Câmera',
            'email': 'si***theus@mail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'a câmera funciona errado',
            'create_time': '2018\/11\/28 13:48:41',
            'imei': '01482*****84512'
        },
        {
            'id': 65204,
            'issue': 'Consumo de batería anormal',
            'email': 'ad***ertomolina2304@gmail.com',
            'country_mcc': '706',
            'mnc': '00',
            'description': 'el problema es que se me baja muy rápido la batería de mi teléfono sin ni si quiera usarlo osea si lo tengo bloqueado(no apagado) se me descarga horriblemente rapido',
            'create_time': '2018\/11\/28 13:48:34',
            'imei': '01452*****44037'
        },
        {
            'id': 65203,
            'issue': 'Altri problemi',
            'email': 'Me***c.it@gmail.com',
            'country_mcc': '222',
            'mnc': '00',
            'description': 'io ho desiderio per farò un abbonamento 6 messi versò meetic.it ,ma non poso fare...!?.Ho una MasterCard e carica con soldi necessario per fare questo pagamento. Prego voglio per mi aiuterà. Grazi.',
            'create_time': '2018\/11\/28 13:12:26',
            'imei': '35412*****66513'
        },
        {
            'id': 65202,
            'issue': 'Otros problemas',
            'email': 'he***r@juldiepar.com',
            'country_mcc': '214',
            'mnc': '00',
            'description': 'buenos días por favor necesito que me den una solución definitiva a mi teléfono ha ido dos veces al servicio técnico me dicen que está bien y sigue sin sonido a veces sí y casi nunca no, no es normal que el teléfono tenga que estar pendiente de que vibre para poderlo usar porque no suena, suena una vez en el día y el resto de tiempo no',
            'create_time': '2018\/11\/28 12:06:49',
            'imei': '35810*****26314'
        },
        {
            'id': 65201,
            'issue': 'Outros problemas',
            'email': 're***maecos675@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'não suporta aplicativos de tamanho grande e esqueta muito a CPU resolvam o problema nesse modelo',
            'create_time': '2018\/11\/28 12:02:11',
            'imei': '35515*****56549'
        },
        {
            'id': 65200,
            'issue': 'Другие проблемы',
            'email': 'er***in.artem.0481@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'у меня проблема с производительностью,телефон лагает страсть,и антивирус нашёл угрозу ,как мне её устранить?',
            'create_time': '2018\/11\/28 11:52:03',
            'imei': '35904*****26735'
        },
        {
            'id': 65199,
            'issue': 'Outros problemas',
            'email': 'ed***mt65@hotmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'no meu caso.. ele trava muito.. se abro face eu não consigo mas fazer nada no celular.. tenho que esta reiniciando para ver se volta o funcionamento correto',
            'create_time': '2018\/11\/28 11:51:11',
            'imei': '01458*****81754'
        },
        {
            'id': 65198,
            'issue': 'Aplicações instaladas',
            'email': 'ka***l.iktus@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'nao atualiza',
            'create_time': '2018\/11\/28 11:44:24',
            'imei': '35689*****79970'
        },
        {
            'id': 65197,
            'issue': 'Outros problemas',
            'email': 'da***@g.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'Meu celular é só vibra mais não toca normal ou seja não sai toque só vibra',
            'create_time': '2018\/11\/28 11:21:09',
            'imei': '35689*****08285'
        },
        {
            'id': 65196,
            'issue': 'Outros problemas',
            'email': 'sa***sfrosa11@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'Por favor, arrumem o pley story, faz algum tempo que não funciona, preciso usa-lo',
            'create_time': '2018\/11\/28 11:06:27',
            'imei': '01457*****90717'
        },
        {
            'id': 65195,
            'issue': 'Reboots',
            'email': 'cl***fishnemo86@gmail.com',
            'country_mcc': '505',
            'mnc': '00',
            'description': 'phone is going to black screen and not working so I have to reboot  my phone All the time',
            'create_time': '2018\/11\/28 10:58:50',
            'imei': '35539*****71810'
        },
        {
            'id': 65194,
            'issue': 'Other issues',
            'email': 'cl***fishnemo86@gmail.com',
            'country_mcc': '505',
            'mnc': '00',
            'description': "my phone is going to black screen I can't get it to open up home page sometimes I have to reset my phone all the time can U tell me what is going on thanks",
            'create_time': '2018\/11\/28 10:56:46',
            'imei': '35539*****71810'
        },
        {
            'id': 65193,
            'issue': 'Cámara',
            'email': 'rt***rasquiterio@gmail.com',
            'country_mcc': '370',
            'mnc': '00',
            'description': 'no funciona la cámara frontal de mi teléfono Alcatel 3v',
            'create_time': '2018\/11\/28 10:54:35',
            'imei': '01510*****12421'
        },
        {
            'id': 65192,
            'issue': 'Связь',
            'email': 'po***19772101@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'пропадает звук, и вызовы',
            'create_time': '2018\/11\/28 10:54:04',
            'imei': '35708*****54486'
        },
        {
            'id': 65191,
            'issue': 'Otros problemas',
            'email': 'ro***_811@hotmail.com',
            'country_mcc': '716',
            'mnc': '00',
            'description': 'tengo un problema con la luz de pantalla .\n siempre en el teléfono nos piden que tiempo debe estar prendido si son un minuto o dos minutos de espera para poder apagarse solo ... bueno el mio puse un minuto y nunca se apaga solo !? , siempre esta prendido y eso hace que la batería se  consuma mas rápido .. no se si habrá alguna solución por favor .. gracias',
            'create_time': '2018\/11\/28 10:18:15',
            'imei': '01481*****77155'
        },
        {
            'id': 65190,
            'issue': 'Outros problemas',
            'email': 'da***llesouza1645@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'O WI Fi não estar funcionando. Ele não está conectando com nenhum wireless',
            'create_time': '2018\/11\/28 09:44:03',
            'imei': '35689*****61974'
        },
        {
            'id': 65189,
            'issue': 'Aparat foto',
            'email': 'ic***erca@gmail.com',
            'country_mcc': '226',
            'mnc': '00',
            'description': 'nu fotografiază',
            'create_time': '2018\/11\/28 09:39:03',
            'imei': '35662*****67404'
        },
        {
            'id': 65188,
            'issue': 'Conectividad',
            'email': 'da***r95@gmail.com',
            'country_mcc': '214',
            'mnc': '00',
            'description': 'no logro que el teléfono abra para pasar archivos y vídeos para disco duro externo',
            'create_time': '2018\/11\/28 09:26:07',
            'imei': '35570*****54157'
        },
        {
            'id': 65187,
            'issue': 'Autres problèmes',
            'email': 'ag***elot@gmail.com',
            'country_mcc': '208',
            'mnc': '00',
            'description': "Mon téléphone activé mode sécurisé. Comment l'enlever",
            'create_time': '2018\/11\/28 08:49:04',
            'imei': '35498*****30203'
        },
        {
            'id': 65186,
            'issue': 'Other Issues',
            'email': 'ky***onteza@gmail.com',
            'country_mcc': '515',
            'mnc': '00',
            'description': 'I cant capture screenshots when I use my sdcard as my storage. Well, infact I still have 12 or more gb left in my sdcard',
            'create_time': '2018\/11\/28 08:33:43',
            'imei': '01457*****07853'
        },
        {
            'id': 65185,
            'issue': 'Other Issues',
            'email': 'ky***onteza@gmail.com',
            'country_mcc': '515',
            'mnc': '00',
            'description': 'i cant view my images in my gallery... I badlt need help at all',
            'create_time': '2018\/11\/28 08:32:08',
            'imei': '01457*****07853'
        },
        {
            'id': 65184,
            'issue': 'Applicazioni installate',
            'email': 'Gi***il44@gmail.com',
            'country_mcc': '222',
            'mnc': '00',
            'description': 'Non mi fa aprire playstore e altre applicazioni mi dice bloccate in modo anomalo',
            'create_time': '2018\/11\/28 07:51:48',
            'imei': '35412*****43762'
        },
        {
            'id': 65183,
            'issue': 'Inny problem',
            'email': 'Pl***@wp.pl',
            'country_mcc': '260',
            'mnc': '00',
            'description': 'Telefon się zawiesza,po odinstalowaniu np: Facebooka telefon w ogóle nie reaguje.Potrzebne jest ponowne uruchomienie telefonu.',
            'create_time': '2018\/11\/28 07:35:43',
            'imei': '35736*****60391'
        },
        {
            'id': 65182,
            'issue': 'مشكلات أخرى',
            'email': 'sa***2345soso256@gmail.com',
            'country_mcc': '602',
            'mnc': '00',
            'description': 'قبل يومين اصبح الجهاز يبقى ساعات ولا يشحن وبطيئ جدا وقمت بتبديل الشاحن والامر لا يجدي نفعا اتمنى ان تجدون حل مشكلة في اسرع وقت ارجوكم?',
            'create_time': '2018\/11\/28 07:06:29',
            'imei': '35680*****39077'
        },
        {
            'id': 65180,
            'issue': 'Другие проблемы',
            'email': 'za***list.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'как установить root права?',
            'create_time': '2018\/11\/28 06:33:34',
            'imei': '35706*****94668'
        },
        {
            'id': 65179,
            'issue': 'Случайная перезагрузка',
            'email': 'va***ij19765@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'вызов обанента ошибка включается перезагрузка',
            'create_time': '2018\/11\/28 06:25:06',
            'imei': '35736*****74577'
        },
        {
            'id': 65178,
            'issue': 'Случайная перезагрузка',
            'email': 'va***ij19765@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'вызов обанента ошибка включается перезагрузка',
            'create_time': '2018\/11\/28 06:21:18',
            'imei': '35736*****74577'
        },
        {
            'id': 65177,
            'issue': 'Connectivité',
            'email': 'Ch***allessart@gmail.com',
            'country_mcc': '208',
            'mnc': '00',
            'description': "Bonjour. Je voudrais savoir comment puis-je faire pour bloquer les publicités avant de pouvoir utiliser son smartphone. Je vous en remercie d'avance. Voici mon mail Chantallessart@gmail.comTel 0611955900.Merci d'avance.",
            'create_time': '2018\/11\/28 05:31:35',
            'imei': '35498*****88307'
        },
        {
            'id': 65176,
            'issue': 'Εγκατεστημένες εφαρμογές',
            'email': 'ka***rene@windowslive.com',
            'country_mcc': '202',
            'mnc': '00',
            'description': 'Καλή μέρα σας έχασα όλες τις επαφές μου πως μπορώ να τις επαναφέρω',
            'create_time': '2018\/11\/28 05:29:29',
            'imei': '35445*****44540'
        },
        {
            'id': 65175,
            'issue': 'Другие проблемы',
            'email': '79***406426@ya.ru',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'Проблема с установкой новой версии ПО',
            'create_time': '2018\/11\/28 05:22:40',
            'imei': '35847*****09583'
        },
        {
            'id': 65174,
            'issue': 'Другие проблемы',
            'email': 'an***tina337@gmail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'иногда не работае сенсер, приходится перезагружать устройство зажав клавиши',
            'create_time': '2018\/11\/28 04:56:49',
            'imei': '35445*****60150'
        },
        {
            'id': 65173,
            'issue': 'Andere Probleme',
            'email': 'at***ahroco@mail.com',
            'country_mcc': '262',
            'mnc': '00',
            'description': 'mein alcatel A5 Bleibet immer wider hängen. bitte um Hilfe',
            'create_time': '2018\/11\/28 04:01:07',
            'imei': '35412*****04629'
        },
        {
            'id': 65171,
            'issue': 'Outros problemas',
            'email': 'de***spimenta29@gmail.com',
            'country_mcc': '724',
            'mnc': '00',
            'description': 'minha tela e muito sensivel,como posso fazer pra ela ser menos sensivel???',
            'create_time': '2018\/11\/28 03:42:33',
            'imei': '35768*****77762'
        },
        {
            'id': 65170,
            'issue': 'Камера',
            'email': 'vo***v@mail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'всё в пикселях',
            'create_time': '2018\/11\/28 03:16:04',
            'imei': '35444*****30462'
        },
        {
            'id': 65169,
            'issue': 'Камера',
            'email': 'vo***v@mail.com',
            'country_mcc': '250',
            'mnc': '00',
            'description': 'всё в пикселях',
            'create_time': '2018\/11\/28 03:15:12',
            'imei': '35444*****30462'
        }
    ]
};

actions.loadList = (pageNo, pageSize) => (dispatch, getState) => {
    dispatch({ type: 'CARE_PROBLEM_REPORT_LOADING', loading: true });
    const state = getState()['care_problem_report'];
    const page = state.page;
    const params = state.searchParams;
    let list = [];
    for (let i = 0; i < 10; i++) {
        list.push(mockData.RECORDS[Math.floor((Math.random() * 30))]);
    }
    return ajax.get('/care_problem_report', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }).then((data) => {
        dispatch({ type: 'CARE_PROBLEM_REPORT_LOADING', loading: false });
        dispatch({
            type: 'CARE_PROBLEM_REPORT_LOAD',
            pageNo: pageNo || data.pageNo,
            pageSize: data.pageSize,
            dataCount: data.totalCount,
            list: list
        });
    });
};

export default actions;
