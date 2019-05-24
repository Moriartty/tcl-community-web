/**
 * Created by user on 18-8-10.
 */
import React, { Component } from 'react';

import ExCharts from 'components/ExCharts';
import moment from 'moment';
import { connect } from 'react-redux';
import action from 'actions/app';

class NormalBar extends Component {
    constructor (props) {
        super(props);
        // this.state = { data: [] };
    }

    handleClick = (e) => {
        const appName = e.name;
        this.props.reHref(appName,e.data);
    }

    render () {
        const { width, height, id, fifthChartData: chartData } = this.props;
        return (
            <React.Fragment>
                <ExCharts
                    container={id}
                    option={{ type: 'normal-bar' }}
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

NormalBar = connect(state => {
    const { fifthChartData } = state['home'];
    return { fifthChartData };
}, dispatch => ({
    reHref(appName,tempData){
        // dispatch({type:'HOME_FIFTHSUBPAGE_SHOW',subPageShow:true,selectedProduct:appName});
        dispatch(action.loadTabPage('tBase/dashboard'))
        dispatch({ type: 'DASHBOARD_SEARCHPARAMS_CHANGE', params:{appName:appName} });
        dispatch({type:'DASHBOARD_SIXTHCHART1_LOAD',tempData});
        // setTimeout(function(){
        //     dispatch({type:'DASHBOARD_SUBPAGE_SHOW',subPageShow:true});
        //     dispatch({type:'DASHBOARD_SELECTEDPROD_CHANGE',selectedProduct:appName})
        // },100);
    }
}))(NormalBar);

export default NormalBar;