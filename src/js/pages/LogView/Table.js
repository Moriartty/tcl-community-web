import ExTable from 'components/ExTable';
import { connect } from 'react-redux';
import action from 'actions/logView';

class Table extends React.Component {
    constructor (props) {
        super(props);
        this.columns = [
            { title: 'filename', dataIndex: 'filename' },
            { title: 'productname', dataIndex: 'productname' },
            { title: 'projectname', dataIndex: 'projectname' },
            { title: 'sdtCountry', dataIndex: 'sdtCountry' },
            { title: 'sdtUsername', dataIndex: 'sdtUsername' },
            { title: 'filetime', dataIndex: 'filetime' },
            { title: 'imei1', dataIndex: 'imei1' },
            { title: 'imei2', dataIndex: 'imei2' },
            { title: 'tool', dataIndex: 'tool' },
            { title: 'persoSystem', dataIndex: 'persoSystem' }
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
    const { loading, list, page, searchParams } = state['logView'];
    return { loading, list, ...page, searchParams };
}, dispatch => ({
    onPageSizeChange (current, pageSize) {
        dispatch({ type: 'LOGVIEW_SEARCH_PARAMS', params: { pageSize } });
        // dispatch(action.loadUserPage(undefined, current));
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
