import { connect } from 'react-redux';
import action from 'actions/role';
import { Button, Popconfirm, Icon } from 'antd';
import EditModal from './EditModal';
import RoleList from './RoleList';
import RoleMenu from './RoleMenu';
import { FormattedMessage } from 'react-intl';

import 'less/role';

class Role extends React.Component {
    componentWillMount () {
        this.props.init();
    }

    componentWillUnmount () {
        this.props.onLeave();
    }

    render () {
        const { operations, roleInfo: role, onAdd, onEdit, onDelete } = this.props;
        return (
            <div className="page-component">
                <EditModal/>
                <div className="role-left">
                    {
                        operations.indexOf('CREATE') >= 0 && (
                            <div className="text-center">
                                <Button onClick={onAdd} type="primary" icon="plus"><FormattedMessage id={'role_operation_add'}/></Button>
                            </div>
                        )
                    }
                    <RoleList/>
                </div>
                {
                    role.id ? (
                        <div className="role-right">
                            <div className="header">
                                <div className="desc"><span className="am-badge">角色描述</span>：{role.desc}</div>
                                {
                                    !['系统管理员'].include(role.name) && (
                                        <div className="actions">
                                            {
                                                operations.indexOf('UPDATE') >= 0 && <Button ghost size="small" shape="circle" onClick={onEdit.bind(this, role)} icon="edit" type="primary" className="margin-right-sm"/>
                                            }
                                            {
                                                operations.indexOf('DELETE') >= 0 && (
                                                    <Popconfirm placement="left" title="确定删除该角色？" onConfirm={onDelete.bind(this, role.id)}>
                                                        <Button ghost size="small" shape="circle" icon="delete" type="danger"/>
                                                    </Popconfirm>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                            <RoleMenu/>
                        </div>
                    ) : (
                        <div className="role-right">
                            <h1 className="text-center" style={{ lineHeight: 10 }}>
                                <Icon type="arrow-left"/> <FormattedMessage id={'systemConfig_role_msg1'}/>
                            </h1>
                        </div>
                    )
                }
            </div>
        );
    }
}

Role = connect(state => {
    const operations = state.app.menuObj['systemConfig/role'].functions;
    const { roleInfo } = state.role;
    return { operations, roleInfo };
}, dispatch => ({
    init () {
        dispatch(action.loadList());
        dispatch(action.loadMenuTree());
    },
    onLeave () {
        dispatch({ type: 'ROLE_PAGE_LEAVE' });
    },
    /**
     * 添加角色
     */
    onAdd () {
        dispatch({ type: 'ROLE_ADD' });
    },
    /**
     * 修改角色
     * @param item
     */
    onEdit (item) {
        dispatch({ type: 'ROLE_EDIT', data: item });
    },
    /**
     * 删除角色
     * @param id
     */
    onDelete (id) {
        dispatch(action.deleteRole(id));
    }
}))(Role);

module.exports = Role;
