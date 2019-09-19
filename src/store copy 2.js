// 引入
import {createStore,combineReducers} from 'redux'


function name(state='zs',action){
    switch(action.type){
        case 'changeName':return action.name
        default : return state
    }
}

function age(state=18,action){
    switch(action.type){
        default : return state
    }
}

function sex(state=0,action){
    switch(action.type){
        default : return state
    }
}

function id(state=1,action){
    switch(action.type){
        default : return state
    }
}


let store=createStore(combineReducers({
    name,
    age,
    sex,
    id
}))

store.dispatch({
        type:'changeName',
        name:'lisi'
    })

console.log(store.getState())

export default  store