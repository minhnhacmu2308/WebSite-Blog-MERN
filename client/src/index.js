import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomepPage from './pages/HomePage.js';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers/index.js';
import mySaga from './redux/sagas/index.js'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <HomepPage />
  </Provider>,
 
  document.getElementById('root')
);

