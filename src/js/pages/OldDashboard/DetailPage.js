
import {connect} from 'react-redux';
import action from 'actions/dashboard';
import SubPage from 'components/App/SubPage';
import {Col, Row} from "antd";
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ThirdCard from './ThirdCard';
import FourthCard from './FourthCard';
import FifthCard from './FifthCard';
import SixthCard from './SixthCard';
import SeventhCard from "./SeventhCard";
import EighthCard from "./EighthCard";
import TenthCard from "./TenthCard";

class DetailPage extends React.PureComponent{
    componentWillMount(){
        this.props.init();
    }

    render(){
        const {show,selectedProduct,onClose} = this.props;
        return (
            <React.Fragment>
                <SubPage
                    show={show}
                    title={selectedProduct}
                    onClose={onClose}
                >
                    <div className={'dash-container'}>
                        <Row gutter={12} style={{ marginBottom: '10px' }} >
                            <Col lg={{span:14}} xxl={{span:12,offset:2}}>
                                <FirstCard id={'first'}/>
                            </Col>
                            <Col lg={{span:10}} xxl={{span:8}} >
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
                                <FifthCard id={'fifth'}/>
                            </Col>
                            <Col lg={{span:12}} xxl={{span:10}}>
                                <SixthCard id={'sixth'}/>
                            </Col>
                        </Row>
                        {/*<Row gutter={12} style={{ marginBottom: '10px' }}>*/}
                            {/*<Col span={10} offset={2}>*/}
                                {/*<SeventhCard id={'seven'}/>*/}
                            {/*</Col>*/}
                            {/*<Col span={10} >*/}
                                {/*<EighthCard id={'eighth'}/>*/}
                            {/*</Col>*/}
                        {/*</Row>*/}
                        {/*<Row gutter={12} style={{ marginBottom: '10px' }}>*/}
                            {/*<Col span={10} offset={2}>*/}
                                {/*<div id={'ninth'}>Ninth</div>*/}
                            {/*</Col>*/}
                            {/*<Col span={10} >*/}
                                {/*<TenthCard id={'tenth'}/>*/}
                            {/*</Col>*/}
                        {/*</Row>*/}
                    </div>
                </SubPage>
            </React.Fragment>
        )
    }
}

DetailPage = connect(null,dispatch=>({
    init(){
        dispatch(action.loadFirstChart());
        dispatch(action.loadSecondChart());
        dispatch(action.loadThirdChart());
        dispatch(action.loadFourthChart());
        dispatch(action.loadFifthChart());
        dispatch(action.loadSixthChart());
        dispatch(action.loadSeventhChart());
        dispatch(action.loadEighthChart());
        dispatch(action.loadNinthChart());
        //Added-Begin by yaolin.fu for XR-7139756 on 18-12-26
        dispatch(action.loadTenthChart());
        //Added-End by yaolin.fu for XR-7139756 on 18-12-26
        //对接代码注释
        dispatch(action.loadHotEvents());
    }
}))(DetailPage);

export default DetailPage;