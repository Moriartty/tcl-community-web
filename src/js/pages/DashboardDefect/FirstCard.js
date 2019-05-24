import {Card} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class FirstCard extends React.PureComponent {
    render(){
        const {country,firstChartData:chartData} = this.props;
        return(
            <Card
                className={'card'}
                title={'用户痛点区域分布图'}
                hoverable={true}>
                <ExCharts
                    container={'region-defect'}
                    theme={'light'}
                    option={{ type: 'region-map',mapJsonData:chartData.mapJsonData }}
                    chartOption={chartData}
                    data={chartData.data}
                    width={'100%'}
                    country={country}
                    minHeight={250}/>
            </Card>
        )
    }
}

FirstCard = connect(state=>{
    const {firstChartData} = state['dashboardDefect'];
    return {firstChartData};
},dispatch=>({

}))(FirstCard);

export default FirstCard;