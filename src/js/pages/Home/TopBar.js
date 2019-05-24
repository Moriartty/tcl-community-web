import 'less/components/numScroll';
import {Row, Radio, Input, Icon} from 'antd'
import ExFormItem from 'components/ExFormItem';
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import action from 'actions/home';
let plugin = require('components/NumScroll');

function getMockData(val,randomVal){
    const baseVal = 20000000;
    const fakeVal = val*100;
    return baseVal+fakeVal+randomVal;

}


class TopBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            curTime: moment().format('YYYY-MM-DD HH:mm:ss'),
            // activeNum: parseInt(((Math.random())*0.2 + 2) * 10000000),
            randomVal: parseInt(Math.random()*100),
            searchKey:''
        };
    }
    componentDidMount () {
        this.timeInterval = setInterval(() => {
            this.setState({
                curTime: moment().format('YYYY-MM-DD HH:mm:ss')
            });
        }, 1000);
        plugin.test('#dataNums', {
            // deVal: this.state.activeNum
            deVal: getMockData(~~this.props.activityCount,this.state.randomVal)
        });
        this.numInterval = setInterval(() => {
            // let temp = this.state.activeNum;
            // this.setState({ activeNum: parseInt((Math.random() - 0.1) * 100 + temp) });
            this.setState({randomVal: parseInt(Math.random()*100)})
            this.props._getActivityCount();
        }, 3000);
    }

    componentDidUpdate () {
        plugin.test('#dataNums', {
            // deVal: parseInt(this.state.activeNum)
            deVal: getMockData(~~this.props.activityCount,this.state.randomVal)
        });
    }
    componentWillUnmount () {
        clearInterval(this.timeInterval);
        clearInterval(this.numInterval);
    }
    handleChange = (e) => {
        this.setState({ searchKey: e.target.value});
    };
    handleClear = () => {
        this.setState({ searchKey: '' });
        this.props.onSearch(this.props.bubbleChartData,'')
    };
    render () {
        const {mapType,onSearch} = this.props;
        const suffix = this.state.searchKey && <Icon key="1" type="close-circle" onClick={this.handleClear} style={{ color: '#ddd', marginRight: 5 }}/>;
        return (
                <React.Fragment>
                    {
                        mapType==='map'?
                            <React.Fragment>
                                <div className={'calendar'}>{this.state.curTime}</div>
                                {/* <div id="dataNums"> </div> */}
                                <div className={'activeNum'}>
                                    <span>实时在线人数：</span>
                                    <div id="dataNums"> </div>
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Input.Search placeholder="请输入指定产品"
                                              value={this.state.searchKey}
                                              onChange={this.handleChange}
                                              onSearch={onSearch.bind(this,this.props.bubbleChartData)}
                                              style={{ maxWidth: 500 }}
                                              suffix={suffix} enterButton/>
                            </React.Fragment>
                    }
                    <div style={{ position: 'absolute', right: '10px' }}>
                        <Radio.Group onChange={this.props.toggleChange} defaultValue={this.props.mapType} size={'small'}>
                            <Radio.Button key="en" value='project'>产品</Radio.Button>
                            <Radio.Button key="cn" value='map'>地图</Radio.Button>
                        </Radio.Group>
                    </div>
                </React.Fragment>
        );
    }
}

TopBar = connect(state => {
    const { mapType,bubbleChartData,activityCount } = state['home'];
    return { mapType,bubbleChartData,activityCount };
}, dispatch => ({
    toggleChange (e) {
        dispatch(action.toggleMap(e.target.value));
    },
    onSearch(chartData,value){
        dispatch(action.refreshBubble(value,chartData));
        // console.log(value);
    },
    _getActivityCount(){
        dispatch(action.getActivityCount());
    }
}))(TopBar);

export default TopBar;
