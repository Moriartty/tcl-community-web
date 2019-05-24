import { connect } from 'react-redux';
import ExTable from 'components/ExTable';
import { Card , Icon,Divider,Tooltip,Skeleton } from 'antd';
import React from 'react';
import appAction from 'actions/app';
import ExCard from 'components/ExCard';
const defaultColors = ['#91d5ff','#69c0ff','#40a9ff','#1890ff','#096dd9','#0050b3'];

class ThirdCard extends React.PureComponent {
    constructor(props){
        super(props);
        this.columns = [
            { title: 'All users', dataIndex: 'time' },
            {title:'Week0',dataIndex:'rate0',render:this.renderTd},
            {title:'Week1',dataIndex:'rate1',render:this.renderTd},
            {title:'Week2',dataIndex:'rate2',render:this.renderTd},
            {title:'Week3',dataIndex:'rate3',render:this.renderTd},
            {title:'Week4',dataIndex:'rate4',render:this.renderTd},
            {title:'Week5',dataIndex:'rate5',render:this.renderTd},
        ]
    }
    renderTd = (val,data) => {
        return (<div style={{backgroundColor:defaultColors[Math.ceil(val/(100/6))-1]}}>
            <span>{val}%</span>
        </div>)
    }
    render () {
        const { width, height, id, thirdChartData: chartData,reHref } = this.props;
        return (
            <div>
                <p className={'question'}>{chartData.question}</p>
                <ExCard
                    className={'thirdCard'}
                    title={chartData.option['title.text']}
                    tooltip={chartData.tooltip}
                    height={370}
                    actions={[<span style={{color:'#36AFEA'}} onClick={reHref}><Icon type="arrow-right"/>VIEW NEW USER RETENTION</span>]}
                >
                    <ExTable
                        className={'thirdTable'}
                        loading={false}
                        columns={this.columns}
                        dataSource={chartData.list}
                        // showHeader={false}
                        bordered={false}
                        tableSize={'small'}
                        rowKey={'time'}
                    />
                </ExCard>
                {/*<Card*/}
                    {/*className={'card thirdCard'}*/}
                    {/*title={*/}
                        {/*<div>*/}
                            {/*<Skeleton loading={!chartData.option['title.text']} paragraph={false} title={{width:100}}>*/}
                            {/*{chartData.option['title.text']}*/}
                            {/*<Divider type={'vertical'}/>*/}
                            {/*<Tooltip placement={'top'} title={chartData.tooltip}>*/}
                                {/*<Icon type="question-circle" />*/}
                            {/*</Tooltip>*/}
                            {/*</Skeleton>*/}
                        {/*</div>}*/}
                    {/*hoverable={true}*/}
                    {/*bodyStyle={{height:268}}*/}
                    {/*actions={[<span style={{color:'#36AFEA'}} onClick={reHref}><Icon type="arrow-right"/>VIEW NEW USER RETENTION</span>]}*/}
                {/*>*/}
                    {/*<ExTable*/}
                        {/*className={'thirdTable'}*/}
                        {/*loading={false}*/}
                        {/*columns={this.columns}*/}
                        {/*dataSource={chartData.list}*/}
                        {/*// showHeader={false}*/}
                        {/*bordered={false}*/}
                        {/*tableSize={'small'}*/}
                        {/*rowKey={'time'}*/}
                    {/*/>*/}
                {/*</Card>*/}
            </div>
        );
    }
}

ThirdCard = connect(state => {
    const { thirdChartData } = state['dashboard'];
    return { thirdChartData };
}, dispatch=>({
    reHref(){
        dispatch(appAction.loadTabPage('tBase/retention'));
    }
}))(ThirdCard);

export default ThirdCard;
