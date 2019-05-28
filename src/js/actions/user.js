
import {get,post} from 'utils/fetch';
let action = {};

/**
 * 加载组织数据
 * @returns {Function}
 */
action.loadOrgData = () => dispatch => get('/org/tree').then(data => {
    let listData = []; // 列状
    let treeData = data;
    // 递归计算附加属性
    const recursive = function (item) {
        listData.push(item);
        if (item.list && item.list.length) {
            item.list.forEach(function (o, i, list) {
                o.parentId = item.id;
                o.level = item.level + 1;
                o.last = i === list.length - 1; // 是否为当前级别的最后一个
                o.indents = item.indents.slice(0, -1); // 包含父级菜单的前(n-1)个
                if (o.level > 1) {
                    // 父菜单的第n个不一定跟子菜单同列的那个相同，这里结合图形看更直观
                    o.indents.push(item.last ? '' : '│');
                }
                o.indents.push(o.last ? '└' : '├'); // 该级菜单的最后一个
                recursive(o);
            });
        }
    };
    treeData.forEach(function (o, i, list) {
        o.indents = []; // 体现关系的缩进符
        o.level = 0; // 深度级别，从0级开始
        o.last = i === list.length - 1; // 是否为当前级别的最后一个
        recursive(o);
    });

    dispatch({ type: 'USER_ORG_DATA', data: treeData, listData: listData });

    return treeData;
});

/**
 * 添加组织
 * @param data
 * @returns {Function}
 */
function addOrg (data) {
    return dispatch => {
        return post('/org/create', {
            parentId: data.parentId,
            name: data.name
        });
    };
}
action.addOrg = addOrg;

/**
 * 更新组织
 * @param data
 * @returns {Function}
 */
function updateOrg (data) {
    return dispatch => {
        return post('/org/update', {
            id: data.id,
            parentId: data.parentId,
            name: data.name
        });
    };
}
action.updateOrg = updateOrg;

/**
 * 删除组织
 * @param id
 * @returns {Function}
 */
function deleteOrg (id) {
    return dispatch => {
        return post('/org/delete', {
            id: id
        });
    };
}
action.deleteOrg = deleteOrg;

/**
 * 选择一个组织
 * @param id
 * @returns {Function}
 */
function selectOrg (id) {
    return dispatch => {
        dispatch({ type: 'USER_ORG_SELECT', id: id });
        return dispatch(loadUserPage(id, 1));
    };
}
action.selectOrg = selectOrg;

/**
 * 加载用户分页列表
 * @param orgId
 * @param pageNo
 * @returns {Function}
 */
function loadUserPage (orgId, pageNo = 1) {
    return (dispatch, getState) => {
        dispatch({ type: 'USER_LOADING', loading: true });
        const state = getState().user;
        const params = state.searchParams;
        return get('/user', {
            pageNo: pageNo,
            pageSize: params.pageSize,
            name: state.userSearchKey,
            orgId: orgId || state.orgSelectedId
        }).then(data => {
            dispatch({
                type: 'USER_PAGE_LOAD',
                no: data.pageNo,
                count: data.totalPages,
                dataCount: data.totalCount,
                list: data.result.map(user => {
                    user.role = user.roles.map(role => role.roleCode);
                    // if(user.isPic==1){
                    //     user.role.push('微信管理员');
                    // }
                    user.role = user.role.join(',');
                    // if(!user.org){
                    //     user.org='公司';
                    // }
                    return user;
                })
            });
            dispatch({ type: 'USER_LOADING' });
        });
    };
}
action.loadUserPage = loadUserPage;

/**
 * 加载指定用户信息
 * @param id
 * @returns {Function}
 */
function loadUserInfo (id) {
    return dispatch => {
        return get('/user/info', {
            id: id
        }).then(data => {
            // 组织
            if (!data.org) {
                data.org = '公司';
            }

            // 角色
            let roleNames = [];
            data.roleIds = data.roles.map(o => {
                roleNames.push(o.roleCode);
                return o.id;
            });
            data.role = roleNames.join(',');
            delete data.roles;
            dispatch({ type: 'USER_INFO_LOAD', data: data });
        });
    };
}
action.loadUserInfo = loadUserInfo;

/**
 * 添加用户
 * @param data
 * @returns {Function}
 */
function addUser (data) {
    return dispatch => {
        if (!data.password) {
            data.password = '123456';
        }
        return post('/user/create', data);
    };
}
action.addUser = addUser;

/**
 * 更新用户
 * @param data
 * @returns {Function}
 */
function updateUser (data) {
    return dispatch => {
        return post('/user/update', data);
    };
}
action.updateUser = updateUser;

/**
 * 设为离职
 * @param id
 * @returns {Function}
 */
function dismissUser (id) {
    return dispatch => {
        return post('/user/dismiss', {
            id: id
        });
    };
}
action.dismissUser = dismissUser;

/**
 * 重置密码
 * @param id
 * @returns {Function}
 */
function resetPassword (id) {
    return dispatch => {
        return post('/user/password-reset', {
            id: id,
            password: '123456'
        });
    };
}
action.resetPassword = resetPassword;

export default action;
