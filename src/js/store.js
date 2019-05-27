import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import RootReducer from './reducers';
import action from 'actions/app';
const logger = createLogger();

const store = createStore(RootReducer, applyMiddleware(thunk,logger));

export function getUserInfo () {
    return store.getState().app.userInfo;
}

if (window.history && window.history.pushState) {
    $(window).on('popstate', function () {
        //点击浏览器回退就返回home页面，暂时不做其他路由
        store.dispatch(action.loadTabPage('home'));
        window.history.pushState('forward', null, '');
        window.history.forward(1);
    });
}
window.history.pushState('forward', null, ''); //在IE中必须得有这两行
window.history.forward(1);

export default store;
