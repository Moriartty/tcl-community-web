import Toolbar from '../Dashboard/Toolbar';
import HeatMap from './HeatMap';
import {connect} from 'react-redux';
import BottomBar from './BottomBar';
import {Spin} from "antd";
import dashAction from 'actions/dashboard';
require('less/streamView.less');

class StreamView extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.init();
        this.props.mapLoading();
    }
    render(){
        const {loading} = this.props;
        return (
            <div className="streamView-container head-toolbar display-flex flex-column">
                <Toolbar/>
                <div className="flex-grow-1 display-flex">
                    <div className="bd flex-grow-1" style={{overflow:'auto',padding:0}}>
                        {
                            loading ? (
                                <div style={{ textAlign: 'center', paddingTop: 100 }}><Spin/></div>
                            ) : <HeatMap/>
                        }
                    </div>
                </div>
                <BottomBar/>
            </div>
        )
    }
}
StreamView = connect(state=>{
    const {loading} = state['streamView'];
    return {loading};
},dispatch=>({
    init(){
        dispatch(dashAction.loadProducts());
        dispatch(dashAction.loadAppVersions());
    },
    mapLoading(){
        dispatch({type:'STREAMVIEW_LOADING',loading:true})
        setTimeout(function(){dispatch({type:'STREAMVIEW_LOADING',loading:false});},800)
    }
}))(StreamView);

module.exports = StreamView;
