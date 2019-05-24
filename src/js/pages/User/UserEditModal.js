import { connect } from 'react-redux';
import action from 'actions/user';
import ExModal from 'components/ExModal';
import ExFormItem from 'components/ExFormItem';
import { Form } from 'antd';

const EditForm = Form.create()((props) => {
    const { data, orgList, roleList, form } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            {/*
                data.id>0?(
                    <ExFormItem label="账号"
                                type="static"
                                initialValue={data.loginName}/>
                ):(
                    <ExFormItem label="账号"
                                name="loginName"
                                initialValue={data.loginName}
                                required
                                getFieldDecorator={getFieldDecorator}/>
                )
            */}
            <ExFormItem label="手机号"
                name="phone"
                initialValue={data.phone}
                placeholder="输入11位手机号码"
                required
                getFieldDecorator={getFieldDecorator}/>
            {
                !data.id && (
                    <ExFormItem label="登录密码"
                        name="password"
                        initialValue={data.password}
                        placeholder="不填则默认为：123456"
                        getFieldDecorator={getFieldDecorator}/>
                )
            }
            {/* <ExFormItem label="工号"
                        name="no"
                        initialValue={data.no}
                        required
                        getFieldDecorator={getFieldDecorator}/> */}
            <ExFormItem label="姓名"
                name="name"
                initialValue={data.name}
                required
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem label="角色"
                type="select"
                mode="multiple"
                name="roleIds"
                initialValue={data.roleIds}
                list={roleList}
                placeholder="请选择"
                required
                getFieldDecorator={getFieldDecorator}/>
            {/* <ExFormItem label="微信管理员"
                        type="switch"
                        name="isPic"
                        initialValue={data.isPic==1}
                        onText="是"
                        offText="否"
                        required
                        getFieldDecorator={getFieldDecorator}/> */}
            <ExFormItem label="组织"
                type="select"
                name="orgId"
                initialValue={data.orgId}
                list={orgList.map(o => ({ id: o.id, name: o.indents.join(' ') + ' ' + o.name }))}
                placeholder="请选择"
                required
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem label="邮箱"
                type="email"
                name="email"
                initialValue={data.email}
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type="hidden"
                name="id"
                initialValue={data.id}
                getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class UserEditModal extends React.Component {
    handleSave = () => {
        const form = this.form;
        form.validateFields((err, data) => {
            if (err) {
                return;
            }

            this.props.onSubmit.call(this, data);
        });
    };

    saveFormRef = (form) => {
        this.form = form;
    };

    render () {
        const { userEditShow, userEditData: data, orgList, roleList, onClose } = this.props;
        return (
            <ExModal
                visible={userEditShow}
                title={`${data.id > 0 ? '修改' : '新增'}用户信息`}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    orgList={orgList}
                    roleList={roleList}
                    data={data}
                />
            </ExModal>
        );
    }
}

UserEditModal = connect(state => {
    const { userEditShow, userEditData, orgList } = state['user'];
    return { userEditShow, userEditData, orgList, roleList: state.role.roleList };
}, dispatch => ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit (data) {
        // data.isPic=data.isPic?1:0;
        data.roleIds = data.roleIds.join(',');
        if (data.id > 0) {
            dispatch(action.updateUser(data)).then(() => {
                this.props.onClose();
                // 重新加载列表
                dispatch(action.selectOrg(data.orgId));
            });
        } else {
            dispatch(action.addUser(data)).then(() => {
                this.props.onClose();
                // 重新加载列表
                dispatch(action.selectOrg(data.orgId));
            });
        }
    },
    /**
     * 关闭
     */
    onClose () {
        dispatch({ type: 'USER_EDIT_CLOSE' });
    }
}))(UserEditModal);

export default UserEditModal;
