import { connect } from 'react-redux';
import ExTable from 'components/ExTable';
import { Card , Icon } from 'antd';
import React from 'react';
const defaultColors = ['#91d5ff','#69c0ff','#40a9ff','#1890ff','#096dd9','#0050b3'];

class ThirdCard extends React.PureComponent {
    constructor(props){
        super(props);
        this.columns = [
            { title: '所有用户', dataIndex: 'time' },
            {title:'第0周',dataIndex:'rate0',render:this.renderTd},
            {title:'第1周',dataIndex:'rate1',render:this.renderTd},
            {title:'第2周',dataIndex:'rate2',render:this.renderTd},
            {title:'第3周',dataIndex:'rate3',render:this.renderTd},
            {title:'第4周',dataIndex:'rate4',render:this.renderTd},
            {title:'第5周',dataIndex:'rate5',render:this.renderTd},
        ]
    }
    renderTd = (val,data) => {
        return (<div style={{backgroundColor:defaultColors[Math.floor(val/(100/6))]}}>
            <span>{val}%</span>
        </div>)
    }
    render () {
        const { width, height, id, thirdChartData: chartData } = this.props;
        return (
            <div>
                <p className={'question'}>{chartData.question}</p>
                <Card
                    className={'card thirdCard'}
                    title={chartData.option['title.text']}
                    hoverable={true}
                    bodyStyle={{height:265}}
                    actions={[<span><Icon type="arrow-right"/>查看新用户留存率</span>]}
                >
                    <ExTable
                        className={'thirdTable'}
                        loading={false}
                        columns={this.columns}
                        dataSource={chartData.list}
                        // showHeader={false}
                        bordered={false}
                        tableSize={'small'}
                    />
                </Card>
            </div>
        );
    }
}

ThirdCard = connect(state => {
    const { thirdChartData } = state['dashboard'];
    return { thirdChartData };
}, null)(ThirdCard);

export default ThirdCard;
