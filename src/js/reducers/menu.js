import { objectAppend } from 'utils';
/**
 * 每个容器组件对应一个reducer
 * 这里可以唯一知道新旧状态的地方
 */
const defaultState = {
    loading: false,
    list: [],
    editShow: false,
    editData: {}
};

export default (state, action) => {
    let newState = {};
    switch (action.type) {
    case 'MENU_LOADING':
        newState.loading = action.loading;
        break;
    case 'MENU_LIST':
        newState.list = action.list;
        break;
    case 'MENU_ADD':
        newState.editShow = true;
        newState.editData = {
            parentId: action.parentId,
            type: 1, // 1菜单，2目录
            module: '',
            name: '',
            display: 1
        };
        break;
    case 'MENU_EDIT':
        newState.editShow = true;
        const { id, module, name, display, parentId } = action.data;
        newState.editData = {
            parentId,
            type: module ? 1 : 2, // 1菜单，2目录
            id,
            module,
            name,
            display
        };
        break;
    case 'MENU_EDIT_CLOSE':
        newState.editShow = false;
        break;
    case 'MENU_PAGE_LEAVE':
        return defaultState;
    default:return state || defaultState;
    }
    return objectAppend(newState, state);
};
