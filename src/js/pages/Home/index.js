import React from 'react';
import { Row, Col,Carousel } from 'antd';
import NormalBar from './NormalBar';
import NormalLine from './NormalLine';
import HorizontalBar from './HorizontalBar';
import CustomizedPie from './CustomizedPie';
import WorldMap from './WorldMap';
import WordClouds from './WordClouds';
import TopBar from './TopBar';
import RadarChart from './RadarChart';
import HorizontalStackBar from './HorizontalStackBar';
import TimeLine from './Timeline';
import BubbleChart from './BubbleChart';
import { connect } from 'react-redux';
import action from 'actions/home';
import 'less/home';
import 'less/dashboard.less';

import ThirdDetailPage from '../Dashboard3/DetailPage'
import FourthDetailPage from '../Dashboard2/DetailPage';
import FifthDetailPage from '../Dashboard/DetailPage';
import SecondDetailPage from "../DashboardDefect/DetailPage";
import FirstDetailPage from '../Dashboard5/DetailPage';
import ThirdCard from "../Dashboard/ThirdCard";

// console.log('height',document.body.scrollHeight);

// let clientHeight = Math.max(document.body.clientHeight - 40,800);
let clientHeight = document.body.clientHeight - 40;
let clientWidth = document.body.clientWidth - 60;
// const clientHeight = window.screen.availHeight - (screen.height-window.screen.availHeight)  - 40;
// const clientWidth = window.innerWidth - 60;


class Home extends React.Component {
    componentWillMount () {
        this.props.loadData();
    }
    componentDidMount () {
        let step = 1; let top = document.documentElement.scrollTop;
        setInterval(function () {
            top += step;
            if (top > 65) { clearInterval(); } else {
                document.body.scrollTop = top;
                document.documentElement.scrollTop = top;
            }
        }, 7);
    }
    componentDidUpdate () {
        //更新是仍保持滚动到一定位置
        document.body.scrollTop = 65;
        document.documentElement.scrollTop = 65;
    }

    render () {
        const {firstSubPage,thirdSubPage,fifthSubPage,fourthSubPage,
            secondSubPage,selectedProduct,selectedCountry,onClose,regionDefectData} = this.props;
        let currentPage;
        if (thirdSubPage.show){
            currentPage = <ThirdDetailPage
                show={thirdSubPage.show}
                title={selectedCountry}
                selectedCountry={selectedCountry}
                data={thirdSubPage}
                onClose={onClose.bind(this,3)}
            />
        }else if(fifthSubPage.show){
            currentPage = <FifthDetailPage
                show={fifthSubPage.show}
                selectedProduct={selectedProduct}
                onClose={onClose.bind(this,5)}
            />
        }else if(fourthSubPage.show){
            currentPage = <FourthDetailPage
                show={fourthSubPage.show}
                title={selectedCountry}
                selectedCountry={selectedCountry}
                onClose={onClose.bind(this,4)}
                data={fourthSubPage}
            />
        }else if(secondSubPage.show){
            currentPage = <SecondDetailPage
                show={secondSubPage.show}
                selectedProduct={selectedProduct}
                selectedCountry={selectedCountry}
                data={regionDefectData}
                onClose={onClose.bind(this,2)}
            />
        }else if(firstSubPage.show){
            currentPage = <FirstDetailPage
                show={firstSubPage.show}
                data={firstSubPage}
                selectedCountry={selectedCountry}
                onClose={onClose.bind(this,1)}
            />
        }else {
            currentPage = <div className={'main-page'}>
                <Row>
                    <Col span={6}>
                        <Row className={'leftTop'}><TimeLine width={clientWidth / 4} height={clientHeight / 3} id={'first'}/></Row>

                        <Row className={'leftMiddle'}><CustomizedPie width={clientWidth / 4} height={clientHeight / 3} id={'second'}/></Row>

                        {/* <Row className={'leftBottom'}><RadarChart width={clientWidth / 4} height={clientHeight / 3} id={'radar1'}/></Row> */}
                        <Row className={'leftBottom'}><NormalLine width={clientWidth / 4} height={clientHeight / 3} id={'third'}/></Row>
                    </Col>
                    <Col span={18}>
                        <Row className={'topTime'}>
                            <TopBar/>
                        </Row>
                        <Row className={'rightTop'}>
                            {
                                this.props.mapType == 'map'
                                    ? <WorldMap width={3 * clientWidth / 4} height={2 * clientHeight / 3 - 40} id={'heatmap'} selectedCountry={selectedCountry}/>
                                    : <BubbleChart width={3 * clientWidth / 4} height={2 * clientHeight / 3 - 40} id={'bubble-chart'}/>
                            }
                        </Row>
                        <Row className={'rightBottom'}>
                            {/* <Col span={11} className={'rightBottom-left'}><WordClouds width={3 * clientWidth / 8 - 5} height={clientHeight / 3}/></Col> */}
                            <Col span={11} className={'rightBottom-left'}><HorizontalStackBar width={3 * clientWidth / 8 - 5} height={clientHeight / 3} id={'fourth'}/></Col>
                            <Col span={1}></Col>
                            {/* <Col span={11} className={'rightBottom-right'}><HorizontalBar width={3 * clientWidth / 8 - 5} height={clientHeight / 3} id={'third'}/></Col> */}
                            <Col span={11} className={'rightBottom-right'}><NormalBar width={3 * clientWidth / 8 - 5} height={clientHeight / 3} id={'fifth'}/></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        }
        return (
            <React.Fragment>
                {
                    currentPage
                }
            </React.Fragment>
        );
    }
}
Home = connect(state => {
    const { mapType,firstSubPage,thirdSubPage,fourthSubPage,fifthSubPage,selectedProduct,selectedCountry,regionDefectData,secondSubPage} = state['home'];
    return { mapType,firstSubPage,thirdSubPage,fourthSubPage,fifthSubPage,selectedProduct ,selectedCountry,regionDefectData,secondSubPage};
}, dispatch => ({
    loadData () {
        dispatch(action.getActivityCount());
        dispatch(action.loadMap());
        dispatch(action.loadBubble());
        dispatch(action.loadFirstChart());
        dispatch(action.loadSecondChart());
        dispatch(action.loadThirdChart());
        dispatch(action.loadFourthChart());
        dispatch(action.loadFifthChart());
    },
    onClose(flag) {
        switch(flag){
            case 1:
                dispatch({type:'HOME_FIRSTSUBPAGE_SHOW',subPageShow:false});
                break;
            case 2:
                dispatch({type:'HOME_SECONDSUBPAGE_SHOW',subPageShow:false});
                break;
            case 3:
                dispatch({type:'HOME_THIRDSUBPAGE_SHOW',subPageShow:false});
                break;
            case 4:
                dispatch({type:'HOME_FOURTHSUBPAGE_SHOW',subPageShow:false});
                break;
            case 5:
                dispatch({type:'HOME_FIFTHSUBPAGE_SHOW',subPageShow:false,selectedProduct:''});
                break;
        }
    }
}))(Home);
module.exports = Home;