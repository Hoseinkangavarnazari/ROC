import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import {} from 'react-redux';
import reducer from './store/reducer';



const store = createStore(reducer);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


registerServiceWorker(); 