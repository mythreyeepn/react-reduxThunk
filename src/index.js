import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose } from 'redux';
import { Provider }from 'react-redux';
import thunk from "redux-thunk";
import App from'./app'
import mainReducer from './reducers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const store = createStore(mainReducer,applyMiddleware(thunk)) 

ReactDOM.render(
    <Provider  store={store}>
       <App/>
    </Provider>
,document.getElementById('root'));