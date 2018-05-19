import {
    createStore,
    applyMiddleware
} from 'redux';

import {
    middleware
} from '../middleware/index';

import {
    rootReducers
} from '../reducers/index';

const Middleware = applyMiddleware(...middleware);

const store = createStore(rootReducers, Middleware);

export default store;