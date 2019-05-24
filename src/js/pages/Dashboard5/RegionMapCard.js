import {Card} from 'antd';
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';


class RegionMapCard extends React.PureComponent{

    render(){
        const {id,country,regionMapCard:chartData} = this.props;
        return (
            <Card
                className={'card regionMapCard'}
                title={country}
                hoverable={true}
            >
                <ExCharts
                    container={id}
                    theme={'dark'}
                    option={{ type: 'region-map',mapJsonData:chartData.mapJsonData }}
                    chartOption={chartData.option}
                    data={chartData.data}
                    width={'100%'}
                    minHeight={250}
                    country={country}
                />
            </Card>
        )
    }
}

RegionMapCard = connect(state=>{
    const {regionMapCard} = state['dashboard5'];
    return {regionMapCard};
},null)(RegionMapCard);

export default RegionMapCard;