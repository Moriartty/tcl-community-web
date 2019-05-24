window.logInfo = {};
var timing = window.performance.timing;
window.logInfo.httpConnectTime = timing.connectEnd - timing.connectStart;
window.logInfo.domainLookupTime = timing.domainLookupEnd - timing.domainLookupStart;
window.logInfo.requestTime = timing.responseEnd - timing.requestStart;
window.logInfo.openTime = performance.timing.navigationStart;
window.logInfo.whiteScreenTime = +new Date() - window.logInfo.openTime;
window.logInfo.firstScreenTime = timing.loadEventEnd - timing.domLoading;
document.addEventListener('DOMContentLoaded',function (event) {
    window.logInfo.readyTime = +new Date() - window.logInfo.openTime;
});
window.logInfo.allloadTime = +new Date() - window.logInfo.openTime;
window.logInfo.nowTime = new Date().getTime();
var timname = {
    httpConnectTime:'Http连接完成时间',
    domainLookupTime:'域名解析时间',
    requestTime:'Request请求耗时',
    whiteScreenTime: '白屏时间',
    firstScreenTime:'首屏时间',
    readyTime: '用户可操作时间',
    allloadTime: '总下载时间',
    // mobile: '使用设备',
    // nowTime: '时间',
};
var logStr = '';
for (var i in timname) {
    console.warn(timname[i] + ':' + window.logInfo[i] + 'ms');
    if (i === 'mobile') {
        logStr += '&' + i + '=' + window.logInfo[i];
    } else {
        logStr += '&' + i + '=' + window.logInfo[i];
    }

}