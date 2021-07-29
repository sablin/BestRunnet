import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


const globalStore = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// Store

ReactDOM.render(
<Provider store={globalStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


