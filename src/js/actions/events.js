import ajax from 'utils/ajax';
import moment from 'moment';

let actions = {};
actions.loadEvents = () => dispatch => {
    const mockData = [
        {id:0,name:'screen_view'},
        {id:1,name:'select_content'},
        {id:2,name:'session_start'},
        {id:3,name:'first_open'},
        {id:4,name:'app_remove'},
        {id:5,name:'app_update'},
        {id:6,name:'os_update'},
        {id:7,name:'app_clear_data'}
    ];
    dispatch({type:'EVENTS_EVENTS_LOAD',data:mockData});
}

actions.getEventCount = () => dispatch => {
    const option = {
        // 'xAxis.type':'time',
        'xAxis.data': [],
        'yAxis.type':'value',
        'yAxis.axisLine.show':false,
        'yAxis.splitLine.show':true,
        'yAxis.axisLabel.rotate':45,

        'title.text':'Active users (K)',
        'title.show':false,

        backgroundColor: 'rgba(0, 0, 0, 0)',
        grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            top: '3%',
            containLabel: true
        },
        multiple: true,
        color: ['#4285f4'],

        legend: {
            show: false,
            data: ['1-Day']
        }
    };
    let startDate = moment().subtract(31, "days").format("YYYY-MM-DD");
    for(let i=1;i<=30;i++){
        option['xAxis.data'].push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
    }
    option.legend.data.forEach(function (o,i) {
        var temp = [];
        for (let j = 0; j < option['xAxis.data'].length ; j++) {
            temp.push(parseInt(((Math.random() * 1) + 2) * 10)*(i+3)*4);
        }
        data.push(temp);
    });
    dispatch({ type: 'DASHBOARD_FIRSTCHART_LOAD', data, option });
}

export default actions