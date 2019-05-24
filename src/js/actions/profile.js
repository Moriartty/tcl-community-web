import ajax from 'utils/ajax';
let action = {};

/**
 * 更新基本信息
 * @param data
 * @returns {Function}
 */
action.update = data => dispatch => ajax.post('/profile/update', data);

/**
 * 更新密码
 * @param data
 * @returns {Function}
 */
action.updatePassword = data => dispatch => ajax.post('/profile/update-password', data);

export default action;
