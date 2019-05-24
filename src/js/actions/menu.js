import ajax from 'utils/ajax';
let action = {};

/**
 * 获取菜单列表
 * @returns {Function}
 */
function loadList () {
    return (dispatch) => {
        dispatch({ type: 'MENU_LOADING', loading: true });
        return ajax.get('/menu').then(data => {
            let menuList = [];
            let treeData = [
                { name: '(根目录)', list: data }
            ];

            // 递归添加<tr>
            function recursive (item) {
                // 忽略根目录那行functionfunction
                if (item.level > 0) {
                    menuList.push(item);
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
            }

            treeData.forEach((item, i, list) => {
                item.indents = []; // 体现菜单关系的缩进符
                item.level = 0; // 菜单深度级别，从0级开始
                item.last = i === list.length - 1; // 是否为当前级别的最后一个
                recursive(item);
            });

            dispatch({ type: 'MENU_LIST', list: menuList });
            dispatch({ type: 'MENU_LOADING' });
        });
    };
}
action.loadList = loadList;

/**
 * 添加菜单
 * @param data
 * @returns {Function}
 */
action.addMenu = data => dispatch => ajax.post('/menu/create', data);

/**
 * 更新菜单
 * @param data
 * @returns {Function}
 */
action.updateMenu = data => dispatch => ajax.post('/menu/update', data);

/**
 * 删除菜单
 * @param id
 * @returns {Function}
 */
action.deleteMenu = id => dispatch => ajax.post('/menu/delete', { id });

/**
 * 移动菜单
 * @param id
 * @param isUp 是否上移，否则下移
 * @returns {Function}
 */
action.moveMenu = (id, isUp) => dispatch => ajax.post(isUp ? '/menu/up' : '/menu/down', { id });

export default action;
