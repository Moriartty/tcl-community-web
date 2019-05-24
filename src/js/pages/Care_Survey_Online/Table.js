import ExTable from 'components/ExTable';
import { connect } from 'react-redux';
import action from 'actions/care_survey_online';

class Table extends React.Component {
    constructor (props) {
        super(props);
        this.columns = [
            { title: 'country', dataIndex: 'country' },
            { title: 'android_version', dataIndex: 'android_version' },
            { title: 'cu', dataIndex: 'cu' },
            { title: 'imei', dataIndex: 'imei' },
            { title: 'model', dataIndex: 'model' },
            { title: 'create_time', dataIndex: 'create_time' },
            { title: 'status', dataIndex: 'status' }
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
                            <p className={'value'}><b>{record.question1}</b> <br/><span className={'answer'}>{record.answer1}</span></p>
                            <br/>
                            <p className={'value'}><b>{record.question2}</b> <br/><span className={'answer'}>{record.answer2}</span></p>
                            <br/>
                            <p className={'value'}><b>{record.question3}</b> <br/><span className={'answer'}>{record.answer3}</span></p>
                        </div>
                    );
                }}
            />
        );
    }
}
Table = connect(state => {
    const { loading, list, page, searchParams } = state['care_survey_online'];
    return { loading, list, ...page, searchParams };
}, dispatch => ({
    onPageSizeChange (current, pageSize) {
        dispatch({ type: 'CARE_SURVEY_ONLINE', params: { pageSize } });
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
