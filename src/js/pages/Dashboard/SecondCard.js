import { Row, Col, Card, Tag, Icon } from 'antd';
import ExCharts from 'components/ExCharts';
import ExTable from 'components/ExTable';
import React from 'react';
import { connect } from 'react-redux';
import action from 'actions/dashboard';
import appAction from 'actions/app';
import ExCard from 'components/ExCard';
// import {Observable} from 'rxjs';

class SecondCard extends React.Component {
    constructor (props) {
        super(props);
        this.columns = [
            { title: 'Top conversion events', dataIndex: 'event' },
            { title: 'Count', dataIndex: 'count' }
        ];
    }
    componentDidMount(){
        // const preData = this.props.secondChartData.data;
        // this.anim = setInterval(()=>{
        //     this.props.update(preData);
        // },1000*60)

        // this.observable = Observable.interval(1000*5).subscribe(this.props.update);

        this.anim = setInterval(()=>{
            this.props.update();
        },1000*60)
    }
    componentWillUnmount(){
        clearInterval(this.anim);
        // this.observable.unsubscribe();
    }
    render () {
        const { width, height, id, secondChartData: chartData ,reHref} = this.props;
        return (
            <Card
                className={'card secondCard'}
                style={{height:370}}
                title={
                    <div>
                        <p style={{ fontSize: '12px',marginBottom:0 }}>Users in last 30 minutes</p>
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
                // actions={[<span style={{color:'#36AFEA'}}><Icon type="arrow-right"/>STREAMVIEW</span>]}
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
                <div className={'footer'} onClick={reHref}>
                    STREAMVIEW
                    <Icon type="arrow-right"/>
                </div>
            </Card>
        );
    }
}

SecondCard = connect(state => {
    const { secondChartData } = state['dashboard'];
    return { secondChartData };
}, dispatch => ({
    update(preData){
        // dispatch(action.updateSecondChart(preData));
        dispatch(action.loadSecondChart());
    },
    reHref(){
        dispatch(appAction.loadTabPage('tBase/streamView'));
        window.postMessage(38);
    }
}))(SecondCard);

export default SecondCard;
