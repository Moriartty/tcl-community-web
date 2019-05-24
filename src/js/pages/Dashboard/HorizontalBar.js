import ExCharts from 'components/ExCharts';
import { connect } from 'react-redux';

class HorizontalBar extends React.Component {
    render () {
        const { width, height, id, chartData } = this.props;
        return (
            <div>
                <ExCharts
                    container={id}
                    option={{ type: 'horizontal-stack-card-bar' }}
                    chartOption={chartData.option}
                    data={chartData.data}
                    width={width}
                    minHeight={100}
                />
                <div style={{marginTop:'10px',marginBottom:'10px',height:'1px',backgroundColor:'#999'}}></div>
                <ExCharts
                    container={'dashboard_horizontalBar2'}
                    option={{ type: 'horizontal-stack-card-bar' }}
                    chartOption={chartData.option2}
                    data={chartData.data2}
                    width={width}
                    minHeight={100}
                />
                <div style={{color:'#039be5',marginTop:'30px',marginRight:'20px',float:'right'}}>VIEW "ALL USERS" AUDIENCE →</div>
            </div>
        );
    }
}

HorizontalBar = connect(null, null)(HorizontalBar);

export default HorizontalBar;