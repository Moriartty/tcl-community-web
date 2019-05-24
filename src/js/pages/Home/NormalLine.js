/**
 * Created by user on 18-8-10.
 */
import React from 'react';
import ExCharts from 'components/ExCharts';
import { connect } from 'react-redux';
import action from 'actions/app';
import dash3Action from 'actions/dashboard3';

class NormalLine extends React.Component {
    handleClick = (time, value) => {
        if (value){
            this.props.reHref(this.props.selectedCountry,time, value);
        }
    };
    render () {
        const { width, height, id, thirdChartData: chartData } = this.props;
        return (
            <React.Fragment>
                <div onClick={this.handleClick}>
                    <ExCharts
                        container={id}
                        option={{ type: 'normal-line' }}
                        chartOption={chartData.option}
                        data={chartData.data}
                        width={width}
                        minHeight={height}
                        onClick={this.handleClick}
                    />
                </div>
            </React.Fragment>
        );
    }
}

NormalLine = connect(state => {
    const { thirdChartData,selectedCountry } = state['home'];
    return { thirdChartData,selectedCountry };
}, dispatch => ({
    reHref(country,time,value){
        dispatch(action.loadTabPage('logMgr/dashboard3'));
        dispatch(dash3Action.initAllChart(country,time,value))
        dispatch({type:'DASHBOARD3_SEARCHPARAMS_CHANGE',country,time,value});
        // dispatch({ type: 'DASHBOARD3_COUNTRY_CHANGE', selectedCountry: country});
        // dispatch({type:'DASHBOARD3_SECONDCARD_LOAD',exData:{time,actionType:type}})
        // dispatch({type:'HOME_THIRDSUBPAGE_SHOW',subPageShow:true,time:time,value:value});
    }
}))(NormalLine);

export default NormalLine;
