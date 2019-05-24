import {Row, Col, Button, Card, Spin,Select,Icon,Divider,Tag} from 'antd'
import { connect } from 'react-redux';
import action from 'actions/dashboard';
import 'less/dashboard.less';
import DetailPage from './DetailPage';
import Toolbar from "./Toolbar"

class Dashboard extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.init();
        this.props.loading();
    }

    render () {
        const {subPageShow:show,selectedProduct,onClose,onSearch,detailPageLoading:loading} = this.props;
        return (
            <React.Fragment>
                <div className="head-toolbar display-flex flex-column">
                    <Toolbar/>
                    <div className="flex-grow-1 display-flex" >
                        <div className="bd flex-grow-1" >
                            {
                                loading ? (
                                    <div style={{ textAlign: 'center', paddingTop: 100 }}><Spin/></div>
                                ) : <DetailPage show={show} selectedProduct={selectedProduct} onClose={onClose}/>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
Dashboard = connect(state=>{
    const {subPageShow,selectedProduct,timeTypeList,timeType,detailPageLoading,searchParams,appVersions} = state['dashboard'];
    return {subPageShow,selectedProduct,timeTypeList,timeType,detailPageLoading,searchParams,appVersions};
}, dispatch => ({
    init () {
        dispatch(action.loadProducts());
        dispatch(action.loadAppVersions());
        dispatch(action.refreshPage());
    },
    //延个时，不然图表会出问题，暂时这么解决
    loading(){
        dispatch({type:'DASHBOARD_DETAILPAGE_LOADING',detailPageLoading:true})
        setTimeout(function(){dispatch({type:'DASHBOARD_DETAILPAGE_LOADING',detailPageLoading:false});},500)
    }
}))(Dashboard);

module.exports = Dashboard;