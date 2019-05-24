import ajax from 'utils/ajax';
import moment from 'moment';

let PerformanceX = (WrappedComponent) => {
    window.logInfo = {};
    var timing = window.performance.timing;
    /*Http连接完成时间*/
    window.logInfo.httpConnectTime = timing.connectEnd - timing.connectStart;
    /*域名解析时间*/
    window.logInfo.domainLookupTime = timing.domainLookupEnd - timing.domainLookupStart;
    /*Request请求耗时*/
    window.logInfo.requestTime = timing.responseEnd - timing.requestStart;

    window.logInfo.openTime = performance.timing.navigationStart;
    /*白屏时间*/
    window.logInfo.whiteScreenTime = timing.responseStart - window.logInfo.openTime;
    /*总下载时间*/
    window.logInfo.allloadTime = +new Date() - window.logInfo.openTime;
    window.logInfo.nowTime = moment().format('YYYY-MM-DD HH:MM:SS');
    document.addEventListener('DOMContentLoaded', function (event) {
        /*用户可操作时间*/
        window.logInfo.readyTime = +new Date() - window.logInfo.openTime;
    });

    window.onload = function(){
        /*首屏时间*/
        window.logInfo.firstScreenTime = +new Date() - timing.domLoading;
        var req = {
            httpConnectTime: '',
            domainLookupTime: '',
            requestTime: '',
            whiteScreenTime: '',
            firstScreenTime: '',
            readyTime: '',
            allloadTime: '',
            mobile: '',
            nowTime: '',
        };
        var logStr = '';
        for (var i in req) {
            if (i === 'mobile') {
                req[i] = IsPC();
            } else {
                console.warn(req[i] + ':' + window.logInfo[i] + 'ms');
            }
            req[i] = window.logInfo[i];
        }
        // ajax.post('/postPerfData',req,'http://45.77.34.111:1400').then(info => {
        //     console.log(info);
        // })
    }

    return WrappedComponent;
};
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

export default PerformanceX;
