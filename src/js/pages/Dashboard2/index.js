import {Row, Col, Button, Card, Spin,Select,Icon,Divider,Tag} from 'antd'
import { connect } from 'react-redux';
import action from 'actions/dashboard2';
import 'less/dashboard_2.less';
import DetailPage from './DetailPage';
// import SearchModal from './SearchModal';
// import moment from 'moment';
import Toolbar from "./Toolbar";

class Dashboard2 extends React.Component {
    constructor(props){
        super(props);
        window.document.addEventListener('message',(e)=>{
            this.initRNData(JSON.parse(e.data))
        });
    }

    componentWillMount () {
        this.props.init();
        this.props.loading();
        // this.props.init(this.props.selectedCountry,this.props.data);
    }

    initRNData = (rnData) => {
        this.props.init(rnData.country,{time:rnData.time,actionType:rnData.type})
    }

    render () {
        const {selectedProduct,selectedCountry,onSearch,detailPageLoading:loading} = this.props;
        return (
            <React.Fragment>
                <div className="head-toolbar display-flex flex-column">
                    <Toolbar/>
                    <div className="flex-grow-1 display-flex" >
                        <div className="bd flex-grow-1" >
                            {
                                loading ? (
                                    <div style={{ textAlign: 'center', paddingTop: 100 }}><Spin/></div>
                                ) : <DetailPage selectedCountry={selectedCountry} selectedProduct={selectedProduct}/>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
Dashboard2 = connect(state=>{
    const {selectedProduct,selectedCountry,detailPageLoading} = state['dashboard2'];
    return {selectedProduct,selectedCountry,detailPageLoading};
}, dispatch => ({
    init(country,secondExData){
        dispatch(action.loadRegionData(country));
        dispatch(action.loadSecondData(secondExData));
    },
    //延个时，不然图表会出问题，暂时这么解决
    loading(){
        dispatch({type:'DASHBOARD2_DETAILPAGE_LOADING',detailPageLoading:true})
        setTimeout(function(){dispatch({type:'DASHBOARD2_DETAILPAGE_LOADING',detailPageLoading:false});},500)
    }
}))(Dashboard2);

module.exports = Dashboard2;