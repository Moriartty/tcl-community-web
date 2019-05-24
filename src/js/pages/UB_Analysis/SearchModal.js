import { connect } from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';
import { Form } from 'antd';
import moment from 'moment';

const SearchForm = Form.create({
    mapPropsToFields: (props) => {
        const params = props.searchParams;
        return {
            execute_date: Form.createFormField({ value: params.execute_date })
            // endTime: Form.createFormField({ value: moment(params.endTime) })
        };
    }
})(props => {
    const { form } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem type={'date'} label={'Execute_Date'} name={'execute_date'} getFieldDecorator={getFieldDecorator}/>
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
        console.log(searchParams);
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
    const { searchParams } = state['ub_analysis'];
    return { searchParams };
}, null)(SearchModal);

export default SearchModal;
