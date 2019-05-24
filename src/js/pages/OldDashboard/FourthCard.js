import { connect } from 'react-redux';
import ExTable from 'components/ExTable';
import { Card } from 'antd';
import WorldMap from "./WorldMap";
import HorizontalBar from './HorizontalBar';
import PeopleFeatureCard from './PeopleFeatureCard'
import PeopleInterest from './PeopleInterest'
import React from "react"

class FourthCard extends React.Component {
    constructor(props){
        super(props);
        this.tabList = [
            {
                key:'allocation',
                tab:'位置'
            },
            {
                key:'equipment',
                tab:'设备'
            },
            {
                key:'feature',
                tab:'受众特征'
            },
            {
                key:'interest',
                tab:'兴趣'
            }
        ];
        // this.contents = {
        //     allocation: <WorldMap width={'100%'} height={150} id={'dashboard_worldMap1'} chartData={this.props.fourthChartData.firstChart}/>,
        //     equipment: <HorizontalBar width={'100%'} id={'dashboard_horizontalBar1'} chartData={this.props.fourthChartData.secondChart}/>,
        //     feature: <PeopleFeatureCard width={'100%'} id={'PeopleFeatureCard'} chartData={this.props.fourthChartData.thirdChart}/>,
        //     interest: <PeopleInterest id={'dashboard_interest'} width={'100%'} height={210} chartData={this.props.fourthChartData.fourthChart}/>
        // };
        this.state = {
            activeTab:'allocation'
        };
    }
    onTabChange = (key, type) => {
        this.setState({ [type]: key });
    };
    render() {
        const {fourthChartData:chartData} = this.props;
        var content;
        switch(this.state.activeTab){
            case 'allocation':
                content = <WorldMap width={'100%'} height={140} id={'dashboard_worldMap1'} chartData={chartData.firstChart}/>
                break;
            case 'equipment':
                content = <HorizontalBar width={'100%'} id={'dashboard_horizontalBar1'} chartData={chartData.secondChart}/>
                break;
            case 'feature':
                content = <PeopleFeatureCard width={'100%'} id={'PeopleFeatureCard'} chartData={chartData.thirdChart}/>
                break;
            case 'interest':
                content = <PeopleInterest id={'dashboard_interest'} width={'100%'} height={210} chartData={chartData.fourthChart}/>
                break;
        }
        return (
            <React.Fragment>
                <p className={'question'}>{chartData.question}</p>
                <Card
                    className={'card fourthCard'}
                    style={{width: '100%'}}
                    tabList={this.tabList}
                    activeTabKey={this.state.activeTab}
                    onTabChange={(key) => {
                        this.onTabChange(key, 'activeTab');
                    }}
                >
                    {/*{this.contents[this.state.activeTab]}*/}
                    {content}
                </Card>
            </React.Fragment>
        );
    }
}

FourthCard = connect(state => {
    const { fourthChartData } = state['dashboard'];
    return { fourthChartData };
}, null)(FourthCard);

export default FourthCard;