import { connect } from 'react-redux';
import action from 'actions/user';
import { Icon, Popconfirm } from 'antd';

class OrgTree extends React.Component {
    /**
     * 折叠/展开
     * @param e
     */
    collapse (e) {
        e.stopPropagation();
        const $this = $(e.currentTarget);
        const $subList = $this.closest('.node-name').next('ul');
        if ($subList.is(':visible')) {
            $this.html('<i class="anticon anticon-plus-square-o">' +
                '<svg viewBox="64 64 896 896" class="" data-icon="plus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>' +
                '</i>');
            $subList.slideUp('fast');
        } else {
            $this.html('<i class="anticon anticon-minus-square-o">' +
                '<svg viewBox="64 64 896 896" class="" data-icon="minus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>' +
                '</i>');
            $subList.slideDown('fast');
        }
    }

    /**
     * 渲染每行
     * @param item
     * @returns {XML}
     */
    renderItem (item) {
        const list = item.list;
        const { operations, orgSelectedId, onDelete, onSelect, onEdit } = this.props;
        return (
            <li key={item.index}>
                <div onClick={onSelect.bind(this, item.id)} className={'no-select node-name' + (orgSelectedId == item.id ? ' selected' : '')}>
                    {
                        item.indents.map((indent, index) => {
                            return (
                                <span key={index} className="indent">
                                    {
                                        index == (item.indents.length - 1) && list && list.length ? (
                                            <a onClick={this.collapse.bind(this)} className="cursor-pointer collapse">
                                                <Icon type="minus-square-o"/>
                                            </a>
                                        ) : indent
                                    }
                                </span>
                            );
                        })
                    }
                    <span>{item.name}</span>
                    {
                        item.level > 0 && (
                            <div className="actions" onClick={e => { e.stopPropagation(); }}>
                                {
                                    operations.include('UPDATE') && <a href="javascript:;" onClick={onEdit.bind(this, item)}><Icon type="edit"/> </a>
                                }
                                {
                                    operations.include('DELETE') && (
                                        <Popconfirm placement="right" title="确定要删除该组织吗？" onConfirm={onDelete.bind(this, item.id)}>
                                            <a href="javascript:;" className="text-danger margin-left-xs"><Icon type="delete"/> </a>
                                        </Popconfirm>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                {
                    list && list.length > 0 && (
                        <ul className="unstyled">
                            {
                                list.map((o, i) => {
                                    o.index = i;
                                    return this.renderItem(o);
                                })
                            }
                        </ul>
                    )
                }
            </li>
        );
    }

    render () {
        const { userSearchKey, orgData } = this.props;
        return (
            <div className="user-org padding-right-sm">
                <ul className="unstyled">
                    {
                        orgData.map((o, i) => {
                            o.index = i;
                            return this.renderItem(o);
                        })
                    }
                </ul>
                {userSearchKey && <div className="cover"></div>}
            </div>
        );
    }
}

OrgTree = connect(state => {
    const operations = state.app.menuObj['systemConfig/user'].functions;
    const { userSearchKey, orgData, orgSelectedId } = state.user;
    return { operations, userSearchKey, orgData, orgSelectedId };
}, dispatch => ({
    /**
     * 选择组织
     * @param id
     */
    onSelect (id) {
        dispatch(action.selectOrg(id));
    },
    /**
     * 编辑
     * @param item
     */
    onEdit (item) {
        dispatch({ type: 'USER_ORG_EDIT', data: item });
    },
    /**
     * 删除
     * @param id
     */
    onDelete (id) {
        dispatch(action.deleteOrg(id)).then(() => {
            // 重新加载列表
            dispatch(action.loadOrgData());
        });
    }
}))(OrgTree);

export default OrgTree;
