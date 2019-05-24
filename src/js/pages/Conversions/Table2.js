import ExTable from 'components/ExTable';
import {connect} from 'react-redux';
import {Button,Icon,Input} from 'antd';
const Search = Input.Search;

class Table2 extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            {title:'广告网络',dataIndex:'col1'},
            {title:'来源',dataIndex:'col2'},
            {title:'应用',dataIndex:'col3'},
            {title:'网络参数',dataIndex:'col4'},
            {title:'回传转化',dataIndex:'col5'},
        ]
    }
    render(){
        const {secondTableData:data} = this.props;
        return (
            <React.Fragment>
                <div className={'toolbar'}>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                    <Button type={'primary'}>新建广告网络</Button>
                </div>
                <ExTable
                    loading={false}
                    columns={this.columns}
                    dataSource={data}
                    bordered={false}
                    size={'small'}
                />
            </React.Fragment>
        )
    }
}

Table2 = connect(state=>{
    const {secondTableData} = state['conversions'];
    return {secondTableData};
},null)(Table2);

export default Table2;
