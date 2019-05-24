import Toolbar from '../Dashboard/Toolbar';
import {connect} from 'react-redux';
import {Select, Spin, Tabs} from 'antd'
import action from 'actions/events';
import Table1 from "../Conversions/Table1"
import Table2 from "../Conversions/Table2"
import DetailPage from './DetailPage'

class Events extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.init();
    }
    render(){
        const loading = false;
        const {events,searchParams} = this.props;
        return (
            <div className="head-toolbar display-flex flex-column">
                <Toolbar
                    exComp={
                        <Select value={searchParams.event} showSearch style={{width:180,marginRight:10}} >
                        {
                            events.map(o=><Select.Option value={o.id} key={o.id}>{o.name}</Select.Option>)
                        }
                        </Select>
                    }
                />
                <div className="flex-grow-1 display-flex">
                    <div className="bd flex-grow-1" style={{overflow:'auto',padding:0}}>
                        {
                            loading ? (
                                <div style={{ textAlign: 'center', paddingTop: 100 }}><Spin/></div>
                            ) :<DetailPage/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
Events = connect(state=>{
    const {events,searchParams} = state['events'];
    return {events,searchParams};
},dispatch=>({
    init(){
        dispatch(action.loadEvents());
    }
}))(Events);

module.exports = Events;
