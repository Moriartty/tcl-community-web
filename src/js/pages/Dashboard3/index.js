import {Row, Col, Button, Card, Spin,Select,Icon,Divider,Tag} from 'antd'
import { connect } from 'react-redux';
import action from 'actions/dashboard3';
import 'less/dashboard_3.less';
import DetailPage from './DetailPage';
// import SearchModal from './SearchModal';
// import moment from 'moment';
import Toolbar from "./Toolbar";

class Dashboard3 extends React.Component {
    constructor(props){
        super(props);
        window.document.addEventListener('message',(e)=>{
            this.initRNData(JSON.parse(e.data))
        });
    }

    componentWillMount () {
        const {selectedCountry,time,value} = this.props;
        this.props.init(selectedCountry,time,value);
        this.props.loading();
        // this.props.init(this.props.selectedCountry,this.props.data);
    }

    initRNData = (rnData) => {
        window.postMessage(JSON.stringify(rnData))
        this.props.init(rnData.country,rnData.time,rnData.value);
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
Dashboard3 = connect(state=>{
    const {selectedProduct,selectedCountry,detailPageLoading,time,value} = state['dashboard3'];
    return {selectedProduct,selectedCountry,detailPageLoading,time,value};
}, dispatch => ({
    init(country,time,value){
        dispatch(action.initAllChart(country,time,value))
    },
    //延个时，不然图表会出问题，暂时这么解决
    loading(){
        dispatch({type:'DASHBOARD3_DETAILPAGE_LOADING',detailPageLoading:true})
        setTimeout(function(){dispatch({type:'DASHBOARD3_DETAILPAGE_LOADING',detailPageLoading:false});},500)
    }
}))(Dashboard3);

module.exports = Dashboard3;