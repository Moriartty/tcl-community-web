import {connect} from 'react-redux';
import {Col,Row,Card,Radio,Statistic,Icon,Button} from 'antd';
import ExCharts from 'components/ExCharts';
import dashboardAction from 'actions/dashboard';

class BottomBar extends React.Component{
    componentWillMount(){
        this.props.init();
    }
    componentDidMount(){
        document.addEventListener('resize',function(){
            console.log('test',arguments);
        })
    }
    render(){
        const {secondChartData:btData} = this.props;
        return(
            <div className={'stream-bottom-bar'}>
                <div className={'parent-col parent-col1'}>
                    <Row style={{padding:'5px 10px',height:'100%'}}>
                        <Col span={12}>
                            <Radio.Group  buttonStyle="solid" defaultValue={'用户'}>
                                <Radio.Button key="用户" value='用户'>用户</Radio.Button>
                                <Radio.Button key="事件" value='事件'>事件</Radio.Button>
                            </Radio.Group>
                            <Card  bordered={false} hoverable={true}>
                                <ExCharts
                                    container={'streamView-bottomBar-firstChart'}
                                    // theme={'dark'}
                                    option={{ type: 'normal-bar' }}
                                    chartOption={btData.option}
                                    data={btData.data}
                                    width={'80%'}
                                    minHeight={40}
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <p>过去30分钟活跃数/事件数</p>
                            <Statistic  value={112893} valueStyle={{color:'#1890ff',fontWeight:'bold',fontSize:'2rem'}}/>
                        </Col>
                    </Row>
                </div>
                <div className={'parent-col parent-col2'}>
                    <Card  bordered={false}>
                        <div className={'normal-card'}>
                            <div className={'title'}> <Icon type={'user'}/>热门用户属性的值</div>
                            <div className={'content'}><span>(Other)=(Other)</span> <span>2.3万</span></div>
                        </div>
                    </Card>
                </div>
                <div className={'parent-col parent-col3'}>
                    <Card  bordered={false}>
                        <div className={'normal-card'}>
                            <div className={'title'}> <Icon type={'user'}/>热门位置</div>
                            <div className={'content'}><span>(Other)=(Other)</span> <span>8504</span></div>
                        </div>
                    </Card>
                </div>
                <div className={'parent-col parent-col4'}>
                    <Card  bordered={false}>
                        <div className={'normal-card'}>
                            <div className={'title'}> <Icon type="environment" />热门用户属性的值</div>
                            <div className={'content'}><span>(Other)=(Other)</span> <span>2.3万</span></div>
                        </div>
                    </Card>
                </div>
                <div className={'parent-col parent-col5'}>
                    <Card  bordered={false}>
                        <div>
                            <p><Icon type="idcard" />随机用户的事件流</p>
                            <Button>用户概况</Button>
                        </div>
                    </Card>
                </div>
            </div>
            )
    }
}

BottomBar = connect(state=>{
    const { secondChartData } = state['dashboard'];
    return {secondChartData};
},dispatch=>({
    init(){
        dispatch(dashboardAction.loadSecondChart());
    }
}))(BottomBar)

export default BottomBar;