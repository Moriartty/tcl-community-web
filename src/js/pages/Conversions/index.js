import Toolbar from '../Dashboard/Toolbar';
import {connect} from 'react-redux';
import {Spin,Tabs} from "antd";
import Table1 from './Table1';
import Table2 from './Table2';
import action from 'actions/conversions';
import dashAction from 'actions/dashboard';
require('less/conversions.less');

const TabPane = Tabs.TabPane;

class Conversions extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.init();
    }
    render(){
        const loading = false;
        return (
            <div className="conversions-container head-toolbar display-flex flex-column">
                <Toolbar/>
                <div className="flex-grow-1 display-flex">
                    <div className="bd flex-grow-1" style={{overflow:'auto',padding:0}}>
                        {
                            loading ? (
                                <div style={{ textAlign: 'center', paddingTop: 100 }}><Spin/></div>
                            ) :<div className={'container-content'}>
                                <Tabs defaultActiveKey="1" >
                                    <TabPane tab="转化事件" key="1">
                                        <Table1/>
                                    </TabPane>
                                    <TabPane tab="投放网络设置" key="2">
                                        <Table2/>
                                    </TabPane>
                                </Tabs>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
Conversions = connect(null,dispatch=>({
    init(){
        dispatch(dashAction.loadProducts());
        dispatch(dashAction.loadAppVersions());
        dispatch(action.loadFirstTable());
    }
}))(Conversions);

module.exports = Conversions;
