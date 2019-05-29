import { connect } from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';
import { Form } from 'antd';
import moment from 'moment';

const SearchForm = Form.create({
    mapPropsToFields: (props) => {
        const params = props.searchParams;
        return {
            title: Form.createFormField({ value: params.title })
        };
    }
})(props => {
    const { form } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem  label={'Title'} name={'title'} getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class SearchModal extends React.Component {
    handleSave = () => {
        const form = this.form;
        form.validateFields((err, data) => {
            if (err) { return; }
            this.props.onSearch(data);
            this.props.onClose();
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render () {
        const { show, onClose,searchParams} = this.props;
        return (
            <ExModal
                visible={show}
                title={'查询条件'}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <SearchForm ref={this.saveFormRef} searchParams={searchParams}/>
            </ExModal>
        );
    }
}

SearchModal = connect(state => {
    const { searchParams } = state['ogc'];
    return { searchParams };
}, null)(SearchModal);

export default SearchModal;
