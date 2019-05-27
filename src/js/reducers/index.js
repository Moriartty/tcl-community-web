/**
 * 每个模块对应一个reducer
 */
import { combineReducers } from 'redux';
import app from './app';
import role from './role';
import menu from './menu';
import user from './user';
import logView from './logView';
import autoTask from './autoTask';
import home from './home';
import ub_analysis from './ub_analysis';
import care_problem_report from './care_problem_report';
import care_electron_card from './care_electron_card';
import care_suggestion from './care_suggestion';
import care_survey_online from './care_survey_online';
import ogc from './ogc';

export default combineReducers({
    app,
    role,
    menu,
    user,
    logView,
    autoTask,
    home,
    ub_analysis,
    care_problem_report,
    care_electron_card,
    care_suggestion,
    care_survey_online,
    ogc
});
