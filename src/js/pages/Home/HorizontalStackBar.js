import ExCharts from 'components/ExCharts';
import { connect } from 'react-redux';
import action from 'actions/app';

class HorizontalStackBar extends React.Component {
    handleClick = (e) => {
        this.props.reHref(e.name,e.seriesName,this.props.selectedCountry);
    }
    render () {
        const { width, height, id, fourthChartData: chartData } = this.props;
        return (
            <React.Fragment>
                <ExCharts
                    container={id}
                    option={{ type: 'horizontal-stack-bar' }}
                    chartOption={chartData.option}
                    data={chartData.data}
                    width={width}
                    minHeight={height}
                    onClick={this.handleClick}
                />
            </React.Fragment>
        );
    }
}

HorizontalStackBar = connect(state => {
    const { fourthChartData,selectedCountry } = state['home'];
    return { fourthChartData,selectedCountry };
}, dispatch => ({
    reHref(time,type,country){
        dispatch(action.loadTabPage('logMgr/dashboard2'))
        dispatch({ type: 'DASHBOARD2_COUNTRY_CHANGE', selectedCountry: country});
        dispatch({type:'DASHBOARD2_SECONDCARD_LOAD',exData:{time,actionType:type}})
    }
}))(HorizontalStackBar);

export default HorizontalStackBar;
