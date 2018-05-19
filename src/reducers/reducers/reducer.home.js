import {
    LOAD_BOOKS_DATA,
    LOAD_BOOKS_DATA_SUCCESS,
    LOAD_BOOKS_DATA_ERROR,
    BOOKS_SEARCH,
    BOOKS_SEARCH_ERROR,
    BOOKS_SEARCH_SUCCESS,
    LAZY_LOADER_ACTIVATED,
    LAZY_LOADER_ERROR,
    LAZY_LOADER_SUCCESS
} from '../../constants/index';

var _ = {
    union: require('lodash/union')
};

const initialState = {
    state: {},
    books_data: [],
    more_data:[],
    has_more_items: false,
    error: null
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BOOKS_DATA:
            return {
                ...state
            }
        case LOAD_BOOKS_DATA_SUCCESS:
            return {
                ...state,
                books_data: action.books_data,
                error: false
            }
        case LOAD_BOOKS_DATA_ERROR:
            return {
                ...state,
                error: true
            }
        case BOOKS_SEARCH:
            return {
                ...state
            }
        case BOOKS_SEARCH_SUCCESS:
            return {
                ...state,
                books_data: action.search_data,
                error: false
            }
        case BOOKS_SEARCH_ERROR:
            return {
                ...state,
                error: true
            }
        case LAZY_LOADER_ACTIVATED:
            return {
                ...state,
                has_more_items: true
            }
        case LAZY_LOADER_SUCCESS:
            return {
                ...state,
                books_data: _.union(state.books_data, action.more_data),
                has_more_items: false,
                error: false
            }
        case LAZY_LOADER_ERROR:
            return {
                ...state,
                has_more_items: false,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}