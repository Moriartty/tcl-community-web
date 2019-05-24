import { objectAppend } from '../utils';

const defaultState = {
    // subPageShow:false,
    detailPageLoading:true,
    selectedCountry:'',
    selectedProduct:'',
    regionMapCard:{
        option:{},
        data:{},
        mapJsonData:{}
    },
    secondCard:{
        option:{},
        data:[],
        exData:{}
    }
}

export default (state,action) => {
    let newState = {};
    switch(action.type){
        // case 'DASHBOARD2_SUBPAGE_SHOW':
        //     newState.subPageShow = action.subPageShow;
        //     break;
        case 'DASHBOARD2_DETAILPAGE_LOADING':
            newState.detailPageLoading = action.detailPageLoading;
            break;
        case 'DASHBOARD2_COUNTRY_CHANGE':
            newState.selectedCountry = action.selectedCountry;
            break;
        case 'DASHBOARD2_REGIONMAPCARD_LOAD':
            newState.regionMapCard = {
                option:action.option,
                data:action.data,
                mapJsonData: action.mapJsonData
            }
            break;
        case 'DASHBOARD2_SECONDCARD_LOAD':
            newState.secondCard = {
                option:action.option||state.secondCard.option,
                data:action.data||state.secondCard.data,
                exData: action.exData||state.secondCard.exData
            }
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}