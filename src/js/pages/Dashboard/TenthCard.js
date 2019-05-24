//Added-Begin by yaolin.fu for XR-7139756 on 18-12-26
import { Card } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import ExTable from 'components/ExTable';

class TenthCard extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            {title:'应用',dataIndex:'col1',render:this.renderApk},
            {title:'未遇到崩溃问题的用户比例',dataIndex:'col2',render:this.renderProportion},
            {title:'',dataIndex:'col3'}
        ]
    }
    renderApk = (val) => {
        return (<div>
            <span><img src={require('img/apk.png')}  alt={"icon"}/></span> <span style={{color:"#039be5"}}>{val}</span>
        </div>)
    };
    renderProportion = (val) => {
        return (<p style={{textAlign: 'right'}}>{val}</p>)
    };
    render () {
        const {tenthCardData:chartData} = this.props;
        return (
            <div>
                <p className={'question'}>{chartData.question}</p>
                <Card
                    className={'card tenthCard'}
                    hoverable={true}>
                    <div style={{marginBottom:'10px'}}>
                        <span>未遇到崩溃问题的用户比例</span>
                        <span style={{float:'right'}}>1天，到12月24结束</span>
                    </div>
                    <ExTable
                        className={'tenthCard'}
                        loading={false}
                        columns={this.columns}
                        dataSource={chartData.data}
                        bordered={false}
                        tableSize={'small'}
                    />
                </Card>

            </div>
        );
    }
}

TenthCard = connect(state => {
    const { tenthCardData } = state['dashboard'];
    return { tenthCardData };
}, null)(TenthCard);

export default TenthCard;
//Added-End by yaolin.fu for XR-7139756 on 18-12-26