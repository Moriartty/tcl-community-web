import { Row, Col, Card, Tag,Icon } from 'antd';
import ExCharts from 'components/ExCharts';
import ExTable from 'components/ExTable';
import React from 'react';
import { connect } from 'react-redux';

class SixthCard extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            { title: '屏幕类' , dataIndex: 'screenType' },
            { title: '总互动次数百分比', dataIndex: 'percent',render: this.renderAlignRight },
            { title: '', dataIndex: 'ratio1' ,render:this.renderAlignLeft},
            { title: '平均时间', dataIndex: 'aveTime',render: this.renderAlignRight  },
            { title: '', dataIndex: 'ratio2',render:this.renderAlignLeft }
        ]
    }
    renderAlignLeft = (val,data) => {
        return (
            <div style={{textAlign:'left'}} style={{color:val.flag==0?'green':'red'}}>
                {
                val.flag==0?<Icon type="fall" />:<Icon type="rise" />
                }
                {val.value}
            </div>
        )
    }
    renderAlignRight = (val,data) => <div style={{textAlign:'right'}}>{val}</div>
    render () {
        const { width, height, id, sixthChartData: chartData } = this.props;
        return (
            <React.Fragment>
                <p className={'question'}>{chartData.question}</p>
                <Card
                    className={'card sixthCard'}
                    title={chartData.option.title.text}
                    hoverable={true}
                >
                    <Row gutter={4}>
                        <Col span={6}>
                            <div className={'legendBlocks'}>
                                {
                                    chartData.option.legend.data.map((o, i) => {
                                        return (
                                            <div className={'legendBlock'} key={i}>
                                                <div className={'top'}>7 分 51 秒</div>
                                                <div className={'middle'}><Icon type={'rise'}/>17%</div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </Col>
                        <Col span={18}>
                            <ExCharts
                                container={id}
                                theme={'vintage'}
                                option={{ type: 'normal-line' }}
                                chartOption={chartData.option}
                                data={chartData.data}
                                width={'100%'}
                                minHeight={130}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <ExTable className={'sixthTable'}
                                     loading={false}
                                     columns={this.columns}
                                     dataSource={chartData.list}
                                     bordered={false}
                                     tableSize={'small'}
                            />
                        </Col>
                    </Row>
                </Card>
            </React.Fragment>
        );
    }
}

SixthCard = connect(state => {
    const { sixthChartData } = state['dashboard'];
    return { sixthChartData };
}, null)(SixthCard);

export default SixthCard;
