import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore, compose } from "redux";
import {Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import './index.css';
import appReducer from '../src/Redux/index';

const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  appReducer,
  {},
  composeEnhancers(
    applyMiddleware(...middleware),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

