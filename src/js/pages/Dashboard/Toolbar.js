import {connect} from 'react-redux';
import {Button, Divider, Icon, Select, Tag,Skeleton} from "antd";
import moment from 'moment';
import action from 'actions/dashboard';
import 'less/theme/toolbar.less';
import SearchModal from "./SearchModal";

const docWidth = document.body.clientWidth;
let btnText ,inputWidth,btnShape;
if(docWidth<960)
    btnText = '',btnShape = 'circle',inputWidth = 140;
else
    btnText = 'Add Filter',btnShape = 'round',inputWidth = 200;

class Toolbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchModalShow:false
        };
    }
    getDateRange = (id) => {
        return moment().subtract(id, "days").format('YYYY年MM月DD日')+'~'+moment().subtract(1, "days").format('YYYY年MM月DD日')
    }
    handleTagClick = (key) => {
        let temp = {};
        temp[key] = '';
        this.props.onSearch({...this.props.searchParams,...temp});
    }
    handleTimeRangeChange = (value) => {
        this.props.onSearch({...this.props.searchParams,...{dateRange:value}});
    }

    render(){
        const {searchParams,appVersions,timeTypeList,productList,onSearch,exComp} = this.props;
        const dataMap = {
            appVersion:appVersions,
            appName:productList
        }
        return (
            <div className="hd">
                <SearchModal show={this.state.searchModalShow} onClose={()=>this.setState({searchModalShow: false})} onSearch={onSearch}/>
                <div className="actions">
                    {exComp}

                    <Button type={"dashed"} shape={btnShape} onClick={()=>this.setState({searchModalShow:true})}>{btnText}
                    <Icon type={'plus'} style={{marginLeft:0}}/>
                    </Button>
                    <Divider type={'vertical'}/>
                    {
                        Object.keys(searchParams).map(o=>{
                            return searchParams[o]!==''&&appVersions.length&&productList.length&&o!='dateRange'?
                                <Tag
                                    closable
                                    visible={true}
                                    color="#108ee9"
                                    key={o}
                                    onClose={this.handleTagClick.bind(this,o)}
                                    style={{maxWidth:150}}
                                >
                                    {/*{o+'='+ dataMap[o].find(item=>item.id===searchParams[o]).name}*/}
                                    {dataMap[o].find(item=>item.id===searchParams[o]).name}
                                </Tag>:''
                        })
                    }
                </div>
                {/*<span className="text-lg">*/}
                    {/*{productList.length&&searchParams['appName']!==''?productList.find(item=>item.id===searchParams['appName']).name:<br/>}*/}
                {/*</span>*/}
                <span><br/></span>
                <div className={'tail'}>
                    <div className={'tail-content'}>
                        <div>
                            <Icon type="calendar" theme="filled" style={{width:'2rem'}}/>
                            <Select value={searchParams.dateRange} style={{width:inputWidth}} onChange={this.handleTimeRangeChange}>
                                {
                                    timeTypeList.map(o=><Select.Option value={o.id} key={o.id}>{o.name}</Select.Option>)
                                }
                            </Select>
                        </div>
                        <p><Icon type="swap" />Compared to：{this.getDateRange(searchParams.dateRange)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Toolbar = connect(state=>{
    const {searchParams,appVersions,timeTypeList,productList} = state['dashboard'];
    return {searchParams,appVersions,timeTypeList,productList};
},dispatch=>({
    onSearch (params) {
        dispatch({ type: 'DASHBOARD_SEARCHPARAMS_CHANGE', params });
        dispatch(action.refreshPage());
    }
}))(Toolbar);

export default Toolbar;