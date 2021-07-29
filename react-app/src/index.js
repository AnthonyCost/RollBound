import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import './fonts/Balgruf.otf'
import './fonts/DevinneSwash-qZd5.ttf'
import './fonts/Inthedark-Lgzn.ttf'
import './fonts/Heorot.ttf'
import './fonts/Runic.ttf'

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
