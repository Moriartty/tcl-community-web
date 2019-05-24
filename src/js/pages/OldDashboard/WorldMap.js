import React from 'react';
import ExCharts from 'components/ExCharts';
import ExTable from 'components/ExTable';
import { connect } from 'react-redux';
import action from 'actions/home';


class WorldMap extends React.Component {
    constructor (props) {
        super(props);
        this.state = { selectCountry: '' };
        this.columns = [
            { title: '国家/地区', dataIndex: 'region' },
            { title: '会话数', dataIndex: 'count' },
            { title: '总用户数百分比', dataIndex: 'percent' },
        ]
    }
    handleClick = (e) => {
        if (e.name !== this.state.selectCountry) {
            this.setState({ selectCountry: e.name });
            // this.props.onClick(e.name);
        }
    }
    render () {
        const { width, height, id ,chartData} = this.props;
        return (
            <React.Fragment>
                <ExCharts
                    container={id}
                    option={{ type: 'heat-map' }}
                    data={
                        [{ name: 'China', value: 300 },
                            { name: 'United States', value: 800 },
                            { name: 'France', value: 500 }]
                    }
                    chartOption={chartData.option}
                    width={width}
                    minHeight={height}
                    onClick={this.handleClick}
                />
                <ExTable className={'firstTable'}
                         loading={false}
                         columns={this.columns}
                         dataSource={chartData.list}
                    // showHeader={false}
                         bordered={false}
                         tableSize={'small'}
                />
            </React.Fragment>
        );
    }
}
WorldMap = connect(null, dispatch => ({
    onClick (name) {
        dispatch(action.loadFirstChart(name));
        dispatch(action.loadSecondChart());
        dispatch(action.loadThirdChart());
        dispatch(action.loadFourthChart(name));
        dispatch(action.loadFifthChart());
    }
}))(WorldMap);

export default WorldMap;
