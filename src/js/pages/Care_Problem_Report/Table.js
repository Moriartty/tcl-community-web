import ExTable from 'components/ExTable';
import { connect } from 'react-redux';
import action from 'actions/care_problem_report';

class Table extends React.Component {
    constructor (props) {
        super(props);
        this.columns = [
            { title: 'issue', dataIndex: 'issue' },
            { title: 'email', dataIndex: 'email' },
            { title: 'country_mcc', dataIndex: 'country_mcc' },
            { title: 'mnc', dataIndex: 'mnc' },
            { title: 'description', dataIndex: 'description' },
            { title: 'create_time', dataIndex: 'create_time' },
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
                expandedRowRender={record => { return <p className={'description'}>Description:{record.description}</p>; }}
            />
        );
    }
}
Table = connect(state => {
    const { loading, list, page, searchParams } = state['care_problem_report'];
    return { loading, list, ...page, searchParams };
}, dispatch => ({
    onPageSizeChange (current, pageSize) {
        dispatch({ type: 'CARE_PROBLEM_REPORT_SEARCHPARAM', params: { pageSize } });
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
