import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { DataProvider } from './context/DataContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <DataProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </DataProvider>
  , document.getElementById('root'));
registerServiceWorker();
