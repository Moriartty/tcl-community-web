import ajax from 'utils/ajax';
import appAction from 'actions/app';

let actions = {};

actions.loadRegionData = (country) => (dispatch,getState) => {
    const preData = getState().dashboard2.regionMapCard
    const data = [{}];
    let option = {
        'title.show':false,
        'title.left':'left',
        'title.top':'top',

        'visualMap.left':'left',
    };
    dispatch({type:'DASHBOARD2_REGIONMAPCARD_LOAD',data,option,mapJsonData: preData.mapJsonData});
    dispatch(appAction.loadRegion(country,'DASHBOARD2_REGIONMAPCARD_LOAD',{data:preData.data,option:preData.option}))
}

actions.loadSecondData = (exData) => dispatch => {
    const productList = ['A1X','A3','A3A TMO','Pepito VDF', 'A5','Curie', 'A3A 8 4G', 'A70A XL TMO', 'PEPITO VZW', 'U50A PLUS TMO',
        'A30A TMO', 'U3A 7 3G', 'N4', 'A70A XL MPCS'
    ];
    let option = {
        // 'title.text':exData?'各产品在'+exData.time+'进行的'+exData.actionType+'情况':'',
        // 'title.left':'left',
        // 'title.padding':[10,0],
        // 'title.textStyle':{
        //     color:'black'
        // },
        'title.show':false,
        'xAxis.data':productList,
        'xAxis.nameTextStyle.color':'black',
        'xAxis.axisLabel.rotate': -45,
        yAxis:{
            axisLabel:{
                color:'black'
            }
        },
        grid:{
            top:'2%',
            left: '3%',
            right: '3%',
            bottom: '2%',
            containLabel: true
        },
        backgroundColor:'rgba(0, 0, 0, 0)'
    };
    let data = []
    productList.forEach(function(){
        data.push(parseInt(Math.random()*9+2));
    })

    dispatch({type:'DASHBOARD2_SECONDCARD_LOAD',option,data,exData});
}


export default actions;