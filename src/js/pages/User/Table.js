import { connect } from 'react-redux';
import action from 'actions/user';
import ExTable from 'components/ExTable';

class Table extends React.Component {
    constructor (props) {
        super(props);

        this.columns = [
            // { title: '账号', dataIndex: 'loginName'},
            { title: '姓名', dataIndex: 'name' },
            { title: '性别', dataIndex: 'sex' },
            { title: '手机', dataIndex: 'phone' },
            { title: '角色', dataIndex: 'role' },
            { title: '组织', dataIndex: 'org' }
        ];
    }

    render () {
        const { loading, userPageList: list, userPageNo: pageNo, dataCount, searchParams, onRowClick, onPageChange, onPageSizeChange } = this.props;
        const paginationOptions = { pageSize: searchParams.pageSize, pageNo, dataCount, onPageChange, onPageSizeChange };
        return (
            <ExTable {...paginationOptions}
                loading={loading}
                columns={this.columns}
                onRow={record => ({ onClick: onRowClick.bind(this, record.id) })}
                dataSource={list}/>
        );
    }
}

Table = connect(state => {
    const { userPageList, userPageNo, dataCount, searchParams, loading } = state['user'];
    return { userPageList, userPageNo, dataCount, searchParams, loading };
}, dispatch => ({
    onPageSizeChange (current, pageSize) {
        dispatch({ type: 'USER_SEARCH_PARAMS', params: { pageSize } });
        dispatch(action.loadUserPage(undefined, current));
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange (pageNo) {
        dispatch(action.loadUserPage(undefined, pageNo));
    },
    /**
     * 点击每行用户信息
     * @param id
     */
    onRowClick (id) {
        dispatch({ type: 'USER_INFO_SHOW', show: true });
        dispatch(action.loadUserInfo(id));
    }
}))(Table);

export default Table;
