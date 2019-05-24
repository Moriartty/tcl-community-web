import ExCharts from 'components/ExCharts';
import { connect } from 'react-redux';
import {Col, Row} from "antd";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";

class PeopleFeatureCard extends React.Component {
    render () {
        const { width, height, id, chartData } = this.props;
        return (
            <div>
                <Row gutter={6} style={{ marginBottom: '10px' }}>
                    <Col span={10}>
                        <ExCharts
                            container={id}
                            option={{ type: 'common' }}
                            data={chartData.option1}
                            chartOption={chartData.option1}
                            width={'100%'}
                            theme={'light'}
                            minHeight={200}/>
                        <div>
                            <span style={{marginLeft:10,height:30,color:'blue'}}>62.2%</span>
                            <span style={{marginLeft:30,marginRight:30,height:30,color:'blue'}}>37.8%</span>
                        </div>
                        <div>
                            <span style={{marginLeft:10,height:30,color:'green'}}>↑0.2%</span>
                            <span style={{marginLeft:30,marginRight:30,height:30,color:'red'}}>↓0.2%</span>
                        </div>

                    </Col>
                    <Col span={13} offset={1} >
                        <ExCharts
                            container={id+'1'}
                            option={{ type: 'common' }}
                            data={chartData.option2}
                            chartOption={chartData.option2}
                            width={'100%'}
                            theme={'light'}
                            minHeight={250}
                        />
                    </Col>
                </Row>
                <div style={{backgroundColor:'#999',height:1}}></div>
                <div style={{color:'#039be5',marginTop:'10px',marginRight:'20px',float:'right'}}>VIEW "ALL USERS" AUDIENCE →</div>
                    </div>
        );
    }
}

PeopleFeatureCard = connect(null, null)(PeopleFeatureCard);

export default PeopleFeatureCard;