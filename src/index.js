import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './_components/bootstrap/dist/css/bootstrap.css';
import './_components/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './_componenets/Navigation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navigation />, document.getElementById('root'));
registerServiceWorker();
