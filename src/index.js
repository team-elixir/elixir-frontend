import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './bootstrap/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ViewProduct from "./_components/Product1";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
