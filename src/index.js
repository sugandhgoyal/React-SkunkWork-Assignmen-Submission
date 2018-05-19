import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/index';
import path from './router/index';
import {
    Provider
} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        {path}
    </Provider>, document.getElementById('root'));
registerServiceWorker();
