import { connect } from 'react-redux';
import action from 'actions/role';
import ExModal from 'components/ExModal';
import ExFormItem from 'components/ExFormItem';
import { Form, message } from 'antd';

const EditForm = Form.create()((props) => {
    const { data, form } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem label="名称"
                name="name"
                initialValue={data.name}
                placeholder="输入名称"
                required
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem label="描述"
                type="textarea"
                name="desc"
                initialValue={data.desc}
                placeholder="输入对角色的描述..."
                required
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type="hidden"
                name="id"
                initialValue={data.id}
                getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class EditModal extends React.Component {
    handleSave = () => {
        const form = this.form;
        form.validateFields((err, data) => {
            if (err) {
                return;
            }

            this.props.onSubmit.call(this, data);
            form.resetFields();
            this.props.onClose();
        });
    };

    saveFormRef = (form) => {
        this.form = form;
    };

    render () {
        const { editShow, editData: data, onClose } = this.props;
        return (
            <ExModal
                visible={editShow}
                title={`${data.id > 0 ? '修改' : '新增'}角色信息`}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    data={data}
                />
            </ExModal>
        );
    }
}

EditModal = connect(state => {
    const { editShow, editData } = state.role;
    return { editShow, editData };
}, dispatch => ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit (data) {
        if (data.id > 0) {
            dispatch(action.updateRole(data)).then(() => {
                this.props.onClose();
                message.success('更新成功！');
                // 重新加载列表
                dispatch(action.loadList());
            });
        } else {
            dispatch(action.addRole(data)).then(() => {
                this.props.onClose();
                message.success('添加成功！');
                // 重新加载列表
                dispatch(action.loadList());
            });
        }

        dispatch({ type: 'ROLE_SELECT', role: data });
    },
    /**
     * 关闭
     */
    onClose () {
        dispatch({ type: 'ROLE_EDIT_CLOSE' });
    }
}))(EditModal);

export default EditModal;
