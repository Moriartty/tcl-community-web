import {connect} from 'react-redux';
import action from 'actions/dashboardDefect';
import SubPage from 'components/App/SubPage';
import {Col, Row} from "antd";
import SecondCard from '../DashboardDefect/SecondCard';
import FirstCard from "../DashboardDefect/FirstCard";
import ThirdCard from "../DashboardDefect/ThirdCard";
import FourthCard from "../DashboardDefect/FourthCard";

class DetailPage extends React.PureComponent {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.init(this.props.selectedProduct,this.props.selectedCountry);
    }
    render(){
        const {show,selectedProduct,onClose,selectedCountry} = this.props;
        return (
            <React.Fragment>
                {/*<SubPage*/}
                    {/*show={show}*/}
                    {/*title={selectedProduct+'('+selectedCountry+')'}*/}
                    {/*onClose={onClose}*/}
                {/*>*/}
                {/*</SubPage>*/}
                <div className={'dash-container3'}>
                    <Row gutter={12} style={{marginBottom:10}}>
                        <Col lg={{span:12}} xxl={{span:10,offset:2}}>
                            <FirstCard id={'first'} country={selectedCountry}/>
                        </Col>
                        <Col lg={{span:12}} xxl={{span:10}}>
                            <SecondCard id={'second'}/>
                        </Col>
                    </Row>
                    <Row gutter={12} style={{marginBottom:10}}>
                        <Col lg={{span:12}} xxl={{span:10,offset:2}}>
                            <ThirdCard id={'third'} />
                        </Col>
                        <Col lg={{span:12}} xxl={{span:10}}>
                            <FourthCard id={'fourth'}/>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}
DetailPage = connect(null,dispatch=>({
    init(selectedProduct,selectedCountry){
        dispatch(action.loadFirstChart(selectedProduct,selectedCountry));
        dispatch(action.loadSecondChart(selectedProduct,selectedCountry));
        dispatch(action.loadThirdChart(selectedProduct,selectedCountry));
        dispatch(action.loadFourthChart(selectedProduct,selectedCountry));
    }
}))(DetailPage);

export default DetailPage;