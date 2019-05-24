import ExTable from 'components/ExTable';
import { connect } from 'react-redux';
import action from 'actions/care_electron_card';

class Table extends React.Component {
    constructor (props) {
        super(props);
        this.columns = [
            { title: 'imei', dataIndex: 'imei'},
            { title: 'card_number', dataIndex: 'card_number' },
            { title: 'email', dataIndex: 'email' },
            { title: 'model', dataIndex: 'model' },
            { title: 'create_date', dataIndex: 'create_date' },
            { title: 'country', dataIndex: 'country' },
            { title: 'distributor', dataIndex: 'distributor' }
        ];
    }

    render () {
        const { loading, list, pageNo, dataCount, searchParams, onPageChange, onPageSizeChange } = this.props;
        const paginationOptions = { pageNo, pageSize: searchParams.pageSize, dataCount, onPageChange, onPageSizeChange };
        return (
            <ExTable {...paginationOptions}
                loading={loading}
                columns={this.columns}
                dataSource={list}
            />
        );
    }
}
Table = connect(state => {
    const { loading, list, page, searchParams } = state['care_electron_card'];
    return { loading, list, ...page, searchParams };
}, dispatch => ({
    onPageSizeChange (current, pageSize) {
        dispatch({ type: 'CARE_ELECTRON_CARD_SEARCHPARAM', params: { pageSize } });
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange (pageNo) {
        dispatch(action.loadList(pageNo));
    }
}))(Table);
export default Table;
