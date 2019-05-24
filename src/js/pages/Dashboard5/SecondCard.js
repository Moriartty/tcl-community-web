import {Card, Col} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class SecondCard extends React.PureComponent {
    render(){
        const {id,exData,secondCard:chartData} = this.props;
        return(
            <Card
                className={'card secondCard'}
                title={exData?'各产品在'+exData.tag+'的'+exData.gender+'人群中的分布情况':''}
                hoverable={true}
            >
                <ExCharts
                    container={id}
                    theme={'dark'}
                    option={{ type: 'normal-bar' }}
                    chartOption={chartData.option}
                    data={chartData.data}
                    width={'100%'}
                    minHeight={280}
                />
            </Card>
        )
    }
}

SecondCard = connect(state=>{
    const {secondCard} = state['dashboard5'];
    return {secondCard};
},dispatch=>({

}))(SecondCard);

export default SecondCard;