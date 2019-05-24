import {Card} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class SecondCard extends React.PureComponent {
    render(){
        const {secondChartData:chartData} = this.props;
        return(
            <Card
                className={'card'}
                title={'产品体验用户痛点排行'}
                hoverable={true}>
                <ExCharts
                    container={'secondCard'}
                    option={{ type: 'common' }}
                    chartOption={chartData.option}
                    data={chartData.data}
                    width={'100%'}
                    minHeight={250}
                />
            </Card>
        )
    }
}

SecondCard = connect(state=>{
    const {secondChartData} = state['dashboardDefect'];
    return {secondChartData};
},dispatch=>({

}))(SecondCard);

export default SecondCard;