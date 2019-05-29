import {connect} from 'react-redux';
import {ExFormItem,ExModal} from '../../components';
import {Form,message} from 'antd';
import action from 'actions/ogc';
import moment from 'moment';

const EditForm = Form.create({
    onFieldsChange(props,changeFields){
        var changed = Object.keys(changeFields).map(o=>{
            var obj = new Object();
            obj[o] = changeFields[o].value;
            return obj;
        });
        props.onChange(props.editData,changed[0]);
    },
    mapPropsToFields:(props)=> {
        const params = props.editData;
        return {
            id:Form.createFormField({value:params.id}),
            title:Form.createFormField({value:params.title}),
            content:Form.createFormField({value:params.content}),
            author:Form.createFormField({value:params.author}),
            happenTime:Form.createFormField({value:moment(params.happenTime)})
        }
    }
})(props=>{
    const {form} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <ExFormItem type={'hidden'} name={'id'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem name={'title'} label={'Title'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type={'textarea'} name={'content'} label={'Content'} getFieldDecorator={getFieldDecorator} rows={4}/>
            <ExFormItem name={'author'} label={'Author'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type={'date'} name={'happenTime'} label={'HappenTime'} getFieldDecorator={getFieldDecorator}/>
        </Form>
    )
});

class EditModal extends React.Component{
    handleSave = () => {
        const form = this.form;
        form.validateFields((err,data)=>{
            if(err){
                return;
            }
            this.props.onSubmit(data);
        })
    };

    saveFormRef = (form) => {
        this.form = form;
    };

    render(){
        const {show,onClose,editData,loading} = this.props;
        return (
            <ExModal
                visible={show}
                confirmLoading={loading}
                title={'Edit'}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    editData={editData}
                    onChange={this.props.fieldsOnChange}
                />
            </ExModal>
        )
    }
}

EditModal = connect(state=>{
    const {editModalShow,editData,editModalLoading} = state['ogc'];
    return {show:editModalShow,editData,loading:editModalLoading};
},dispatch=>({
    fieldsOnChange(props,changeFields){
        var newData = {...props,...changeFields};
        dispatch({type:'OGC_EDITMODAL_DATA',data:newData});
    },
    onSubmit(data){
        dispatch(action.editItem(data));
    },
    onClose(){
        dispatch({type:'OGC_EDITMODAL_SHOW',show:false});
    }
}))(EditModal);

export default EditModal;

