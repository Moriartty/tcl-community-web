/**
 * 每个模块对应一个reducer
 */
import { combineReducers } from 'redux';
import app from './app';
import role from './role';
import menu from './menu';
import user from './user';
import autoTask from './autoTask';
import home from './home';
import ogc from './ogc';

export default combineReducers({
    app,
    role,
    menu,
    user,
    autoTask,
    home,
    ogc
});
