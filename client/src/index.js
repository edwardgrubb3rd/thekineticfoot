import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { DataProvider } from './context/DataContext';

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>
  , document.getElementById('root'));
registerServiceWorker();
