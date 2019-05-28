import API,{apiTest} from 'config/api';
import { message } from 'antd';
const ReactDOM = require('react-dom');
const Err50x = (cb) => { require.ensure([], require => { cb(require('pages/Error/50x')); }); };


const normalHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    credentials: 'include'
});
const formHeaders = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
});



var oldFetchfn = fetch; //拦截原始的fetch方法
window.fetch = function(url, fetchOpts,opts={timeout:1000*20}){//定义新的fetch方法，封装原有的fetch方法
    var fetchPromise = oldFetchfn(url, fetchOpts);
    var timeoutPromise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            reject(new Error("fetch timeout"))
        }, opts.timeout)
    });
    return Promise.race([fetchPromise, timeoutPromise])
}

function getUriParams(data){
    var params = [];
    for(let i in data){
        params.push(i+'='+data[i]);
    }
    return encodeURIComponent(params.join('&'));
}
function get (url,params,opts) {
    // 虚拟接口服务
    require('../mock')(url);
    //非模拟接口并且有参数才拼接参数
    if(apiTest.indexOf(url)>-1&&params&&JSON.stringify(params)!=='{}')
        url = url+'?'+getUriParams(params);

    return fetch(API.baseUrl+url, {
        method: 'GET',
        headers: normalHeaders,
    },opts).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}

function post (url, params,opts) {
    return fetch(API.baseUrl+url, {
        method: 'POST',
        headers: formHeaders,
        body: getUriParams(params),
    },opts).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}
function postFile (url, params,opts) {
    return fetch(API.baseUrl+url, {
        method: 'POST',
        // headers: new Headers({
        //     'Content-Type': 'multipart/form-data'
        // }),
        body: params,
        credentials: 'include'
    },opts).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}

function put (url, params,opts) {
    return fetch(API.baseUrl+url, {
        method: 'PUT',
        // headers: normalHeaders,
        body: params,
    },opts).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}

function handleResponse (url, response) {
    if(response.ok||response.status==301||response.status==302)
        return new Promise((resolve,reject)=>{
            response.json().then(resp=>resolve(resp.data));
        });
    else if(~[502, 503, 504].indexOf(response.status)){
        Err50x(component => {
            ReactDOM.render(React.createElement(component), document.getElementById('container'));
        });
    }
    else {
        console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`);
        message.error('【' + status + '】' + statusText);
        return {error: {message: 'Request failed due to server error '}};
    }
}

export {get, post,postFile, put}
