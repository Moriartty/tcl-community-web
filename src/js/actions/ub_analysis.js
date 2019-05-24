import ajax from 'utils/ajax';

let actions = {};

const mockData = {
    'RECORDS': [
        {
            'execute_date': '2018-09-18',
            'android_id': '732cb*****d44807',
            'cu': '9008J-PFALBR3',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'AUTOMATIC'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'd4e4c*****04c21c',
            'cu': '5044D-2AALRU1',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'MANUAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '732bc*****cb531e',
            'cu': '4047A-2CTGMX3',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'MANUAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '7ad44*****d77c03',
            'cu': '6055B-2CRGDO7-5',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'MANUAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '4563f*****b77d9d',
            'cu': '9008J-PAALBR3',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'MANUAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'db35f*****300fb5',
            'cu': '5026D-2DOFUS1',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'MANUAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '28bb5*****84f698',
            'cu': '4047F-2EALWE1',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'AUTOMATIC'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'c8cc1*****58419',
            'cu': '5051D-2BALE11',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'AUTOMATIC'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'bc801*****700a84',
            'cu': '5080X-2HALRU7',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'AUTOMATIC'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '7f6be*****88d54c',
            'cu': '5010E-2AALBD1',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'MANUAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '85bf7*****e8959f',
            'cu': '5045T-2CCYMY1',
            'key': 'SETTINGS_SCREEN_BRIGHTNESS_MODE',
            'value': 'MANUAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '34eb0*****12f452',
            'cu': '5099A-2BRGDO1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"1873.50 MB","used":"10.81 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '4e6ab*****2d4155',
            'cu': '5010D-2AALWE1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"1883.78 MB","used":"510.22 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'ff5c2*****f3e09b',
            'cu': '4047D-2CALRU1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"3770.12 MB","used":"991.55 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'b0613*****91e442',
            'cu': '5034D-2BALE17',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"7736.00 MB","used":"19.97 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '474f1*****768600',
            'cu': '5099D-2CALWE2',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"29652.00 MB","used":"504.84 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'bad52*****2add0c',
            'cu': '4047G-2DTGMX1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"1863.23 MB","used":"1253.93 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '36082*****fe5982',
            'cu': '4047X-2ATMPT1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"14764.00 MB","used":"390.78 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '4c306*****417bb6',
            'cu': '5010U-2GALAP1-1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"3693.97 MB","used":"3084.64 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'e39d3*****fe08b8',
            'cu': '9008J-PAALBR3',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"1875.69 MB","used":"1249.59 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '57091*****33aad7',
            'cu': '4047X-2AALGB1-1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"15095.00 MB","used":"1.78 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'ef5c9*****546808',
            'cu': '4047A-2CUFMX1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"3621.14 MB","used":"773.60 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '29c40*****04eec0',
            'cu': '5045D-2BALWE1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"7567.66 MB","used":"5940.84 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '516b2*****d20983',
            'cu': '5011A-2CTGMX1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"7577.13 MB","used":"1308.22 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'eac51*****35dd2f',
            'cu': '9008X-2ATWIE1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"29941.49 MB","used":"8870.20 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '5186f*****0a3857',
            'cu': '5045T-2CCYMY1',
            'key': 'SETTINGS_SDCARD_INFO',
            'value': '{"total":"7959.03 MB","used":"35.62 MB"}'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '96c04*****468d84',
            'cu': '5011A-2A6CMX1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_NOT_INSERT'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '93fcd*****869da1',
            'cu': '9008A-2ATLCR1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_NOT_INSERT'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'edf9b*****a6ca00',
            'cu': '5026A-2BTLMX1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_IS_EXTERNAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'bc18b*****e55759',
            'cu': '6045Y-2BALRU7',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_NOT_INSERT'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '218f3*****805a51',
            'cu': '9008A-KATLAR1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_IS_EXTERNAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'ccbe2*****a8b2cf',
            'cu': '5011A-2CTGMX1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_IS_EXTERNAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'cdfe7*****864872',
            'cu': '5011A-2CUFMX1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_NOT_INSERT'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '102ee*****936d34',
            'cu': '5045T-2KCYMY1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_IS_EXTERNAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'e978c*****a08029',
            'cu': '9008A-2ATLCL1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_NOT_INSERT'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '44c0f*****3adc7f',
            'cu': '4047X-2ARGES1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_IS_EXTERNAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '3b953*****982e7',
            'cu': '5010D-2BALWE1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_NOT_INSERT'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '2649d*****2727e4',
            'cu': '4047G-2DTGMX1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_NOT_INSERT'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '49f78*****3caeb3',
            'cu': '4047A-2BTGMX1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_NOT_INSERT'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '68b83*****b6d757',
            'cu': '5011A-2CUFMX1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_IS_INTERNAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'eb53d*****4b5c52',
            'cu': '5011A-2BTGMX1',
            'key': 'SETTINGS_SD_STATUS',
            'value': 'SD_IS_EXTERNAL'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '3818b*****bd4062',
            'cu': '5011A-2ATGMX1',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '2d591*****40706d',
            'cu': '4047D-2AALE11-2',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '90b2c*****37cb83',
            'cu': '5044D-2AALRU1',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '781ec*****8283ae',
            'cu': '5011A-2CTGMX1',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '4d101*****585468',
            'cu': '9008J-PAALBR3',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '335ee*****60c72a',
            'cu': '4047D-2AALFR5-P',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '2d5fc*****736bb9',
            'cu': '5010D-2AALWE1',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '2c384*****9b7cfc',
            'cu': '5045J-PEALBR1-1',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'eb488*****85afaa',
            'cu': '5045T-2KALIN2',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '8a079*****aea328',
            'cu': '6045Y-2AALWE7',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '60aae*****9cc856',
            'cu': '5086A-2BAVCO7',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '66339*****65a917',
            'cu': '5086D-2AALWE7',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '2e60f*****ce42f0',
            'cu': '5051X-2AALIB1',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '78a0f*****c5acdc',
            'cu': '5080X-2GALWE7',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '88350*****946483',
            'cu': '5047U-2CALE11-1',
            'key': 'SETTINGS_UNKNOWN_SOURCES_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'b328b*****e2e8c',
            'cu': '5080X-2HALRU7',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'd6720*****b7ed3',
            'cu': '5045X-2CALND1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '8b05a*****850baf',
            'cu': '5046Y-2CRGES1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '37c22*****f3b571',
            'cu': '4047G-2DTGMX1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '40130*****2bac2e',
            'cu': '9008X-2A6BPE1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '66c1b*****a24b0d',
            'cu': '4047A-2BTGMX1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '17cf8*****742347',
            'cu': '4047G-2ARGDO1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '313c8*****10c2d3',
            'cu': '6055K-2CALPK7-1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '234e2*****5ef45f',
            'cu': '4047X-2AALGB1-1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '7e5a2*****60c8ca',
            'cu': '5010U-2OALDZ1-1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '97d97*****ec2293',
            'cu': '9026T-2EFKIN1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'dc521*****bcce22',
            'cu': '5056D-2GALAE1-1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'd9752*****e0bb0e',
            'cu': '9008J-2AOFUS1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '4d5a1*****661a95',
            'cu': '4047D-2AALRU1',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'b390e*****e7299a',
            'cu': '5046Y-2CPMPT3',
            'key': 'SETTINGS_VIBRATE_SOUNDS_ENABLED',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '74ef2*****608a8e',
            'cu': '6055D-2AALJP7-5',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '13'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '71846*****d67bf1',
            'cu': '4047A-2C6CMX1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '18'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '6313b*****1dee15',
            'cu': '4047G-2E6CMX1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '31'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '18b64*****183e69',
            'cu': '4047A-2BUFMX1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '4'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'd59bf*****3e093e',
            'cu': '4047A-2BTGMX3',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '17'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '911d5*****93f5ac',
            'cu': '4047D-2CALRU1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '1'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'ba437*****77172f',
            'cu': '5044D-2AALAV1-1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '8'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'e3ccd*****46079e',
            'cu': '8050G-2HTGMXN',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '0'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '40abe*****b68529',
            'cu': '6055P-2ATBMK7',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '2'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '540ca*****facb25',
            'cu': '5045D-2CALXA1-3',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '11'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '36d26*****f4f281',
            'cu': '4034F-2GOGTN1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '5'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '966cb*****560a1b',
            'cu': '5026A-2ATGMX1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '23'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'df33f*****73ae60',
            'cu': '5011A-2ATGMX1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '6'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '67829*****b41fcd',
            'cu': '4047G-2FTGMX1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '26'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'b04fd*****ea06a6',
            'cu': '6055K-2BALAE7-1',
            'key': 'SETTINGS_VIDEO_NUMBER',
            'value': '52'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'f29e8*****4e85f3',
            'cu': '9008A-KAOFAR1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '9c479*****43b4f7',
            'cu': '5011A-2BTGMX1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '25b70*****078ffa',
            'cu': '4047D-2AALGB1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '83c96*****b4c0bb',
            'cu': '5099D-2AALEU1-0',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'f493b*****3f9411',
            'cu': '5011A-2ATGMX1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '13c01*****74cb61',
            'cu': '5009A-2DTLMX1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '81536*****bb1a5b',
            'cu': '9008A-2FTGMX1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '86e1a*****2e9e93',
            'cu': '4047D-2CALWE1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '8dc62*****8eb0d3',
            'cu': '4047G-2DTGMX1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'c1791*****712841',
            'cu': '5046Y-2CRGES1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'b54fb*****161ffe',
            'cu': '5099A-2CAVCO1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'ae29d*****734fa4',
            'cu': '5011A-2ATLCL1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '8f5bf*****6dcd2a',
            'cu': '9008X-2A6BPE1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'TRUE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'c7cb5*****ad3c2f',
            'cu': '4047X-2AVDMK1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '3131d*****a65a2c',
            'cu': '5009D-2AALWE1',
            'key': 'SETTINGS_WALLPAPER_CHANGE',
            'value': 'FALSE'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '218fa*****c526e4',
            'cu': '5010D-2AALWE1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '0.66 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '20b28*****372c7',
            'cu': '5010D-2BALWE1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '2024.99 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '35b5e*****78d09f',
            'cu': '4047G-2ETGMX1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '0.00 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '6938c*****675fca',
            'cu': '5026A-2DTLMX1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '2875.54 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '1a104*****f4a659',
            'cu': '5010D-2AALWE1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '344.18 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '7b4a7*****4624cb',
            'cu': '5044D-2BALWE1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '0.00 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '649d3*****46f99e',
            'cu': '9008J-PAALBR3',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '0.00 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '1da8e*****6c743e',
            'cu': '8050G-2CTLMX5',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '11.85 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'c5844*****e667ce',
            'cu': '5080X-2DALWE7',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '13475.81 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '1dc90*****cf3a18',
            'cu': '4047A-2BUFMX1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '685.52 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '7035a*****204c7a',
            'cu': '5026A-2DTLMX1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '6414.93 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'bbe82*****7fe2c9',
            'cu': '5047D-2BALWE1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '510.56 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'e1bd4*****c39ae4',
            'cu': '5047D-2AALRU1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '0.00 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '1b1d5*****a2bb79',
            'cu': '5011A-2BTGMX1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '214.42 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '4741d*****58c756',
            'cu': '6055B-PBALBRC-1',
            'key': 'SETTINGS_WIFI_DATA_USAGE',
            'value': '5671.96 MB'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '457e7*****df9bec',
            'cu': '5010D-2BALWE1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '4'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '77750*****abbe02',
            'cu': '5046Y-2CPMPT3',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '2'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '988f8*****7f7cbf',
            'cu': '5044D-2AALRU1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '210'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '7f79f*****e73c4c',
            'cu': '5010D-2BALWE1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '100'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '1e112*****837e41',
            'cu': '5086D-2AALE17',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '147'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '6d1e4*****900bcf',
            'cu': '6070K-2CALRU7',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '992'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '20c5d*****5346e9',
            'cu': '950-2ACHCN1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '3647'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '82fb8*****712923',
            'cu': '5010E-2AALBD1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '25'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '657fb*****6128ab',
            'cu': '5010D-2AALWE1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '333'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '2e91e*****8820ef',
            'cu': '5045D-2DALDZ1-4',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '119'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '830e9*****eb58a',
            'cu': '5085D-2CALWE1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '46'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'ff16e*****6a726b',
            'cu': '6055B-PBOIBRC-5',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '4147'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'a9872*****e0e068',
            'cu': '5045D-2FALRU1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '829'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': 'ab083*****9be623',
            'cu': '5045J-PEALBR1-1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '28'
        },
        {
            'execute_date': '2018-09-18',
            'android_id': '4c687*****6ba8e2',
            'cu': '5010U-2GALDZ1-1',
            'key': 'SIGNAL_STRENGTH_GREAT',
            'value': '42'
        }
    ]
};

actions.loadList = (pageNo, pageSize) => (dispatch, getState) => {
    dispatch({ type: 'UB_ANALYSIS_LOADING', loading: true });
    const state = getState()['ub_analysis'];
    const page = state.page;
    const params = state.searchParams;
    let list = [];
    for (let i = 0; i < 10; i++) {
        list.push(mockData.RECORDS[Math.floor((Math.random() * 30))]);
    }
    return ajax.get('/ub_analysis', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }).then((data) => {
        dispatch({ type: 'UB_ANALYSIS_LOADING', loading: false });
        dispatch({
            type: 'UB_ANALYSIS_LOAD',
            pageNo: pageNo || data.pageNo,
            pageSize: data.pageSize,
            dataCount: data.totalCount,
            list: list
        });
    });
};

export default actions;
