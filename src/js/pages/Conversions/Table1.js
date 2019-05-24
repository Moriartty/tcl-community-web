import ExTable from 'components/ExTable';
import {connect} from 'react-redux';
import {Button,Icon} from 'antd';

class Table1 extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            {title:'转化名称',dataIndex:'con-name'},
            {title:'计数',dataIndex:'count'},
            {title:'%',dataIndex:'count-per'},
            {title:'价值',dataIndex:'value'},
            {title:'%',dataIndex:'value-per'},
            {title:'标记为转化',dataIndex:'con-flag'}
        ]
    }
    render(){
        const {firstTableData:data} = this.props;
        return (
            <React.Fragment>
                <div className={'tool-bar'}>
                    <Button><Icon type={'download'}/>下载CSV文件</Button>
                    <Button type={'primary'}>新建转化事件</Button>
                </div>
                <div >
                    <ExTable
                        loading={false}
                        columns={this.columns}
                        dataSource={data}
                        bordered={false}
                        size={'small'}
                    />
                </div>
            </React.Fragment>
        )
    }
}

Table1 = connect(state=>{
    const {firstTableData} = state['conversions'];
    return {firstTableData};
},null)(Table1);

export default Table1;
