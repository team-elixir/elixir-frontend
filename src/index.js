import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Navigationbar from "./_components/Navigationbar/Navigationbar";

ReactDOM.render(<Navigationbar />, document.getElementById('root'));
registerServiceWorker();
