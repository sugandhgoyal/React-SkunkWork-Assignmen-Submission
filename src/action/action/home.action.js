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

const load_books_data = () => ({type: LOAD_BOOKS_DATA});

const load_books_data_success = (data) => ({type: LOAD_BOOKS_DATA_SUCCESS, books_data: data.results})

const load_books_data_error = (err) => ({type: LOAD_BOOKS_DATA_ERROR, err})

const books_search = () => ({type: BOOKS_SEARCH});

const books_search_success = (data) => ({type: BOOKS_SEARCH_SUCCESS, search_data: data.results})

const books_search_error = (err) => ({type: BOOKS_SEARCH_ERROR, err})

const async_lazy_loading_activated = () => {
    return {type: LAZY_LOADER_ACTIVATED}
}

const async_lazy_loading_success = (data) => {
    return {type: LAZY_LOADER_SUCCESS, more_data: data}
}

const async_lazy_loading_error = (error) => {
    return {type: LAZY_LOADER_ERROR, error}
};

export default {
    load_books_data,
    load_books_data_error,
    load_books_data_success,
    books_search,
    books_search_error,
    books_search_success,
    async_lazy_loading_activated,
    async_lazy_loading_error,
    async_lazy_loading_success
}