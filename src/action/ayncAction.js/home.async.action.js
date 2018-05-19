import {homeAction} from "../index";

import {FETCH_SEARCH_DATA,FETCH_BOOKS} from '../../constants/api';

import {getCallApi} from '../../utils/utils';

/**
 *
 * @param {*} num
 */
export const loadBooksApi = (loadingType, skip,id) => {
    if (loadingType === 'firstLoad') {
        console.log("first");
        return (dispatch) => {
            dispatch(homeAction.load_books_data());
            return getCallApi(FETCH_BOOKS(id)).then((data) => {
                console.log(data.results.slice(0, skip));
                dispatch(homeAction.load_books_data_success(data));
                return Promise.resolve(data);
            }).catch((error) => {
                dispatch(homeAction.load_books_data_error(error));
                return Promise.reject(error);
            })
        }
    }
    if (loadingType === 'lazyLoad') {
        return (dispatch) => {
            dispatch(homeAction.async_lazy_loading_activated());
            return getCallApi(FETCH_BOOKS(id)).then((data) => {
                console.log("lazyload", data.results.slice(0, skip));
                dispatch(homeAction.async_lazy_loading_success(data.results.slice(0, skip)));
                return Promise.resolve(data);
            }).catch((error) => {
                dispatch(homeAction.async_lazy_loading_error(error));
                return Promise.reject(error);
            })
        }
    }
}

/**
 *
 * @param {*} num
 */
export const searchApiCall = (owner, name) => {
    return (dispatch) => {
        dispatch(homeAction.books_search());
        return getCallApi(FETCH_SEARCH_DATA(owner, name)).then((data) => {
            console.log(data);
            dispatch(homeAction.books_search_success(data));
            return Promise.resolve(data);
        }).catch((error) => {
            dispatch(homeAction.books_search_error(error));
            return Promise.reject(error);
        })
    }
}
