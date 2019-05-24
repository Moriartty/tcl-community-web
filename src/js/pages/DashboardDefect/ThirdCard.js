import {Card} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class ThirdCard extends React.PureComponent {
    render(){
        const {thirdChartData:chartData} = this.props;
        return(
            <Card
                className={'card'}
                title={'每日痛点数统计'}
                hoverable={true}>
                <ExCharts
                    container={'chartData'}
                    theme={'light'}
                    option={{ type: 'common' }}
                    chartOption={chartData.option}
                    data={chartData.data}
                    width={'100%'}
                    minHeight={250}/>
            </Card>
        )
    }
}

ThirdCard = connect(state=>{
    const {thirdChartData} = state['dashboardDefect'];
    return {thirdChartData};
},dispatch=>({

}))(ThirdCard);

export default ThirdCard;