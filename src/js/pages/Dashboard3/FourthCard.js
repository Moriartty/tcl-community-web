import {Card, Col} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class FourthCard extends React.PureComponent {
    render(){
        const {id,fourthCard:chartData} = this.props;
        return(
            <Card
                className={'card fourthCard'}
                title={chartData.option['title.text']}
                hoverable={true}
            >
                <ExCharts
                    container={id}
                    theme={'normal'}
                    option={{ type: 'normal-pie' }}
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
    const {fourthCard} = state['dashboard3'];
    return {fourthCard};
},null)(FourthCard);

export default FourthCard;