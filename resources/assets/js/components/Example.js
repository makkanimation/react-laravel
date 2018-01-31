import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import WebRouter from '../Route';
import { BrowserRouter } from 'react-router-dom';
import thunk from "redux-thunk";

import webStore from '../reducers';
import * as Auth from '../helpers/authorization'
import {createLogger} from 'redux-logger'
const logger = createLogger({
});
let store = createStore(webStore, applyMiddleware(thunk,logger));
export default class Example extends Component {
    
    render() {
        //Auth.isTokenExpired(Auth.getToken());
        return (
            <div>
            
            <WebRouter />
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Provider store={store}><BrowserRouter><Example /></BrowserRouter></Provider>, document.getElementById('root'));
}
