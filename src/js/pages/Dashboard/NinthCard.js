import { Row, Col, Card, Tag,Icon } from 'antd';
import ExCharts from 'components/ExCharts';
import ExTable from 'components/ExTable';
import React from 'react';
import { connect } from 'react-redux';


class NinthCard extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        const { width, height, id, ninthCardData: chartData } = this.props;
        console.log(JSON.stringify(this.props))
        return (
            <React.Fragment>
                <p className={'question'}>{chartData.question}</p>
                <Card
                    className={'card ninthCard'}
                    hoverable={true}
                >
                    <Row gutter={4}>
                        <Col span={5}>
                           <div>
                             <div className={'total'}>总收入</div>
                             <div className={'totalDetail'}>{chartData.info.info1}</div>
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
                                minHeight={150}
                            />
                        </Col>
                    </Row>
                    <div style={{marginTop:25,marginBottom:15}}>
                        <span style={{color:'black',fontSize:16}}>收入来源<img src={require('img/question.png')} /></span>
                        <span style={{color:'black',fontSize:16,float:'right'}}>每位用户带来的收入<img src={require('img/question.png')} /></span>
                    </div>
                    <Row className={'row'}>
                        <Col span={6} className={'col'}>购买</Col>
                        <Col span={6} className={'col'}>AdMob</Col>
                        <Col span={6} className={'col'}>ARPU</Col>
                        <Col span={6} className={'col'}>ARPPU</Col>
                    </Row>
                    <Row className={'row'}>
                        <Col span={6} className={'col'}>{chartData.info.info2}</Col>
                        <Col span={6} className={'col'}>{chartData.info.info3}</Col>
                        <Col span={6} className={'col'}>{chartData.info.info4}</Col>
                        <Col span={6} className={'col'}>{chartData.info.info5}</Col>
                    </Row>
                    <div style={{backgroundColor:'#999',height:1,marginTop:50}}></div>
                    <div style={{color:'#039be5',marginTop:'10px',marginRight:'20px',float:'right'}}>查看“AD_CLICK”事件详情→</div>
                </Card>
            </React.Fragment>
        );
    }
}

NinthCard = connect(state => {
    const { ninthCardData } = state['dashboard'];
    return { ninthCardData};
}, null)(NinthCard);

export default NinthCard;
