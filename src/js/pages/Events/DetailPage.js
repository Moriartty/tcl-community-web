import action from 'actions/events';
import {connect} from 'react-redux';
import FirstCard from './FirstCard';
import {Row,Col} from 'antd';
// import SecondCard from "../Dashboard/SecondCard"

class DetailPage extends React.Component{
    render(){
        return (
            <div className={'event-container'}>
                <Row gutter={12} style={{ marginBottom: '10px' }} >
                    <Col lg={{span:15}} xxl={{span:12,offset:2}}>
                        <FirstCard id={'first'}/>
                    </Col>
                    {/*<Col lg={{span:9}} xxl={{span:8}} >*/}
                        {/*<SecondCard id={'second'}/>*/}
                    {/*</Col>*/}
                </Row>
            </div>
        )
    }
}

DetailPage = connect(null,null)(DetailPage);

export default DetailPage;
