import ajax from 'utils/ajax';
import appAction from 'actions/app';

let actions = {};

actions.initAllChart = (selectedProduct,selectedCountry) => dispatch => {
    dispatch(actions.loadFirstChart(selectedProduct,selectedCountry));
    dispatch(actions.loadSecondChart(selectedProduct,selectedCountry));
    dispatch(actions.loadThirdChart(selectedProduct,selectedCountry));
    dispatch(actions.loadFourthChart(selectedProduct,selectedCountry));
}

actions.loadFirstChart=(selectedProduct,selectedCountry)=>(dispatch,getState)=>{
    const state = getState().dashboardDefect;
    const preData = state.firstChartData;
    let option = {
        'title.show':false,
        'title.left':'left',
        'title.top':'top',

        'visualMap.left':'left',
    };

    // let data={
    //     // country:selectedCountry,
    //     selectedProduct:selectedProduct,
    //     data:[1],
    // }
    let data = [1];
    dispatch({type:'DASHBOARD4_FIRST_CHART_DATA',data,option,mapJsonData: preData.mapJsonData});
    dispatch(appAction.loadRegion(selectedCountry,'DASHBOARD4_FIRST_CHART_DATA',{data:preData.data,option:preData.option}))
}
actions.loadSecondChart=(selectedProduct,selectedCountry)=>dispatch=>{
    let data={
            data:["1091", "1021", "1001", "901", "771", "621", "611", "511", "491", "441", "391", "361", "341"],
            option:{
                color: ["#36cfc9"],
                tooltip: {
                    trigger: "axis"
                },
                xAxis: {
                    data: ["A1X", "A3", "A5", "Pepito VDF", "Curie", "A3A 8 4G", "A70A XL TMO", "PEPITO VZW", "U50A PLUS TMO", "A30A TMO", "U3A 7 3G", "N4", "A70A XL MPCS"],
                    axisLabel: {
                        rotate: -45,
                        interval: 0,
                        color: "black"
                    },
                    show: true
                },
                yAxis: {
                    axisLabel: {
                        color: "black"
                    }
                },
                series: [{
                    type: "bar",
                    data: ["1091", "1021", "1001", "901", "771", "621", "611", "511", "491", "441", "391", "361", "341"]}],
                grid: {
                    top:'2%',
                    left: "5%",
                    right: "8%",
                    bottom: "2%",
                    containLabel: true
                },
                backgroundColor: "rgba(0, 0, 0, 0)"
            }
    }
    dispatch({type:'DASHBOARD4_SECOND_CHART_DATA',data:data});

}
actions.loadThirdChart=(selectedProduct,selectedCountry)=>dispatch=>{
    let data= {
        data: [1],
        option: {
            xAxis: {
                type: 'category',
                data: []
            },
            legend: {
                show: false,
                data: ['28天', '7天', '1天']
            },
            grid: {
                top:'2%',
                left: "5%",
                right: "8%",
                bottom: "2%",
                containLabel: true
            },
            yAxis: {
                type: 'value'
            },
            tooltip: {
                trigger: 'axis'
            },
            series: [{
                data: [],
                type: 'line'
            }]
        }
    }
    let startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
    for(let i=0;i<=30;i+=1){
        data.option.xAxis.data.push(moment(startDate).add(i,'days').format('YYYY-MM-DD'));
        data.option.series[0].data.push(parseInt(Math.random() * 100) + 200)
    }

    dispatch({type:'DASHBOARD4_THIRD_CHART_DATA',data:data});
}
actions.loadFourthChart=(selectedProduct,selectedCountry)=>dispatch=>{
    let data= {
        data: [1],
        option: {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                padding:[50,20],
                data: ['0-3个月', '3-6个月', '6个月-1年', '1-2年','2年以上']
            },
            grid: {
                top:'2%',
                left: "5%",
                right: "8%",
                bottom: "2%",
                containLabel: true
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 335, name: '0-3个月'},
                        {value: 310, name: '3-6个月'},
                        {value: 234, name: '6个月-1年'},
                        {value: 335, name: '1-2年'},
                        {value: 121, name: '2年以上'}
                    ]
                }
            ]
        }
    }

    dispatch({type:'DASHBOARD4_FOURTH_CHART_DATA',data:data});
}

export default actions;