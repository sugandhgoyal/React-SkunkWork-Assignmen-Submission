import { combineReducers } from 'redux';
import { booksReducer } from './reducers/reducer.home';

export const rootReducers = combineReducers({
    booksReducer
});