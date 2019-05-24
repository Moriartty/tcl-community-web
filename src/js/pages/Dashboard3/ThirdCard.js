import {Card, Col} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class ThirdCard extends React.PureComponent {
    render(){
        const {id,thirdCard:chartData} = this.props;
        return(
            <Card
                className={'card thirdCard'}
                title={chartData.option['title.text']}
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

ThirdCard = connect(state=>{
    const {thirdCard} = state['dashboard3'];
    return {thirdCard};
},null)(ThirdCard);

export default ThirdCard;