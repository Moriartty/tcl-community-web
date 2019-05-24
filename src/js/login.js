/**
 * Created by user on 18-10-20.
 */
import { Provider, connect } from 'react-redux';

// import { LocaleProvider } from 'antd';
// // 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import en_US from 'antd/lib/locale-provider/en_US';

// react 国际化
import zhCN from 'config/language/zhCN';
import enUS from 'config/language/enUS';
import { IntlProvider, addLocaleData } from 'react-intl';
import intl from 'intl';
import zh from 'react-intl/locale-data/zh';
// react-intl语言包
import en from 'react-intl/locale-data/en';
// 需要放入本地数据库

import store from 'appStore';
import App from 'components/App';

// 加载全局样式
import 'less/app.less';
import 'utils/polyfill';
const ReactDOM = require('react-dom');// react-intl语言包
addLocaleData([...en, ...zh]);
// SVG字体
// import 'utils/iconfont';

const Login = require('pages/Login');

function chooseLocale (lang) {
    switch (lang.split('-')[0]) {
    case 'en':
        return enUS;
    case 'zh':
        return zhCN;
    default:
        return zhCN;
    }
}

/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误详细信息
 */
// window.onerror = function (msg, url, row, col, error) {
//    console.error('onerror 错误信息 ↙');
//    console.log({
//        msg,  url,  row, col, error
//    });
// };

class Root extends React.Component {
    render () {
        const lang = this.props.locale;
        return (
            <IntlProvider key={lang} locale={lang} messages={chooseLocale(lang)}>
                <Provider store={this.props.store}>
                    <App>
                        <Login/>
                    </App>
                </Provider>
            </IntlProvider>
        );
    }
}
Root = connect(state => {
    const { locale } = state.app;
    return { locale };
}, null)(Root);

ReactDOM.render(
    <Root store={store}/>
    ,
    document.getElementById('container')
);
