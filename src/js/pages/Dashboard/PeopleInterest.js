//Added-Begin by yaolin.fu for XR-7139756 on 18-12-25
import React from 'react';
import ExCharts from 'components/ExCharts';

class PeopleInterest extends React.Component {
    render() {
        const {id, width, height, chartData} = this.props;
        return (
            <React.Fragment>
                <div id={'interest-title'}>
                    Affinity audience
                </div>
                <div id={'interest-per'}>
                    % of Users
                </div>
                <div id={'interest-category'}>
                    Categories
                </div>
                <ExCharts
                    container={id}
                    option={{ type: 'horizontal-bar' }}
                    chartOption={chartData.option}
                    data={id}
                    width={width}
                    minHeight={height}
                />
                <div id={'all-people'}>
                    VIEW "ALL USERS" AUDIENCE →
                </div>
            </React.Fragment>
        );
    }
}

export default PeopleInterest;
//Added-End by yaolin.fu for XR-7139756 on 18-12-25
