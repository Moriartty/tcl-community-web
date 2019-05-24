import {Carousel} from 'antd';
import ExCharts from 'components/ExCharts';
import {connect} from 'react-redux';
import BubbleChart from './BubbleChart';
import React from "react"

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
// const mockData = [{ name: '中国', value: 300 },
//     { name: '美国', value: 800 },
//     { name: '法国', value: 500 }]

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

class FullScreenMode extends React.PureComponent{
    onChange = () => {

    }
    render(){
        const bodyHeight = document.body.clientHeight;
        const {mapChartData,bubbleChartData,selectedCountry,firstChartData} = this.props;
        return(
            <div style={{width:'100%'}}>
                <Carousel afterChange={this.onChange}>
                    <div style={{width:'100%'}}>
                        <ExCharts
                            container={'full-heat-map'}
                            option={{
                                type: 'heat-map' ,
                                selectedCountry:selectedCountry,
                            }}
                            data={
                                mapChartData.option.useGeo?
                                    convertData(mapChartData.data)
                                    :
                                    Object.keys(mapChartData.data).map(o=>mapChartData.data[o])
                            }
                            chartOption={mapChartData.option}
                            width={'100%'}
                            minHeight={(bodyHeight-100)*0.9}
                        />
                    </div>
                    <div style={{width:'100%'}}>
                        <BubbleChart id={'full-bubble-chart'}  width={'100%'} height={(bodyHeight-100)*0.9}/>
                    </div>
                    <div></div>
                </Carousel>
            </div>
        )
    }
}
FullScreenMode = connect(state=>{
    const {mapChartData,bubbleChartData,firstChartData,selectedCountry} = state['home'];
    return {mapChartData,bubbleChartData,firstChartData,selectedCountry};
},null)(FullScreenMode)

export default FullScreenMode;