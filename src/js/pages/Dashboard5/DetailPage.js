import {connect} from 'react-redux';
import action from 'actions/dashboard5';
import SubPage from 'components/App/SubPage';
import {Col, Row} from "antd";
import RegionMapCard from './RegionMapCard';
import SecondCard from './SecondCard';
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";
import 'less/dashboard_5.less';

class DetailPage extends React.PureComponent {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.init(this.props.selectedCountry,this.props.data);
    }
    render(){
        const {show,title,onClose,selectedCountry,data} = this.props;

        return (
            <React.Fragment>
                <SubPage
                    show={show}
                    title={data.gender+'-'+data.tag}
                    onClose={onClose}
                >
                    <div className={'dash-container5'}>
                        <Row gutter={12} style={{ marginBottom: '10px' }}>
                            <Col lg={{span:12}} xxl={{span:10,offset:2}}>
                                <RegionMapCard id={selectedCountry||'moriarty'} country={selectedCountry}/>
                            </Col>
                            <Col lg={{span:12}} xxl={{span:10}}>
                                <SecondCard id={'second'} exData={data}/>
                            </Col>
                        </Row>
                        <Row gutter={12}>
                            <Col lg={{span:12}} xxl={{span:10,offset:2}}>
                                <ThirdCard id={'third'} exData={data}/>
                            </Col>
                            <Col lg={{span:12}} xxl={{span:10}}>
                                <FourthCard id={'fourth'} exData={data}/>
                            </Col>
                        </Row>
                    </div>
                </SubPage>
            </React.Fragment>
        )
    }
}
DetailPage = connect(null,dispatch=>({
    init(country,exData){
        dispatch(action.loadRegionData(country));
        dispatch(action.loadSecondData(exData));
        dispatch(action.loadThirdData());
        dispatch(action.loadFourthData(exData))
    }
}))(DetailPage);

export default DetailPage;