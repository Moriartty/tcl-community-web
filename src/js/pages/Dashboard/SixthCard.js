import {Row, Col, Card, Tag, Icon, Divider, Tooltip} from 'antd'
import ExCharts from 'components/ExCharts';
import ExTable from 'components/ExTable';
import appAction from 'actions/app';
import React from 'react';
import { connect } from 'react-redux';
import ExCard from 'components/ExCard';

class SixthCard extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            { title: 'Screen class' , dataIndex: 'screenType' },
            { title: '% Total', dataIndex: 'percent',render: this.renderAlignRight },
            { title: '', dataIndex: 'ratio1' ,render:this.renderAlignLeft},
            { title: 'Avg.time', dataIndex: 'aveTime',render: this.renderAlignRight  },
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
        const { width, height, id, sixthChartData: chartData,reHref } = this.props;
        return (
            <React.Fragment>
                <p className={'question'}>{chartData.question}</p>
                <ExCard
                    className={'sixthCard'}
                    title={chartData.option['title.text']}
                    height={370}
                    tooltip={chartData.tooltip}
                    actions={[<span style={{color:'#36AFEA'}} onClick={reHref}><Icon type="arrow-right"/>VIEW CONVERSION EVENTS</span>]}
                >
                    <Row gutter={4}>
                        <Col span={6}>
                            <div className={'legendBlocks'}>
                                {
                                    chartData.option['legend.data']?chartData.option['legend.data'].map((o, i) => {
                                        const minute = Math.floor((this.props.tempData*60)/60);
                                        const second = (this.props.tempData*60)%60;
                                        return (
                                            <div className={'legendBlock'} key={i}>
                                                <div className={'top'}>{minute} m {second} s</div>
                                                <div className={'middle'}><Icon type={'rise'}/>17%</div>
                                            </div>
                                        );
                                    }):''
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
                                minHeight={120}
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
                </ExCard>
            </React.Fragment>
        );
    }
}

SixthCard = connect(state => {
    const { sixthChartData ,tempData} = state['dashboard'];
    return { sixthChartData,tempData };
}, dispatch=>({
    reHref(){
        dispatch(appAction.loadTabPage('tBase/events'));
    }
}))(SixthCard);

export default SixthCard;
