import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as BrowserRouter } from 'react-router-dom';
import './App.scss';
import App from './App';
import 'foundation-sites';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
