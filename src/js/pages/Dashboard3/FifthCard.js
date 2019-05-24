import {Card, Col} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class FifthCard extends React.PureComponent {
    render(){
        const {modelId,versionId,fifthCard:chartData} = this.props;
        return(
            <Card
                className={'card fifthCard'}
                title={chartData.title}
                hoverable={true} >

                <ExCharts
                    container={modelId}
                    option={{ type: 'horizontal-stack-card-bar' }}
                    chartOption={chartData.modelOption}
                    data={chartData.modelData}
                    width={'100%'}
                    minHeight={115}
                />
                <div style={{marginTop:'10px',marginBottom:'10px',height:'1px',backgroundColor:'#999'}}/>
                <ExCharts
                    container={versionId}
                    option={{ type: 'horizontal-stack-card-bar' }}
                    chartOption={chartData.versionOption}
                    data={chartData.versionData}
                    width={'100%'}
                    minHeight={114}
                />
            </Card>
        )
    }
}

FifthCard = connect(state=>{
    const {fifthCard} = state['dashboard3'];
    return {fifthCard};
},null)(FifthCard);

export default FifthCard;
