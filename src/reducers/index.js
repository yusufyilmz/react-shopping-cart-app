import { combineReducers } from 'redux'
import cart from './cartReducer'
import store from './storeReducer'

const rootReducer = combineReducers({
  cart,
  store
})

export default rootReducer
