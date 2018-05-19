export const FETCH_BOOKS = (id) => {
    return `http://skunkworks.ignitesol.com:8000/books?topic=${id}`;
}
export const FETCH_SEARCH_DATA = (searchString) => {
    return `http://skunkworks.ignitesol.com:8000/books?search=${searchString}`;
}
