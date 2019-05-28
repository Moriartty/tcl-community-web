
import {get,post} from 'utils/fetch';
import menuConfig from 'config/menu';
let action = {};

/**
 * 加载角色列表
 * @returns {Function}
 */
action.loadList = () => dispatch => get('/role').then(list => {
    dispatch({ type: 'ROLE_LIST', list: list });
});

/**
 * 加载菜单树状结构数据
 * @returns {Function}
 */
function loadMenuTree () {
    return dispatch => {
        return get('/menu').then(data => {
            let treeData = [
                { id: '0', name: 'menuName_permission', icon: 'am-icon-home', list: data }
            ];
            // 递归添加<tr>
            const recursive = function (item) {
                // id统一转化为字符串
                item.id = String(item.id);
                // 手动添加操作权限
                if (item.module && menuConfig[item.module].operations) { // 过滤出菜单
                    item.list = menuConfig[item.module].operations.map(o => {
                        return { id: item.id + '_' + o.key, name: o.name, type: 'OPT' };
                    });
                }

                if (item.list && item.list.length) {
                    item.list.forEach(function (o, i, list) {
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
                o.indents = []; // 体现菜单关系的缩进符
                o.level = 0; // 菜单深度级别，从0级开始
                o.last = i === list.length - 1; // 是否为当前级别的最后一个
                recursive(o);
            });

            dispatch({ type: 'ROLE_MENU_TREE', data: treeData });
        });
    };
}
action.loadMenuTree = loadMenuTree;

/**
 * 选择角色
 * @param role
 * @returns {Function}
 */
function selectRole (role) {
    return dispatch => {
        dispatch({ type: 'ROLE_SELECT', role: role });
        return get('/role/auth', {
            id: role.id
        }).then(data => {
            let roleAuth = [];
            // 只要有一个勾上，则顶级节点（非实际菜单）也得勾上
            if (data.length) {
                roleAuth.push('0');

                data.forEach(o => {
                    roleAuth.push(String(o.menuId));

                    // 操作类型
                    if (o.functions) {
                        roleAuth = roleAuth.concat(o.functions.map(func => `${o.menuId}_${func}`));
                    }
                });
            }
            dispatch({ type: 'ROLE_MENU_LOADED', roleAuth });
        });
    };
}
action.selectRole = selectRole;

/**
 * 更新角色菜单权限
 * @param roleId
 * @param data
 * @returns {Function}
 */
function updateRoleMenu (roleId, data) {
    return dispatch => {
        return post('/role/auth-update', {
            id: roleId,
            data: JSON.stringify(data)
        });
    };
}
action.updateRoleMenu = updateRoleMenu;

/**
 * 添加角色
 * @param data
 * @returns {Function}
 */
function addRole (data) {
    return dispatch => {
        return post('/role/create', {
            name: data.name,
            desc: data.desc
        });
    };
}
action.addRole = addRole;

/**
 * 更新角色
 * @param data
 * @returns {Function}
 */
function updateRole (data) {
    return dispatch => {
        return post('/role/update', {
            id: data.id,
            name: data.name,
            desc: data.desc
        });
    };
}
action.updateRole = updateRole;

/**
 * 删除角色
 * @param id
 * @returns {Function}
 */
function deleteRole (id) {
    return dispatch => {
        return post('/role/delete', {
            id: id
        }).then(() => {
            // 取消当前选择的角色
            dispatch({ type: 'ROLE_SELECT', role: {} });

            // 重新加载角色列表
            dispatch(action.loadList());
        });
    };
}
action.deleteRole = deleteRole;

export default action;
