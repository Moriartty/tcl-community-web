import {Card, Col, Row} from 'antd'
import {connect} from 'react-redux';
import React from "react"
import ExCharts from 'components/ExCharts';

class SixthCard extends React.PureComponent {
    render(){
        const {sexId,ageId,sixthCard:chartData} = this.props;
        return(
            <Card
                className={'card sixthCard'}
                title={chartData.title}
                hoverable={true}
            >
                <Row gutter={12}>
                    <Col span={9} offset={1}>
                        <ExCharts
                            container={sexId}
                            option={{ type: 'common' }}
                            data={chartData.sexOption}
                            chartOption={chartData.sexOption}
                            width={200}
                            theme={'light'}
                            minHeight={200}/>
                        <div>
                            <span style={{marginLeft:30,height:30,color:'blue'}}>62.2%</span>
                            <span style={{marginLeft:50,marginRight:30,height:30,color:'blue'}}>37.8%</span>
                        </div>
                        <div>
                            <span style={{marginLeft:30,height:30,color:'green'}}>↑0.2%</span>
                            <span style={{marginLeft:50,marginRight:30,height:30,color:'red'}}>↓0.2%</span>
                        </div>

                    </Col>
                    <Col span={10} >
                        <ExCharts
                            container={ageId}
                            option={{ type: 'common' }}
                            data={chartData.ageOption}
                            chartOption={chartData.ageOption}
                            width={300}
                            theme={'light'}
                            minHeight={250}
                        />
                    </Col>
                </Row>
            </Card>
        )
    }
}

SixthCard = connect(state=>{
    const {sixthCard} = state['dashboard3'];
    return {sixthCard};
},null)(SixthCard);

export default SixthCard;