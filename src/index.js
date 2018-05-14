import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Components
import App from './components/App';

const supportsHistory = 'pushState' in window.history;

ReactDOM.render((
  <BrowserRouter forceRefresh={!supportsHistory}>
    <App />
  </BrowserRouter>
), document.getElementById('main'));

registerServiceWorker();
