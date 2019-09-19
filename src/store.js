// 引入
import {createStore,combineReducers} from 'redux'


function historyArr(state=[],action){
    switch(action.type){
        case 'changeHouse' : return [action.house,...state.filter(val=>val.id!==action.house.id)]
        default : return state
    }
}

function houseInfo(state=[],action){
    switch(action.type){
        case 'changeHouseInfo' : return action.house
        default : return state
    }
}


export default createStore(combineReducers({
    historyArr,
    houseInfo
}))