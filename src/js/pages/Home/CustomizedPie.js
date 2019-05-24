/**
 * Created by user on 18-8-20.
 */
import React from 'react';
import ExCharts from 'components/ExCharts';
import { connect } from 'react-redux';
import dash4Action from 'actions/dashboardDefect';
import action from 'actions/app';

class CustomizedPie extends React.PureComponent {
    handleClick = (e) => {
        this.props.reHref(this.props.selectedProduct,this.props.selectedCountry,e.data.name);
    }
    render () {
        const { width, height, id, secondChartData: chartData } = this.props;
        return (
            <React.Fragment>
                <ExCharts
                    container={id}
                    option={{ type: 'normal-pie' }}
                    // option={{type:'customized-pie'}}
                    data={chartData.data}
                    chartOption={chartData.option}
                    width={width}
                    minHeight={height}
                    onClick={this.handleClick}
                />
            </React.Fragment>
        );
    }
}
CustomizedPie = connect(state => {
    const { secondChartData ,selectedCountry,selectedProduct} = state['home'];
    return { secondChartData ,selectedCountry,selectedProduct};
}, dispatch => ({
    reHref(product,country,pain){
        dispatch(action.loadTabPage('logMgr/dashboard4'));
        dispatch(dash4Action.initAllChart(product,country,pain))
        dispatch({type:'DASHBOARD4_SEARCHPARAMS_CHANGE',country,product,pain});
        // dispatch({type:'HOME_SECONDSUBPAGE_SHOW',subPageShow:true,selectedProduct:pain});
    }
}))(CustomizedPie);

export default CustomizedPie;
