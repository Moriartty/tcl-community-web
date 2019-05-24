import {Tabs, Icon, Col} from 'antd'
import {connect} from 'react-redux';
import ExCharts from 'components/ExCharts';
const TabPane = Tabs.TabPane;

class FirstCard extends React.Component{
    renderTabBar = (props, DefaultTabBar) => {
        return (<DefaultTabBar/>)
    };
    render(){
        return (
            <React.Fragment>
                <Tabs defaultActiveKey="1">
                    <TabPane
                        tab={
                            <div>
                                <p>事件计数</p>
                                <p>1923万</p>
                                {/*<ExCharts*/}
                                    {/*container={'first-tab-pane'}*/}
                                    {/*theme={'vintage'}*/}
                                    {/*option={{ type: 'normal-line' }}*/}
                                    {/*chartOption={chartData.option}*/}
                                    {/*data={chartData.data}*/}
                                    {/*width={'100%'}*/}
                                    {/*minHeight={30}*/}
                                {/*/>*/}
                            </div>
                        }
                        key="1"
                        style={{ height: 200 }}
                    >Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </React.Fragment>
        )
    }
}
FirstCard = connect(null,null)(FirstCard);

export default FirstCard;