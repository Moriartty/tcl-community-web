import {Row, Col, Card, Tag, Badge, Tooltip, Divider, Icon} from 'antd'
import ExCharts from 'components/ExCharts';
import React from 'react';
import { connect } from 'react-redux';
import appAction from 'actions/app';
import ExCard from 'components/ExCard';

class FifthCard extends React.Component {
    render () {
        const { width, height, id, fifthChartData: chartData,reHref } = this.props;
        return (
            <React.Fragment>
                <p className={'question'}>{chartData.question}</p>
                <ExCard
                    className={'fifthCard'}
                    title={chartData.option.title.text}
                    tooltip={chartData.tooltip}
                    height={370}
                    actions={[<span style={{color:'#36AFEA'}} onClick={reHref}><Icon type="arrow-right"/>VIEW CONVERSION EVENTS</span>]}
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
                                                    <Badge dot style={{backgroundColor:chartData.option.color[i],marginTop:10,marginRight:15,height:10,width:10}}/>
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
                                minHeight={205}
                            />
                        </Col>
                    </Row>
                </ExCard>
            </React.Fragment>
        );
    }
}

FifthCard = connect(state => {
    const { fifthChartData } = state['dashboard'];
    return { fifthChartData };
}, dispatch=>({
    reHref(){
        window.postMessage(32);
        dispatch(appAction.loadTabPage('tBase/conversions'));
    }
}))(FifthCard);

export default FifthCard;
