import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers/index';
import { getAllProducts } from '../actions'

let middleware = [ReduxThunk, ReduxPromise]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const persistedState = localStorage.getItem('chart-redux-state')
    ? JSON.parse(localStorage.getItem('chart-redux-state'))
    : {}

const store = createStoreWithMiddleware(reducers, persistedState);

store.subscribe(() => {
    localStorage.setItem('chart-redux-state', JSON.stringify(store.getState()))
})

store.dispatch(getAllProducts())

export default store;