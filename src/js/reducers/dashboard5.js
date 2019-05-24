import { objectAppend } from '../utils';

const defaultState = {
    subPageShow:false,
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
}

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'DASHBOARD5_SUBPAGE_SHOW':
            newState.subPageShow = action.subPageShow;
            break;
        case 'DASHBOARD5_REGIONMAPCARD_LOAD':
            newState.regionMapCard = {
                option:action.option,
                data:action.data,
                mapJsonData: action.mapJsonData
            }
            break;
        case 'DASHBOARD5_SECONDCARD_LOAD':
            newState.secondCard = {
                option:action.option,
                data:action.data
            }
            break;
        case 'DASHBOARD5_THIRDCARD_LOAD':
            newState.thirdCard = {
                option:action.option,
                data:action.data
            }
            break;
        case 'DASHBOARD5_FOURTHCARD_LOAD':
            newState.fourthCard = {
                option:action.option,
                data:action.data
            }
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}