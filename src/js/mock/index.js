import Mock from 'mockjs';
import api from 'config/api';
let FetchMock =  require('fetch-mock');
//匹配不到则走网络
FetchMock.config.fallbackToNetwork = true;
// api.ftpBaseUrl='';

Mock.setup({
    timeout: 500
});

let mockList = [];

mockList = mockList.concat(require('./login'));
mockList = mockList.concat(require('./system'));
mockList = mockList.concat(require('./log'));
mockList = mockList.concat(require('./content'));

let mockData = {};

mockList.forEach((obj) => {
    mockData[obj.url] = obj.result;
    //mockJs无法处理fetch请求，需要fetch-mock,为了过滤参数，使用正则表达式
    FetchMock.mock(api.baseUrl+obj.url,Mock.mock(obj.result));
    // FetchMock.mock(RegExp(api.baseUrl+obj.url),Mock.mock(obj.result));

});

function mockServer (url) {
    if (mockData[url]) {
        Mock.mock(api.baseUrl + url, mockData[url]);
    }
}


module.exports = mockServer;
