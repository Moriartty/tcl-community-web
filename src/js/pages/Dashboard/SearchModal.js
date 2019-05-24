import { connect } from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';
import { Form } from 'antd';

const SearchForm = Form.create({
    mapPropsToFields: (props) => {
        const params = props.searchParams;
        return {
            appName:Form.createFormField({ value: params.appName }),
            appVersion: Form.createFormField({ value: params.appVersion }),
        };
    }
})(props => {
    const { form,appVersions,prodList } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem type={'select'} label={'Stream'} name={'appName'} noClear={true} list={prodList} withEmpty={true} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type={'select'} label={'App Version'} name={'appVersion'} noClear={true} list={appVersions} withEmpty={true} getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class SearchModal extends React.Component {
    handleSave = () => {
        const form = this.form;
        form.validateFields((err, data) => {
            if (err) { return; }
            this.props.onSearch({...this.props.searchParams,...data});
            this.props.onClose();
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render () {
        const { show, onClose,appVersions,productList } = this.props;
        return (
            <ExModal
                visible={show}
                title={'Search Item'}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <SearchForm
                    ref={this.saveFormRef}
                    searchParams={this.props.searchParams}
                    appVersions={appVersions}
                    prodList={productList}
                />
            </ExModal>
        );
    }
}

SearchModal = connect(state => {
    const { searchParams,appVersions,productList } = state['dashboard'];
    return { searchParams,appVersions,productList };
}, null)(SearchModal);

export default SearchModal;
