import { Row, Col, Card, Tag, Icon,Badge } from 'antd';
import ExCharts from 'components/ExCharts';
import React from 'react';
import { connect } from 'react-redux';

class FirstCard extends React.Component {
    render () {
        const { width, height, id, firstChartData: chartData } = this.props;
        return (
            <Card
                className={'card firstCard'}
                title={chartData.option['title.text']}
                hoverable={true}
            >
                <Row>
                    <Col span={19} style={{marginTop:10}}>
                        <ExCharts
                            container={id}
                            theme={'vintage'}
                            option={{ type: 'normal-line' }}
                            chartOption={chartData.option}
                            data={chartData.data}
                            width={'100%'}
                            minHeight={250}
                        />
                    </Col>
                    <Col span={4} offset={1}>
                        <div>
                            {
                                JSON.stringify(chartData.option)!='{}'?chartData.option.legend.data.map((o, i) => {
                                    const length = chartData.data[i].length;
                                    const lastCount = chartData.data[i][length-1];
                                    const preCount = chartData.data[i][length-2];
                                    let color = lastCount>=preCount?'#f5222d':'#389e0d';
                                    let type = lastCount>=preCount?'rise':'fall'
                                    return (
                                        <div className={'legendBlock'} key={i}>
                                            <div className={'top'}>
                                                {/*<Tag color={chartData.option.color[i]}/>*/}
                                                <Badge dot style={{backgroundColor:chartData.option.color[i],marginRight:15,height:10,width:10}}/>
                                                {o}
                                            </div>
                                            <div className={'middle'}>{lastCount}K</div>
                                            <p className={'bottom'} style={{color: color}}>
                                                <Icon type={type} />
                                                {
                                                    ~~preCount==0||~~lastCount==0?100:((lastCount-preCount)*100/preCount).toFixed(2)
                                                }
                                                %
                                            </p>
                                        </div>
                                    );
                                }):''
                            }
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}

FirstCard = connect(state => {
    const { firstChartData } = state['dashboard'];
    return { firstChartData };
}, null)(FirstCard);

export default FirstCard;
