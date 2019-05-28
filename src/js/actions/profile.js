import {get,post} from 'utils/fetch';
let action = {};

/**
 * 更新基本信息
 * @param data
 * @returns {Function}
 */
action.update = data => dispatch => post('/profile/update', data);

/**
 * 更新密码
 * @param data
 * @returns {Function}
 */
action.updatePassword = data => dispatch => post('/profile/update-password', data);

export default action;
