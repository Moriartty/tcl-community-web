import ExTable from 'components/ExTable';
import { connect } from 'react-redux';
import action from 'actions/ogc';
import {Divider,Popconfirm,Button} from 'antd';

class Table extends React.Component {
    constructor (props) {
        super(props);
        this.columns = [
            { title: 'title', dataIndex: 'title' },
            { title: 'author', dataIndex: 'author' },
            { title: 'content', dataIndex: 'content' },
            { title: 'happenTime', dataIndex: 'happenTime' },
            {
                title:'Action',dataIndex:'',key:'',render:(data)=>{
                    return (
                        <span>
                            <a href={'javascript:;'} onClick={this.props.handleEdit.bind(this,data)}>Edit</a>
                            <Divider type={'vertical'}/>
                            <Popconfirm
                                title={'确认删除？'}
                                onConfirm={()=>this.props.handleDelete(data.id)}
                                onCancel={(e)=>e.stopPropagation()}
                            >
                                <a href={'javascript:;'} onClick={(e)=>{e.stopPropagation()}}>Delete</a>
                            </Popconfirm>
                        </span>
                    )
                }
            }
        ];
    }
    render () {
        const { loading, list, pageNo, dataCount, searchParams, onPageChange, onPageSizeChange } = this.props;
        const paginationOptions = { pageNo, pageSize: searchParams.pageSize, dataCount, onPageChange, onPageSizeChange };
        return (
            <ExTable
                {...paginationOptions}
                loading={loading}
                columns={this.columns}
                dataSource={list}
                expandRowByClick={true}
                expandedRowRender={record => {
                    return (
                        <React.Fragment>
                            {
                                this.columns.slice(0,this.columns.length-1).map(o=>
                                    <p className={o.title} key={o.title}><b>{o.title}</b> : {record[o.title]}</p>
                                )
                            }
                        </React.Fragment>
                    )
                }}
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
    },
    handleEdit(data,e){
        e.stopPropagation();
        dispatch({type:'OGC_EDITMODAL_SHOW',show:true});
        dispatch({type:'OGC_EDITMODAL_DATA',data:data});
    },
    handleDelete(id,e){
        e.stopPropagation();
    }
}))(Table);
export default Table;
