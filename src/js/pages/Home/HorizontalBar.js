/**
 * Created by user on 18-8-10.
 */
/**
 * Created by user on 18-8-10.
 */
import React, { Component } from 'react';
import ExCharts from 'components/ExCharts';

const option = {
    title: 'ROM APP使用时长排行',
    subTitle: '数据来自网络',
    legendData: ['2018年', '2017年'],
    yAxis: ['Contacts', 'Camera', 'Messaging', 'Gallery', 'Boost', 'Clock'].reverse()

};
const data = [[422, 358, 294, 259, 200, 177].reverse(), [389, 348, 274, 269, 230, 157].reverse()];

class HorizontalBar extends Component {
    render () {
        const { width, height, id } = this.props;
        return (
            <React.Fragment>
                <ExCharts container={id} option={{ type: 'horizontal-bar' }} chartOption={option} data={data} width={width} minHeight={height}/>
            </React.Fragment>
        );
    }
}

export default HorizontalBar;
