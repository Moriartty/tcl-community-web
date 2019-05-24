import {Card} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class FourthCard extends React.PureComponent {
    render(){
        const {fourthChartData:chartData} = this.props;
        return(
            <Card
                className={'card'}
                title={'用户痛点发生时间点'}
                hoverable={true}>
                <ExCharts
                    container={'region-defect4'}
                    theme={'light'}
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

FourthCard = connect(state=>{
    const {fourthChartData} = state['dashboardDefect'];
    return {fourthChartData};
},dispatch=>({

}))(FourthCard);

export default FourthCard;