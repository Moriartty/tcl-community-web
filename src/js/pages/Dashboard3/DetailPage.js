import SubPage from "../../components/App/SubPage";
import React from "react";
import { Row, Col } from 'antd';
import RegionMapCard from './RegionMapCard';
import action from 'actions/dashboard3';
import connect from "react-redux/es/connect/connect";
import 'less/dashboard_3.less';
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";
import FifthCard from "./FifthCard";
import SixthCard from "./SixthCard";

class DetailPage extends React.PureComponent{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        // this.props.init(this.props.selectedCountry,this.props.data.time,this.props.data.value);
    }
    render(){
        const {show,title,selectedCountry,onClose} = this.props;
        return (
            <React.Fragment>
                <div className={'dash-container3'}>
                    <Row gutter={12} style={{ marginBottom: '10px' }}>
                        <Col lg={{span:12}} xxl={{span:10,offset:2}}>
                            <RegionMapCard id={selectedCountry||'moriarty'} country={selectedCountry}/>
                        </Col>
                        <Col lg={{span:12}} xxl={{span:10}}>
                            <SecondCard id={'second'}/>
                        </Col>
                    </Row>
                    <Row gutter={12} style={{ marginBottom: '10px' }}>
                        <Col lg={{span:12}} xxl={{span:10,offset:2}}>
                            <ThirdCard id={'third'}/>
                        </Col>
                        <Col lg={{span:12}} xxl={{span:10}}>
                            <FourthCard id={'fourth'}/>
                        </Col>
                    </Row>
                    <Row gutter={12} style={{ marginBottom: '10px' }}>
                        <Col lg={{span:12}} xxl={{span:10,offset:2}}>
                            <FifthCard modelId={'fifth-model'} versionId={'fifth-version'}/>
                        </Col>
                        {/*<Col lg={{span:12}} xxl={{span:10}}>*/}
                            {/*<SixthCard sexId={'sixth-sex'} ageId={'sixth-age'}/>*/}
                        {/*</Col>*/}
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}
DetailPage = connect(state=>{
    const {selectedCountry} = state['dashboard3'];
    return {selectedCountry};
},dispatch=>({
    init(country,time,value){
        dispatch(action.loadRegionData(country));
        dispatch(action.loadSecondData(time,value));
        dispatch(action.loadThirdData(time,value));
        dispatch(action.loadFourthData(time,value));
        dispatch(action.loadFifthData());
        dispatch(action.loadSixthData());
    }
}))(DetailPage);

export default DetailPage;