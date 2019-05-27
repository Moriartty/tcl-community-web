import ExTable from 'components/ExTable';
import { connect } from 'react-redux';
import action from 'actions/ogc';

class Table extends React.Component {
    constructor (props) {
        super(props);
        this.columns = [
            { title: 'execute_date', dataIndex: 'execute_date' },
            { title: 'android_id', dataIndex: 'android_id' },
            { title: 'cu', dataIndex: 'cu' },
            { title: 'key', dataIndex: 'key' },
            { title: 'value', dataIndex: 'value' }
        ];
    }
    render () {
        const { loading, list, pageNo, dataCount, searchParams, onPageChange, onPageSizeChange } = this.props;
        list.forEach((o) => {
            o['execute_date'] = '2018-12-09';
        });
        const paginationOptions = { pageNo, pageSize: searchParams.pageSize, dataCount, onPageChange, onPageSizeChange };
        return (
            <ExTable {...paginationOptions}
                loading={loading}
                columns={this.columns}
                dataSource={list}
                expandRowByClick={true}
                expandedRowRender={record => <p className={'value'}>{record.value}</p>}
            />
        );
    }
}
Table = connect(state => {
    const { loading, list, page, searchParams } = state['ogc'];
    return { loading, list, ...page, searchParams };
}, dispatch => ({
    onPageSizeChange (current, pageSize) {
        dispatch({ type: 'OGC_SEARCHPARAM', params: { pageSize } });
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
