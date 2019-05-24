import { objectAppend } from '../utils';

const defaultState = {
    subPageShow:false,
    selectCountry:'world',
    time:'',
    value:'',
    detailPageLoading:true,
    regionMapCard:{
        option:{},
        data:{},
        mapJsonData:{}
    },
    secondCard:{
        option:{},
        data:{}
    },
    thirdCard:{
        option:{},
        data:{}
    },
    fourthCard:{
        option:{},
        data:{}
    },
    fifthCard:{
        title:'',
        modelOption:{},
        versionOption:{},
        modelData:{},
        versionData:{}
    },
    sixthCard:{
        title:'',
        sexOption:{},
        ageOption:{},
    }
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'DASHBOARD3_SEARCHPARAMS_CHANGE':
            newState.selectedCountry = action.country;
            newState.time = action.time;
            newState.value = action.value;
            break;
        case 'DASHBOARD3_DETAILPAGE_LOADING':
            newState.detailPageLoading = action.detailPageLoading;
            break;
        case 'DASHBOARD3_SUBPAGE_SHOW':
            newState.subPageShow = action.subPageShow;
            break;
        case 'DASHBOARD3_REGIONMAPCARD_LOAD':
            newState.regionMapCard = {
                option:action.option,
                data:action.data,
                mapJsonData: action.mapJsonData
            };
            break;
        case 'DASHBOARD3_SECONDCARD_LOAD':
            newState.secondCard = {
                option:action.option,
                data:action.data
            };
            break;
        case 'DASHBOARD3_THIRDCARD_LOAD':
            newState.thirdCard = {
                option:action.option,
                data:action.data
            };
            break;
        case 'DASHBOARD3_FOURTHCARD_LOAD':
            newState.fourthCard = {
                option:action.option,
                data:action.data
            };
            break;
        case 'DASHBOARD3_FIFTHCARD_LOAD':
            newState.fifthCard = {
                title:action.title,
                modelOption:action.modelOption,
                versionOption:action.versionOption,
                modelData:action.modelData,
                versionData:action.versionData
            };
            break;
        case 'DASHBOARD3_SIXTHCARD_LOAD':
            newState.sixthCard = {
                title:action.title,
                sexOption:action.sexOption,
                ageOption:action.ageOption
            };
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}