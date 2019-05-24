import ExTable from 'components/ExTable';
import { connect } from 'react-redux';
import action from 'actions/care_suggestion';

class Table extends React.Component {
    constructor (props) {
        super(props);
        this.columns = [
            { title: 'topic', dataIndex: 'topic' },
            { title: 'email', dataIndex: 'email' },
            { title: 'description', dataIndex: 'description' },
            { title: 'create_time', dataIndex: 'create_time' },
            // { title: 'phone_number', dataIndex: 'phone_number' },
            { title: 'phone', dataIndex: 'phone' },
            { title: 'imei', dataIndex: 'imei' }
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
                expandRowByClick={true}
                expandedRowRender={record => {
                    return (
                        <div>
                            <p className={'value'}>Topic : {record.topic}</p>
                            <p className={'value'}>Description : {record.description}</p>
                        </div>
                    );
                }}
            />
        );
    }
}
Table = connect(state => {
    const { loading, list, page, searchParams } = state['care_suggestion'];
    return { loading, list, ...page, searchParams };
}, dispatch => ({
    onPageSizeChange (current, pageSize) {
        dispatch({ type: 'CARE_SUGGESTION_SEARCHPARAM', params: { pageSize } });
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
