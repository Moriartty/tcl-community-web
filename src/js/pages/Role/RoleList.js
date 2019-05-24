import { connect } from 'react-redux';
import action from 'actions/role';
import { Menu, Icon } from 'antd';

class RoleList extends React.Component {
    roleObj={};

    handleClick = (e) => {
        const item = this.roleObj[e.key];
        this.props.onSelected(item);
    };

    render () {
        const list = this.props.roleList;
        return (
            <div>
                {
                    list.length ? (
                        <Menu onClick={this.handleClick}>
                            {
                                list.map((o) => {
                                    this.roleObj[o.id] = o;
                                    return (
                                        <Menu.Item key={o.id}>
                                            <Icon type="solution"/>{o.name}
                                        </Menu.Item>
                                    );
                                })
                            }
                        </Menu>
                    ) : (
                        <p className="text-center">还没有角色！</p>
                    )
                }
            </div>
        );
    }
}

RoleList = connect(state => {
    const { roleList } = state.role;
    return { roleList };
}, dispatch => ({
    /**
     * 选择某个角色
     * @param role
     */
    onSelected (role) {
        dispatch(action.selectRole(role));
    }
}))(RoleList);

export default RoleList;
