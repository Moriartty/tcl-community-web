const proBaseUrl = 'http://63.33.199.83:8066',
    devBaseUrl = 'http://63.33.199.83:8066';
export default (function () {
    var config = {};
    switch(process.env.NODE_ENV){
        case 'production':
            config.baseUrl = proBaseUrl ;
            // config.baseUrl = 'http://18.222.66.96/big-data' ;
            break;
        case 'development':
            // config.baseUrl = 'http://' + location.host;
            config.baseUrl = devBaseUrl ;
            break;
        default:
            config.baseUrl = 'http://' + location.host + '/' + process.env.NODE_ENV.split('_')[1];
    }

    return config;
})();

const resourceBaseUrl = 'http://18.222.66.96'

const apiTest = [
    '/getAllData',
    '/postPerfData',
    '/report/com.tct.camera/getAppPMActiveInfo',
    '/report/retention',
    '/report/hotevent',
    '/report/com.tct.camera/appUserActiveInfo',
    '/report/getAppDistribution',
    '/report/getDeviceNumber',
    '/report/getAndroidVersion',
    '/report/com.tclhz.gallery/getAppVersionList',
    '/report/device-report/getDeviceActiveOfDay',
    '/report/userEngagement',
    '/report/index/getPainSpotList',
    '/report/getAppList',
    '/report/getActivityCount',
];

export {apiTest,resourceBaseUrl,proBaseUrl,devBaseUrl}
