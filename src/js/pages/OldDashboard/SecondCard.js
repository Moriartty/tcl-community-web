import { Row, Col, Card, Tag, Icon } from 'antd';
import ExCharts from 'components/ExCharts';
import ExTable from 'components/ExTable';
import React from 'react';
import { connect } from 'react-redux';
import action from 'actions/dashboard';

class SecondCard extends React.Component {
    constructor (props) {
        super(props);
        this.columns = [
            { title: '热门转化事件', dataIndex: 'event' },
            { title: 'Count', dataIndex: 'count' }
        ];
    }
    componentDidMount(){
        // const preData = this.props.secondChartData.data;
        // this.anim = setInterval(()=>{
        //     this.props.update(preData);
        // },1000*60)
        this.anim = setInterval(()=>{
            this.props.update();
        },1000*60)
    }
    componentWillUnmount(){
        clearInterval(this.anim);
    }
    render () {
        const { width, height, id, secondChartData: chartData } = this.props;
        return (
            <Card
                className={'card secondCard'}
                title={
                    <div>
                        <p style={{ fontSize: '12px',marginBottom:0 }}>过去30分钟用户数</p>
                        <div style={{  fontSize: '22px' }}>
                            {/*{*/}
                                {/*chartData.data.length?chartData.data.reduce(function(sum,o){return sum+o}):''*/}
                            {/*}*/}
                            {chartData.halfHourNum}
                        </div>
                    </div>
                }
                // hoverable={true}
                headStyle={{ color: 'white' }}
            >
                <Row>
                    <Col span={24}>
                        <ExCharts
                            container={id}
                            theme={'dark'}
                            option={{ type: 'normal-bar' }}
                            chartOption={chartData.option}
                            data={chartData.data}
                            width={'100%'}
                            minHeight={100}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ExTable className={'secondTable'}
                            loading={false}
                            columns={this.columns}
                            dataSource={chartData.listData}
                            // showHeader={false}
                            bordered={false}
                            tableSize={'small'}
                             rowKey={'event'}
                        />
                    </Col>
                </Row>
            </Card>
        );
    }
}

SecondCard = connect(state => {
    const { secondChartData } = state['dashboard'];
    return { secondChartData };
}, dispatch => ({
    update(){
        dispatch(action.updateSecondChart());
    }
}))(SecondCard);

export default SecondCard;
