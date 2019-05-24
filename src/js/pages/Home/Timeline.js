import { connect } from 'react-redux';
import ExCharts from 'components/ExCharts';

class Timeline extends React.Component {
    render () {
        const { width, height, id, firstChartData: chartData } = this.props;
        return (
            <React.Fragment>
                <ExCharts
                    container={id}
                    option={{ type: 'time-line' }}
                    chartOption={chartData.option}
                    data={id}
                    width={width}
                    minHeight={height}
                    onClick={this.props.handleClick}
                />
            </React.Fragment>
        );
    }
}

Timeline = connect(state => {
    const { firstChartData } = state['home'];
    return { firstChartData };
}, dispatch=>({
    handleClick(e){
        e.componentSubType==='bar'&&
        dispatch({type:'HOME_FIRSTSUBPAGE_SHOW',subPageShow:true,tag:e.name,gender:e.seriesName});
    }
}))(Timeline);

export default Timeline;
