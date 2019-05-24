import {Card, Col} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class SecondCard extends React.PureComponent {
    render(){
        const {id,secondCard:chartData} = this.props;
        const exData = chartData.exData;
        return(
            <Card
                className={'card secondCard'}
                title={exData?'各产品在'+exData.time+'进行的'+exData.actionType+'情况':''}
                hoverable={true}
            >
                <ExCharts
                    container={id}
                    theme={'dark'}
                    option={{ type: 'normal-bar' }}
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
    const {secondCard} = state['dashboard2'];
    return {secondCard};
},dispatch=>({

}))(SecondCard);

export default SecondCard;