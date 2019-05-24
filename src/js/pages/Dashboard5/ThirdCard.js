
/**
 * Created by user on 18-8-10.
 */
import React from 'react';
import ExCharts from 'components/ExCharts';
import { connect } from 'react-redux';
import {Card} from "antd"

class ThirdCard extends React.Component {
    handleClick = (time, value) => {
        if (value){
            this.props.reHref(time, value);
        }
    };
    render () {
        const { width, height, id, exData,thirdCard: chartData } = this.props;
        return (
            <Card
                className={'card thirdCard'}
                title={'半年内'+exData.tag+exData.gender+'人数变化（千）'}
                hoverable={true}
            >
                <ExCharts
                    container={id}
                    theme={'vintage'}
                    option={{ type: 'normal-line' }}
                    chartOption={chartData.option}
                    data={chartData.data}
                    width={'100%'}
                    minHeight={250}
                    onClick={this.handleClick}
                />
            </Card>
        );
    }
}

ThirdCard = connect(state => {
    const { thirdCard } = state['dashboard5'];
    return { thirdCard };
},null)(ThirdCard);

export default ThirdCard;
