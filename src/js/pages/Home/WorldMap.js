// import echarts from 'echarts/lib/echarts';
import React from 'react';
import ExCharts from 'components/ExCharts';
import {Icon} from 'antd';
import { connect } from 'react-redux';
import action from 'actions/home';
import Overlay from 'components/Overlay';
import FullScreenMode from './FullScreenMode';

// const geoCoordMap = {
//     '中国': [116.46, 39.92],
//     '美国': [-77.01, 38.91],
//     '法国': [2.20, 42.52]
// };
// const mockData = [{ name: '中国', value: 300 },
//     { name: '美国', value: 800 },
//     { name: '法国', value: 500 }]

const geoCoordMap = {
    'india':[77.13,28.37],
    'brazil':[-47.55,-15.47],
    'indonesia':[106.49,-6.09],
    'mexico':[-99.10,19.20],
    'bangladesh':[90.26,23.43],
    'russia':[37.35,55.45],
    'pakistan':[73.10,33.40],
    'usa':[-77.02,39.91],
    'ukraine':[30.28,50.30],
    'turkey':[32.54,39.57]
};

let convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

class WorldMap extends React.Component {
    constructor (props) {
        super(props);
        // this.state = { selectCountry: '' };
        this.state = {overlayActive: false}
    }
    closeOverlay = () => {
        this.setState({ overlayActive: false })
    }
    showOverlay = () => {
        this.setState({ overlayActive: true })
    }
    handleClick = (e) => {
        if (e.name !== this.props.selectedCountry) {
            console.log(1,e.name,this.props.selectedCountry)
            // this.setState({ selectCountry: e.name });
            this.props.bindSelectedCountry(this.props.selectedCountry,e.name);
        }else{
            console.log(2,e.name,this.props.selectedCountry)
            // this.setState({selectCountry:''});
            this.props.clearSelectedCountry(this.props.selectedCountry);
        }
    }
    render () {
        const { width, height, id,selectedCountry, mapChartData:chartData } = this.props;
        return (
            <React.Fragment>
                {this.state.overlayActive &&
                <Overlay
                    onClose={this.closeOverlay}
                    style={{
                        width:'100%',
                        height:'100%',
                        backgroundColor:'rgba(0,0,0,.8)'
                    }}
                    overlayCloseStyle={{
                        color:'white',
                        fontSize:60
                    }}
                >
                    <FullScreenMode/>
                </Overlay>}
                <ExCharts
                    container={id}
                    option={{
                        type: 'heat-map' ,
                        selectedCountry:selectedCountry,
                        mapJsonData:chartData.mapJsonData,
                        feature:{
                            myFullScreen: {
                                show: true,
                                title: '全屏查看',
                                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                                onclick: ()=>{
                                    this.showOverlay();
                                }
                            }
                        }
                    }}
                    data={
                        chartData.option.useGeo?
                            convertData(chartData.data)
                            :
                            Object.keys(chartData.data).map(o=>chartData.data[o])
                    }
                    chartOption={chartData.option}
                    width={width}
                    minHeight={height}
                    onClick={this.handleClick}
                />
            </React.Fragment>
        );
    }
}
WorldMap = connect(state=>{
    const {mapChartData} = state['home'];
    return {mapChartData};
}, dispatch => ({
    onClick (name) {
        dispatch(action.loadFirstChart(name));
        dispatch(action.loadSecondChart());
        dispatch(action.loadThirdChart());
        dispatch(action.loadFourthChart(name));
        dispatch(action.loadFifthChart());
    },
    bindSelectedCountry(pre,name){
        dispatch({type:'HOME_COUNTRY_CHANGE',selectedCountry:name});
        dispatch(action.refreshMap(pre,name));
        this.onClick(name);
    },
    clearSelectedCountry(pre){
        dispatch({type:'HOME_COUNTRY_CHANGE',selectedCountry:'world'});
        dispatch(action.refreshMap(pre,'world'));
        this.onClick();
    }
}))(WorldMap);

export default WorldMap;
