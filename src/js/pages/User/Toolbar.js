import { connect } from 'react-redux';
import action from 'actions/user';
import { Row, Col, Button, Input, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';

class Toolbar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            searchKey: ''
        };
    }

    handleChange = (e) => {
        this.setState({ searchKey: e.target.value });
    };

    handleClear = () => {
        this.setState({ searchKey: '' });
        // this.props.onSearch.call(this, '');
    };

    render () {
        const { operations, orgSelectedId, onOrgAdd, onUserAdd, onSearch } = this.props;
        const searchKey = this.state.searchKey;
        const suffix = searchKey && <Icon key="1" type="close-circle" onClick={this.handleClear} style={{ color: '#ddd', marginRight: 5 }}/>;
        return (
            <Row gutter={16} className="toolbar">
                {
                    operations.include('CREATE') && (
                        <Col span={6}>
                            <Button type="primary" onClick={onOrgAdd} icon="usergroup-add" disabled={orgSelectedId == -1}><FormattedMessage id={'user_operation_addOrg'}/></Button>
                            <Button type="primary" onClick={onUserAdd} icon="user-add" className="margin-left" disabled={orgSelectedId == -1}><FormattedMessage id={'user_operation_addStaff'}/></Button>
                        </Col>
                    )
                }
                <Col span={18}>
                    <Input.Search placeholder="输入姓名或角色搜索员工"
                        value={searchKey}
                        onChange={this.handleChange}
                        onSearch={onSearch.bind(this)}
                        style={{ maxWidth: 500 }}
                        suffix={suffix} enterButton/>
                </Col>
            </Row>
        );
    }
}

Toolbar = connect(state => {
    const operations = state.app.menuObj['systemConfig/user'].functions;
    const { orgSelectedId } = state.user;
    return { operations, orgSelectedId };
}, dispatch => ({
    /**
     * 添加组织
     */
    onOrgAdd () {
        dispatch({ type: 'USER_ORG_ADD' });
    },
    /**
     * 添加用户
     */
    onUserAdd () {
        dispatch({ type: 'USER_ADD' });
    },
    /**
     * 模糊搜索
     * @param value
     */
    onSearch (value) {
        dispatch({ type: 'USER_SEARCH', value: value });
        dispatch(action.loadUserPage(this.props.orgSelectedId, 1));
    }
}))(Toolbar);

export default Toolbar;
