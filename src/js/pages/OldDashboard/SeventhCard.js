import { Card } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import ExTable from 'components/ExTable';

class SeventhCard extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            {title:'应用',dataIndex:'app',render:this.renderApk},
            {title:'版本',dataIndex:'version'},
            {title:'状态',dataIndex:'state',render:this.renderTd},
        ]
    }
    renderApk = (val,data) => {
        return (<div>
            <span><img src={require('img/apk.png')} /></span> <span style={{color:"#039be5"}}>{val}</span>
        </div>)
    }
    renderTd = (val,data) => {
        return (<span style={val=='成功'?{color:"green"}:{color:"red"}}>{val}</span>)
    }
    render () {
        const {seventhCardData:chartData} = this.props;
        return (
            <div>
                <p className={'question'}>{chartData.question}</p>
                <Card
                    className={'card seventhCard'}
                    title={chartData.data.listTitle}
                    hoverable={true}>
                    <ExTable
                        className={'seventhCard'}
                        loading={false}
                        columns={this.columns}
                        dataSource={chartData.data.dataSource}
                        bordered={false}
                        tableSize={'small'}
                    />

                </Card>

            </div>
        );
    }
}

SeventhCard = connect(state => {
    const { seventhCardData } = state['dashboard'];
    return { seventhCardData };
}, null)(SeventhCard);

export default SeventhCard;