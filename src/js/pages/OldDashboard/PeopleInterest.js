//Added-Begin by yaolin.fu for XR-7139756 on 18-12-25
import React from 'react';
import ExCharts from 'components/ExCharts';

class PeopleInterest extends React.Component {
    render() {
        const {id, width, height, chartData} = this.props;
        return (
            <React.Fragment>
                <div id={'interest-title'}>
                    兴趣相似的受众群体
                </div>
                <div id={'interest-per'}>
                    用户百分比
                </div>
                <div id={'interest-category'}>
                    类别
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
                    查看所有受众群体→
                </div>
            </React.Fragment>
        );
    }
}

export default PeopleInterest;
//Added-End by yaolin.fu for XR-7139756 on 18-12-25
