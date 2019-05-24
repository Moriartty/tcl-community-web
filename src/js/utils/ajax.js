import config from 'config/api';
import $ajax from 'tf-utils/lib/ajax';
import { message } from 'antd';
const ReactDOM = require('react-dom');
const Err50x = (cb) => { require.ensure([], require => { cb(require('pages/Error/50x')); }); };
import {apiTest} from 'config/api';

function ajax (method, url, data = {}, baseUrl, isRaw, isFormData) {
    if (apiTest.indexOf(url) == -1) {
        // 虚拟接口服务
        require('../mock')(url, data);
        data = '';
        method = 'GET';
    }
    // 空字符串字段不传出去
    for (let key in data) {
        if (data[key] === '') {
            delete data[key];
        }
    }
    return new Promise((resolve, reject) => {
        return $ajax({
            type: method,
            url: baseUrl + url,
            data: data,
            dataType: 'json',
            processData: !isFormData,
            contentType: isFormData ? false : undefined
        }).done(json => {
            if (isRaw) {
                resolve(json);
                // eslint-disable-next-line
            } else if (json.code == 0||json.code == 200) {
                resolve(json.data);
            } else {
                // key不匹配
                message.error(json.msg);
                // eslint-disable-next-line
                if (json.code == 1003) {
                    location.href = 'login.html';
                }
                reject(json);
            }
        }).fail(function (status, statusText) {
            reject(status, statusText);

            if (~[502, 503, 504].indexOf(status)) {
                Err50x(component => {
                    ReactDOM.render(React.createElement(component), document.getElementById('container'));
                });
            } else {
                message.error('【' + status + '】' + statusText);
            }
        });
    });
}

function raw (method, url, data,baseUrl) {
    return ajax(method, url, data,baseUrl || config.baseUrl ,true);
}

function get (url, data, baseUrl) {
    return ajax('GET', url, data, baseUrl || config.baseUrl);
}

function post (url, data, baseUrl) {
    return data instanceof FormData ? ajax('POST', url, data, baseUrl || config.baseUrl, false, true)
        : ajax('POST', url, data, baseUrl || config.baseUrl);
}

function formData (url, data) {
    let fd;
    if (typeof data === 'string') {
        fd = new FormData(document.getElementById(data));
    } else if (data instanceof FormData) {
        fd = data;
    } else {
        fd = new FormData();
        for (let key in data) {
            if (data[key] !== undefined) {
                fd.append(key, data[key]);
            }
        }
    }
    return ajax('POST', url, fd, false, true);
}

export default {
    raw,
    get,
    post,
    formData
};
