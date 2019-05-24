import {Card, Col} from 'antd'
import React from "react"
import connect from "react-redux/es/connect/connect";
import ExCharts from "../../components/ExCharts";

class SecondCard extends React.PureComponent {
    render(){
        const {id,secondCard:chartData} = this.props;
        return(
            <Card
                className={'card secondCard'}
                title={chartData.option['title.text']}
                hoverable={true}>
                <ExCharts
                    container={id}
                    theme={'light'}
                    option={{ type: 'normal-line' }}
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
    const {secondCard} = state['dashboard3'];
    return {secondCard};
},null)(SecondCard);

export default SecondCard;