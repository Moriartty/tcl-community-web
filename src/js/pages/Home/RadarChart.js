import ExCharts from 'components/ExCharts';
let data = [
    {
        value: [4300, 10000, 28000, 35000, 50000, 19000],
        name: '预算分配'
    },
    {
        value: [5000, 14000, 28000, 31000, 42000, 21000],
        name: '实际开销'
    }
];
const option = {
    title: '预算雷达图',
    legend: ['预算分配', '实际开销'],
    indicator: [
        { name: '销售', max: 6500 },
        { name: '管理', max: 16000 },
        { name: '信息技术', max: 30000 },
        { name: '客服', max: 38000 },
        { name: '研发', max: 52000 },
        { name: '市场', max: 25000 }
    ]
};

class RadarChart extends React.Component {
    render () {
        const { width, height, id } = this.props;
        return (
            <React.Fragment>
                <ExCharts container={id} option={{ type: 'radar-chart' }} chartOption={option} data={data} width={width} minHeight={height}/>
            </React.Fragment>
        );
    }
}
export default RadarChart;
