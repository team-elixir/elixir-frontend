import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './bootstrap/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from "./_components/Cart/Cart";

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
