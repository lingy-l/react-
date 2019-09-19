import {createStore} from 'redux'

const store=createStore(function(state='zhangsan',action){
  switch(action.type){
      case 'changeName' : return action.name
      default :return state
  }
})

let a={
    type:'changeName',
    name:'lisi'
}

store.dispatch(a)

console.log(store.getState())

export default store