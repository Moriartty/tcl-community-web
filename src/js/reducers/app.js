/**
 * Created by user on 18-10-22.
 */
import { objectAppend } from 'utils';

/**
 * 每个容器组件对应一个reducer
 * 这里可以唯一知道新旧状态的地方
 */
const defaultState = {
    locale: 'en-US',
    loadType:'browser',//网页打开方式，是在浏览器还是在webview中打开
    panes: [],
    activeTab: '',
    dateInfo: {},
    userInfo: {},
    entryMenuData: [],
    sidebarMenuData: [],
    menuData: null,
    menuObj: {},
    hasNoticeModule: false,
    unreadCount: 0, // 未读通知数
    showNotification: false, // 控制notification显示
    notification: {// 控制notification内容
        type: '',
        msg: '',
        desc: '',
        duration: 2
    },
    isLogin:true
};

export default (state, action) => {
    let newState = {};
    switch (action.type) {
        case 'APP_TOGGLE_LOCALE':
            newState.locale = action.locale;
            break;
        case 'APP_CHANGE_LOADTYPE':
            newState.loadType = action.loadType;
            break;
        case 'APP_SET_MENU':
            newState.menuData = action.data;
            newState.menuObj = action.obj;
            break;
        case 'APP_SET_SIDEBAR_MENU':
            newState.sidebarMenuData = action.data;
            break;
        case 'APP_ENTRY_MENU_LOAD':
            newState.entryMenuData = action.data;
            if (state.activeTab === 'home') {
                newState.sidebarMenuData = action.data;
            }
            break;
        case 'APP_ENTRY_MENU_SET':
            newState.sidebarMenuData = state.entryMenuData;
            break;
        case 'APP_TAB_SWITCH':
            newState.activeTab = action.key;
            break;
        case 'APP_TAB_CHANGE':
            newState.activeTab = action.key;
            newState.panes = action.panes;
            break;
        case 'APP_SET_USER_INFO':
            newState.userInfo = action.info;
            // 头像加上时间戮，避免图片缓存
            newState.userInfo.avatar += `?v=${new Date().getTime()}`;
            break;
        case 'APP_UNREAD_COUNT':
            newState.unreadCount = action.count;
            break;
        case 'APP_LOGOUT':
            newState.userInfo = {};
            break;
        case 'APP_DATE_INFO':
            newState.dateInfo = action.info;
            break;
        case 'APP_SHOW_NOTIFICATION':
            // console.log('action',action);
            state.notification.desc = '';
            newState.showNotification = action.obj.show;
            newState.notification = {
                type: action.obj.type ? action.obj.type : state.notification.type,
                msg: action.obj.msg ? action.obj.msg : state.notification.msg,
                desc: action.obj.desc ? action.obj.desc : state.notification.desc,
                duration: action.obj.duration ? action.obj.duration : state.notification.duration
            };
            break;
        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};
