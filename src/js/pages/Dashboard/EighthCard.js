import { Card } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import ExTable from 'components/ExTable';

class EighthCard extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            {title:'来源',dataIndex:'col1'},
            {title:'first_open转化',dataIndex:'col2'},
            {title:'生命周期价值',dataIndex:'col3'}
        ]
    }
    render () {
        const {eighthCardData:chartData} = this.props;
        return (
            <div>
                <p className={'question'}>{chartData.question}</p>
                <Card
                    className={'card eighthCard'}
                    hoverable={true}>
                    <div style={{marginBottom:'10px'}}>
                        <span>流量获取</span>
                        <span style={{float:'right'}}>120天，到12月19结束</span>
                    </div>
                    <ExTable
                        className={'eighthCard'}
                        loading={false}
                        columns={this.columns}
                        dataSource={chartData.data}
                        bordered={false}
                        tableSize={'small'}
                    />
                    <div style={{color:'#039be5',marginTop:'10px',float:'right'}}>查看first_open归因报告→</div>

                </Card>

            </div>
        );
    }
}

EighthCard = connect(state => {
    const { eighthCardData } = state['dashboard'];
    return { eighthCardData };
}, null)(EighthCard);

export default EighthCard;