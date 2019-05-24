import { Row, Col, Card, Tag,Badge } from 'antd';
import ExCharts from 'components/ExCharts';
import React from 'react';
import { connect } from 'react-redux';

class FifthCard extends React.Component {
    render () {
        const { width, height, id, fifthChartData: chartData } = this.props;
        return (
            <React.Fragment>
                <p className={'question'}>{chartData.question}</p>
                <Card
                    className={'card fifthCard'}
                    title={chartData.option.title.text}
                    hoverable={true}
                >
                    <Row>
                        <Col span={24}>
                            <div className={'legendBlocks'}>
                                {
                                    chartData.option.legend.data.map((o, i) => {
                                        return (
                                            <div className={'legendBlock'} key={i}>
                                                <div className={'top'}>
                                                    {/*<Tag color={chartData.option.color[i]}/>*/}
                                                    <Badge dot style={{backgroundColor:chartData.option.color[i],marginRight:15,height:10,width:10}}/>
                                                    {o}
                                                </div>
                                                <div className={'middle'}>
                                                    {
                                                        chartData.data&&chartData.data.length>0?
                                                            chartData.data[i].reduce((sum,i)=>{return sum+i}):0
                                                    }
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </Col>
                        <Col span={24}>
                            <ExCharts
                                container={id}
                                theme={'vintage'}
                                option={{ type: 'normal-line' }}
                                chartOption={chartData.option}
                                data={chartData.data}
                                width={'100%'}
                                minHeight={220}
                            />
                        </Col>
                    </Row>
                </Card>
            </React.Fragment>
        );
    }
}

FifthCard = connect(state => {
    const { fifthChartData } = state['dashboard'];
    return { fifthChartData };
}, null)(FifthCard);

export default FifthCard;
