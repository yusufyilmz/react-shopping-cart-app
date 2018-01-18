import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './stores/index';
import './assets/css/app.css';
import CartApp from './containers/CartApp';


ReactDOM.render(
    <Provider store={store}>
        <CartApp />
    </Provider>
    , document.getElementById('root'));
