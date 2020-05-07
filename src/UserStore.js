import { createStore } from 'redux';

function user(state={}, action) {
  switch(action.type) {
    case 'CREATE':
      return Object.assign({}, state, {
        user: action.user
      })
    case 'DELETE':
      return Object.assign({}, state, {
        user: null
      })
    default :
      console.log("Default!")
  }
}

const userStore = createStore(user)

export default userStore;