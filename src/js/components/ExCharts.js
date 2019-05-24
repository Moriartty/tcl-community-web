/**
 * Created by user on 18-8-20.
 */
// import echarts from 'echarts/lib/echarts';
// import React from 'react';
// 引入柱状图
// require('echarts/lib/chart/bar');
// require('echarts/lib/chart/line');
// require('echarts/lib/chart/pie')
// require('echarts/')
// // // 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// import echarts from "echarts";
// import world from 'echarts/map/js/world';
const echarts = require('echarts');
// import bmap from 'bmap';

const backgroundColor = 'rgba(0, 0, 0, 0.2)';
const maskBgColor = 'rgba(0, 0, 0, 0.1)'
const transparent = 'rgba(0, 0, 0, 0)'
const colors = ['#722ed1', '#13c2c2', '#52c41a', '#1890ff', '#2f54eb', '#722ed1'];

class ExCharts extends React.Component {
    constructor (props) {
        super(props);
        this.dispatchType = this.dispatchType.bind(this);
    }
    dispatchType (props) {
        const { option, data, chartOption } = props;
        switch (option.type) {
            case 'normal-line':// 普通线性图
                this.chart.setOption(drawNormalLine(data, chartOption));
                break;
            case 'normal-bar':// 普通条形图
                this.chart.setOption(drawNormalBar(data, chartOption));
                break;
            case 'normal-pie':// 普通饼图
                this.chart.setOption(drawNormalPie(data, chartOption));
                break;
            case 'common':// 普通图
                this.chart.setOption(chartOption);
                break;
            case 'with-bg-pie':// 带纹理的饼图
                this.chart.setOption(drawWithBgPie(data, chartOption, this.props.itemStyle));
                break;
            case 'horizontal-bar':// 横向条形图
                this.chart.setOption(drawHorizontalBar(data, chartOption));
                break;
            case 'horizontal-stack-bar':// 横向堆积条形图
                this.chart.setOption(drawHorizontalStackBar(data, chartOption));
                break;
            case 'horizontal-stack-card-bar':// 横向堆积条形图-面板card
                this.chart.setOption(drawHorizontalStackCardBar(data, chartOption));
                break;
            case 'customized-pie':
                this.chart.setOption(drawCustomizedPie(data, chartOption));
                break;
            case 'rose-pie':
                this.chart.setOption(drawRoseChart(data,chartOption));
                break;
            case 'heat-map': //热力地图
                this.chart.setOption(drawHeatMap(data,chartOption,option));
                break;
            case 'radar-chart': //雷达图
                this.chart.setOption(drawRadarChart(data, chartOption));
                break;
            case 'time-line': //时间轴图
                this.chart.setOption(drawTimeLineChart(data, chartOption));
                break;
            case 'le-chart':
                // this.chart.setOption(data);
                this.chart.setOption(drawBubbleChart(data,chartOption));
                break;
            case 'region-map':
                this.chart.setOption(drawRegionMap(data,chartOption,this.props.country,option.mapJsonData));
                break;
            case 'baidu-map':
                this.chart.setOption(drawBaiduMap(data,chartOption));
                var bmap = this.chart.getModel().getComponent('bmap').getBMap();
                bmap.addControl(new BMap.MapTypeControl());
                // bmap.addControl(new BMap.NavigationControl({
                //     offset: new BMap.Size(80, 40),
                //     type: BMAP_NAVIGATION_CONTROL_SMALL
                // }));
                break;
        }
        //echarts折线图添加区域点击事件，而不用去点小圆点（扩大点击范围）
        if (option.type === 'normal-line'){
            this.chart.getZr().on('click',params=>{
                const pointInPixel= [params.offsetX, params.offsetY];
                if (this.chart.containPixel('grid',pointInPixel)) {
                    let xIndex=this.chart.convertFromPixel({seriesIndex:0},[params.offsetX, params.offsetY])[0];
                    let time = chartOption['xAxis.data'][xIndex];
                    let value = data[0][xIndex];
                    this.props.onClick(time, value);
                }
            });
            this.chart.getZr().on('mousemove',params=>{
                const pointInPixel= [params.offsetX, params.offsetY];
                if (this.chart.containPixel('grid',pointInPixel)) {
                    this.chart.getZr().setCursorStyle('pointer');
                }
            });
            this.chart.getZr().on('mouseout',params=>{
                const pointInPixel= [params.offsetX, params.offsetY];
                if (!this.chart.containPixel('grid',pointInPixel)) {
                    this.chart.getZr().setCursorStyle('default');
                }
            });
        }else {
            this.chart.on('click', this.props.onClick);
        }
    }
    componentDidMount () {
        const { container, theme } = this.props;
        this.chart = echarts.init(document.getElementById(container), theme || 'dark');
        // 认为一开始没有携带数据就加载进度条，等数据进来再关闭
        if (!(this.props.data && (this.props.data.length > 0||this.props.data.series))) {
            this.chart.showLoading('default', {text:'loading...',maskColor: maskBgColor,textColor: '#fff'});
        }else{
            this.dispatchType(this.props);
        }
    }
    // 异步加载触发的更新
    componentWillReceiveProps (nextProps) {
        if (nextProps.data && nextProps.data.length > 0) { this.chart.hideLoading(); }
        this.dispatchType(nextProps);
        return false;
    }
    render () {
        const { container, minHeight, width } = this.props;
        let clientWidth = document.body.clientWidth;
        return (
            <div id={container} style={{ width: width || clientWidth / 3, height: minHeight || 500 }}></div>
        );
    }
}

/**
 * 绘制普通饼图
 * */
function drawNormalPie (data, option) {
    if (!option.legendData) {
        option.legendData = data.map(function (o) {
            return o.name;
        });
    }
    let opt = {
        title: {
            text: option.title,
            subtext: option.subTitle,
            x: 'center',
            top: 15,
        },
        backgroundColor: option.backgroundColor ||backgroundColor,
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color:['#520038','#780650','#9e1068','#c41d7f','#d14190','#de68a5','#eb94be'],
        // color:option.color?option.color:['#003a8c','#0050b3','#096dd9','#1890ff','#40a9ff','#69c0ff','#91d5ff'],
        legend: option.legend||{
            orient: 'vertical',
            left: 'left',
            data: option.legendData,
            show:false
        },
        series: option.series||[
            {
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: data
            }
        ]
    };
    return opt;
}

/**
 * 玫瑰图
 */
function drawCustomizedPie (data, option) {
    return {
        backgroundColor: backgroundColor,

        title: {
            text: option.title,
            left: 'center',
            top: 15,
            textStyle: {
                color: '#ccc'
            }
        },
        // grid: {
        //     left: '5%',
        //     right: '5%',
        //     bottom: '10%',
        //     containLabel: true
        // },

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: data.sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        smooth: 0.2,
                        length: 5,
                        length2: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c41d7f',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
}

/**
 *
 */
function drawRoseChart(data,option){
    return {
        backgroundColor: backgroundColor,

        title: {
            text: option.title,
            left: 'center',
            top: 15,
            textStyle: {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // grid: {
        //     top:'20%',
        //     left: '5%',
        //     right: '5%',
        //     // bottom: '10%',
        //     containLabel: true
        // },
        toolbox: {
            show : true,
            // feature : {
            //     mark : {show: true},
            //     dataView : {show: true, readOnly: false},
            //     magicType : {
            //         show: true,
            //         type: ['pie', 'funnel']
            //     },
            //     restore : {show: true},
            //     saveAsImage : {show: true}
            // }
        },
        calculable : true,
        color:['#003a8c','#0050b3','#096dd9','#1890ff','#40a9ff','#69c0ff','#91d5ff'].reverse(),
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : ['20%', '70%'],
                // center : ['75%', '50%'],
                center: ['50%', '60%'],
                roseType : 'area',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        smooth: 0.2,
                        length: 5,
                        length2: 5
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data:data
            }
        ]
    };

}

/**
 * 绘制普通线性图
 * */
function drawNormalLine (data, option) {
    let opt = {
        grid: option.grid || {
            left: '2%',
            right: '4%',
            bottom: '5%',
            containLabel: true
        },
        title: {
            text: option['title.text']||'',
            left: 'center',
            padding: [20, 0],
            show: option['title.show']!=undefined?option['title.show']:true
        },
        tooltip: option.tooltip||{
            trigger: 'axis'
        },
        color: ['#40a9ff'],
        xAxis: {
            type: option['xAxis.type']||'category',
            data: option['xAxis.data'],
            min: option['xAxis.min'],
            max: option['xAxis.max'],
            interval:option['xAxis.interval']
        },
        yAxis: {
            'type':option['yAxis.type']||'value',
            axisLabel: {
                rotate: option['yAxis.axisLabel.rotate'] || 0,
                interval: option['yAxis.axisLabel.interval'] || 0
            },
            show:option['yAxis.show']!=undefined?option['yAxis.show']:true,
            axisLine:{
                show:option['yAxis.axisLine.show']!=undefined?option['yAxis.axisLine.show']:true
            },
            splitLine:{
                show:option['yAxis.splitLine.show']!=undefined?option['yAxis.splitLine.show']:true
            },
            'axisLabel.rotate':45,
        },
        backgroundColor: option.backgroundColor || backgroundColor,
        series: []
    };
    if (option.multiple) {
        opt.legend = option.legend;
        opt.color = option.color || colors;
    }
    data.forEach(function (o, i) {
        opt.series.push({
            // name: option.multiple ? opt.legend.data[i] : '',
            data: o,
            type: 'line',
            areaStyle: option.area,
            itemStyle:{},
            lineStyle:{
                type:'solid'
            },
            symbol:'none',
            smooth:true,
        });
    });
    return opt;
}
/**
 * 绘制普通条形图
 * */
function drawNormalBar (data, option) {
    return {
        title: {
            show: option['title.show']!=undefined?option['title.show']:true,
            text: option['title.text'],
            left: option['title.left'] || 'center',
            top: option['title.top'],
            padding: option['title.padding'] || [20, 0],
            textStyle: option['title.textStyle'] || {},
            subtext: option.subTitle
        },
        color: option.color || ['#36cfc9'],
        tooltip: option.tooltip || {
            trigger: 'axis'
        },
        xAxis: {
            data: option['xAxis.data']||[],
            axisLabel: {
                rotate: option['xAxis.axisLabel.rotate'] || 0,
                interval: option['xAxis.axisLabel.interval'] || 0,
                color:option['xAxis.nameTextStyle.color']
            },
            show: option['xAxis.show'] !== undefined ? option['xAxis.show']:true
        },
        yAxis: option.yAxis||{},
        series: [{
            type: 'bar',
            data: data
        }],
        grid: option.grid || {
            left: '5%',
            right: '8%',
            bottom: '5%',
            containLabel: true
        },
        backgroundColor: option.backgroundColor || backgroundColor
    };
}
/**
 * 绘制横向条形图
 * */
function drawHorizontalBar (data, option) {
    if (option.series.length > 0){
        return option;
    }
    let series = [];
    option.legendData.forEach(function (o, i) {
        series.push({
            name: o,
            type: 'bar',
            data: data[i]
        });
    });
    let opt = {
        title: {
            text: option.title,
            padding: [15, 10]
            // subtext: option.subTitle
        },
        color: ['#096dd9', '#40a9ff'],
        backgroundColor: backgroundColor,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            x: 'right',
            data: option.legendData,
            padding: [15, 10]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: option.yAxis
        },
        series: series
    };
    return opt;
}

/**
 * 绘制横向堆积条形图
 */
function drawHorizontalStackBar (data, option) {
    let series = [];
    option.legendData.forEach(function (o, i) {
        series.push({
            name: o,
            type: 'bar',
            stack: '占比',
            data: data[i]
        });
    });
    let opt = {
        title: {
            text: option['title.text']||'',
            padding: [15, 10],
            x: option['title.x']||'center',
            subtext: option['title.subText']||undefined,
            subtextStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                fontColor: 'white'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: ['#faad14', '#13c2c2', '#52c41a', '#1890ff', '#2f54eb', '#722ed1'],
        legend: {
            data: option.legendData,
            x: 'center',
            y: 'bottom'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: option['yAxis.type'],
            data: option['yAxis.data']
        },
        backgroundColor: option.backgroundColor||backgroundColor,
        series: series
    };
    return opt;
}
/**
 * 绘制横向堆积条形图
 */
function drawHorizontalStackBar (data, option) {
    let series = [];
    option.legendData.forEach(function (o, i) {
        series.push({
            name: o,
            type: 'bar',
            stack: '占比',
            data: data[i]
        });
    });
    let opt = {
        title: {
            text: option['title.text']||'',
            padding: [15, 10],
            x: option['title.x']||'center',
            subtext: option['title.subText']||undefined,
            subtextStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                fontColor: 'white'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: ['#faad14', '#13c2c2', '#52c41a', '#1890ff', '#2f54eb', '#722ed1'],
        // color:['#0050b3','#096dd9','#1890ff','#40a9ff'],
        legend: {
            data: option.legendData,
            x: 'center',
            y: 'bottom'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: option['yAxis.type'],
            data: option['yAxis.data']
        },
        backgroundColor: option.backgroundColor||backgroundColor,
        series: series
    };
    return opt;
}
/**
 * 绘制横向堆积条形图
 */
function drawHorizontalStackCardBar (data, option) {
    let series = [];
    option.legendData.forEach(function (o, i) {
        series.push({
            name: o,
            type: 'bar',
            stack: '占比',
            barWidth:17,
            data: data[i]
        });
    });
    let opt = {
        title: {
            text: option['title.text']||'',
            padding: [5, 0],
            x: option['title.x']||'center',
            // subtext: option.title,
            textStyle: {
                fontSize: 12,
                fontWeight: 'normal',
                color: 'black'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: option['color']||['#faad14', '#13c2c2', '#52c41a', '#1890ff', '#2f54eb', '#722ed1'],
        legend: {
            data: option.legendData,
            x: 'center',
            itemGap:25,
            textStyle: {
                fontSize: 14,
                color: 'black'
            },
            bottom:10
        },
        grid: {
            top:'0%',
            left: '3%',
            right: '4%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            show:false
        },
        yAxis: {
            show:false,
            type: option['yAxis.type'],
            data: option['yAxis.data'],
            nameTextStyle:{
                color:'black'
            }
        },
        backgroundColor: option.backgroundColor||backgroundColor,
        series: series
    };
    return opt;
}
/**
 * 绘制带背景纹理的饼图
 * */
function drawWithBgPie (data, option, itemStyle) {
    let opt = {
        title: {
            text: option.title,
            textStyle: {
                color: '#235894'
            }
        },
        tooltip: {},
        series: [{
            name: 'pie',
            type: 'pie',
            selectedMode: 'multiple',
            selectedOffset: 30,
            clockwise: true,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 18,
                        color: '#235894'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#235894'
                    }
                }
            },
            data: data,
            itemStyle: itemStyle
        }]
    };
    return opt;
}

/**
 * 绘制热力地图
 * @param data
 * @param option
 * @returns {{title: {text: string, left: string, top: string, padding: number[], textStyle: {color: string}}, backgroundColor: string, visualMap: {min: number, max: number, splitNumber: number, inRange: {color: string[]}, textStyle: {color: string}}, geo: {map: string, label: {emphasis: {show: boolean, color: string}}, roam: boolean, zoom: number, itemStyle: {normal: {borderColor: string, areaColor: string}, emphasis: {areaColor: string}}, shadowColor: string, shadowBlur: number}, series: {name: string, type: string, coordinateSystem: string, data: *, symbolSize: number}[]}}
 */
function drawHeatMap (data, option,exData) {
    const {selectedCountry,mapJsonData,feature:myFeature} = exData

    let opt = {
        title: {
            text: 'ROM全球用户分布图（热点图）',
            // subtext: 'data from PM25.in',
            // sublink: 'http://www.pm25.in',
            left: 'center',
            top: 'bottom',
            padding: [20, 0],
            textStyle: {
                color: '#fff'
            },
            show:option.title&&option.title.show!==undefined?option.title.text:true
        },
        backgroundColor: 'rgba(0,0,0,0)',
        grid: {
            left: '2%',
            right: '0%',
            bottom: '2%',
            top:'0%',
            containLabel: true
        },
        visualMap: option.visualMap||{
            min: 70000,
            max: 1100000,
            splitNumber: 8,
            inRange: {
                color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
            },
            textStyle: {
                color: '#fff'
            },
            calculable: true,
            show:true
        },
        tooltip: {
            trigger: 'item',
            // confine:true,
            // axisPointer: { // 坐标轴指示器，坐标轴触发有效
            //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            // }
            formatter: function (params) {
                //使用geo时，获取value有变化
                return params.name + ' : ' + (params.value[2]?params.value[2]:params.data.value);
            }
        },
        toolbox:{
            feature: myFeature?{...myFeature}:undefined,
            bottom:25,
            right:30,
            itemSize:20,
            iconStyle:{
                borderWidth:2
            }
        },
        geo: option.useGeo?{
            map: 'world',
            selectedMode: 'single',
            label: {
                emphasis: {
                    show: true,
                    color: 'white'
                }
            },
            roam: false,
            zoom: 1.2,
            itemStyle: {
                normal: {
                    // areaColor: '#323c48',
                    borderColor: '#096dd9',
                    // borderWidth:1,
                    areaColor: '#002766'
                    // borderColor:''
                },
                emphasis: {
                    // areaColor: '#2a333d'
                    areaColor: '#40a9ff',
                }
            },
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowBlur: 10,
            regions: [{
                name: selectedCountry,
                selected:true,
                // itemStyle: {
                //     // areaColor: '#40a9ff',
                //     // color: 'red'
                // }
            }]
        }:undefined,
        series: [{
            name: 'AQI',
            type: option.type?option.type:'scatter',
            coordinateSystem: option.useGeo?'geo':undefined,
            map:'world',
            data:data,
            symbolSize: 15,
            itemStyle: {
                normal: {
                    // areaColor: '#323c48',
                    borderColor: '#096dd9',
                    // borderWidth:1,
                    areaColor: '#e6f7ff'
                    // borderColor:''
                },
                emphasis: {
                    areaColor: '#faad14',
                }
            },
        }]
    };
    return opt;
}

/**
 * 雷达图
 * @param data
 * @param option
 * @returns {{title: {text: string}, tooltip: {}, legend: {data: string[]}, radar: {name: {textStyle: {color: string, backgroundColor: string, borderRadius: number, padding: number[]}}, indicator: *[]}, series: *[]}}
 */
function drawRadarChart (data, option) {
    return {
        title: {
            text: option.title,
            padding: [10, 10]
        },
        tooltip: {},
        legend: {
            x: 'right',
            data: option.legend,
            padding: [10, 10]
        },
        color: ['#1890ff', '#13c2c2'],
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: option.indicator
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: data
        }],
        backgroundColor: backgroundColor
    };
}

/**
 * Time-Line Chart
 */
function drawTimeLineChart (data, option) {
    return option;
}

/**
 * Bubble-Chart
 */
function drawBubbleChart (data, option) {
    let opt = {
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            type:'time'
            // show: false
        },
        yAxis: {
            name:'销量(万)',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                },
                show:false
            },
            scale: true,
            // show: false
        },
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                const data = params.data;
                return params.seriesName+'<br/>'+'发布日期:'+data[0]+'<br/>'+'销量:'+data[1]+'万';
            }
        },
        grid: {
            top:'7%',
            left: '2%',
            right: '5%',
            bottom: '6%',
            containLabel: true
        },
        series: []
    };
    data.forEach(function (o, i, arr) {
        opt.series.push({
            name: o[0][3],
            data: data[i],
            type: 'scatter',
            symbolSize: function (data) {
                return data[2];
            },
            symbol:o[0][5]?'image://'+o[0][5]:'circle',
            label: {
                // emphasis: {
                //     show: true,
                //     formatter: function (param) {
                //         return param.data[3];
                //     },
                //     position: 'top'
                // },
                normal: {
                    show: false,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    fontWeight: 'bold',
                    position: 'inside'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(129, 227, 238)'
                    }, {
                        offset: 1,
                        color: 'rgb(25, 183, 207)'
                    }]),
                    borderColor:'#faad14'
                }
            }
        });
    });
    //搜索高亮处理
    opt.series.forEach((o,i)=>{
        o.itemStyle.normal.borderWidth = o.data[0][4]?3:0;
    })

    return opt;
}

/**
 * 区域地图
 * @param data
 * @returns {{title: {text: string, subtext: string, sublink: string, left: string}, tooltip: {trigger: string, showDelay: number, transitionDuration: number, formatter: (function(*): string)}, visualMap: {left: string, min: number, max: number, inRange: {color: string[]}, text: string[], calculable: boolean}, toolbox: {show: boolean, left: string, top: string, feature: {dataView: {readOnly: boolean}, restore: {}, saveAsImage: {}}}, backgroundColor: string, series: {name: string, type: string, roam: boolean, map: string, itemStyle: {emphasis: {label: {show: boolean}}}, textFixed: {Alaska: number[]}, data: *}[]}}
 */
function drawRegionMap(data,option,country,mapJsonData){
    let region;
    try{
        //首字母大写
        country = country.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
        if(JSON.stringify(mapJsonData)!=='{}'){
            region = country;
            const json = mapJsonData;
            echarts.registerMap(region, json, {});
        }else
            region = 'world';
    }catch (e) {
        region = 'world'
    }finally {
        let opt = {
            title: {
                text: option['title.text'],
                show: option['title.show'],
                // subtext: 'Data from www.census.gov',
                // sublink: 'http://www.census.gov/popest/data/datasets.html',
                left: option['title.left'],
                top:option['title.top'],
                textStyle:{
                    color:'black'
                }
            },
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
                formatter: function (params) {
                    var value = (params.value + '').split('.');
                    value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                    return params.seriesName + '<br/>' + params.name + ': ' + value;
                }
            },
            visualMap: {
                show:false,
                left: option['visualMap.left']||'right',
                min: option['visualMap.min']||500000,
                max: option['visualMap.max']||38000000,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text:['High','Low'],           // 文本，默认为数值文本
                calculable: true,
                textStyle:{
                    color:'black'
                }
            },
            toolbox: {
                show: true,
                //orient: 'vertical',
                left: 'left',
                top: 'top',
                // feature: {
                //     dataView: {readOnly: false},
                //     restore: {},
                //     saveAsImage: {}
                // }
            },
            backgroundColor:transparent,
            series: [
                {
                    name: 'USA PopEstimates',
                    type: 'map',
                    roam: false,
                    zoom:1.2,
                    map: region,
                    itemStyle:{
                        emphasis: {
                            label:{
                                show:true,
                                color:'black'
                            },
                            areaColor: '#40a9ff',
                        }
                    },
                    // 文本位置修正
                    textFixed: {
                        Alaska: [20, -20]
                    },
                    data:data
                }
            ]
        };
        return opt;
    }
}

function drawBaiduMap(data,option){
    return {
        animation: false,
        bmap: {
            center: [38.024, 23.44],
            roam: true,
            zoom: 4,
            scaleLimit:{
                min:1,
                max:50
            },
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['#e6fffb','#b5f5ec','#87e8de','#5cdbd3','#36cfc9','#13c2c2','#08979c','#006d75','#00474f']
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: data,
            pointSize: 5,
            blurSize: 6,
        }],
        //这里不设置透明会一片黑看不见地图
        backgroundColor:transparent
    };
}

export default ExCharts;