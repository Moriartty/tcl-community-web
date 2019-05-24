import ExCharts from 'components/ExCharts';
import {connect} from 'react-redux';
import action from 'actions/streamView';

import {Col} from "antd"

class HeatMap extends React.Component{

    componentWillMount(){
        this.props.init();
    }

    componentDidMount(){

    }

    render(){
        const {chartData} = this.props;
        return (
            <ExCharts
                container={'baiduMap'}
                option={{ type: 'baidu-map' }}
                // chartOption={chartData.option}
                data={chartData.data}
                width={'100%'}
                minHeight={'100%'}
            />
        )
    }
}

HeatMap = connect(state=>{
    const {chartData} = state['streamView'];
    return {chartData};
},dispatch=>({
    init(){
        dispatch(action.loadData());
    }
}))(HeatMap);

export default HeatMap;