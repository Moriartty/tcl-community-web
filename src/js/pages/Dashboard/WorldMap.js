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
            { title: 'Country/Region', dataIndex: 'region' },
            { title: 'Sessions', dataIndex: 'count' },
            { title: '% Total', dataIndex: 'percent' },
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
                        [{ name: 'India', value: 107350 },
                            { name: 'Indonesia', value: 33802 },
                            { name: 'Brazil', value: 28294 }]
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
