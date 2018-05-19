import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/searchBox.css';
import '../../assets/css/homePage.css';
import {Link} from 'react-router-dom';


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            hasMoreItems: true
        }
    }

    render() {
        return (
            <div>
                <h2 className="homeTitle">Welcome to the book store</h2>
                <h3 className="homeTitle">Choose a genre</h3>
                <div className="w3-container">
                    <div className="w3-panel w3-card">
                        <Link
                            to={{
                            pathname: '/books/fiction',
                            state: {
                                id: 'fiction'
                            }
                        }}>Fiction</Link>
                    </div>
                    <div className="w3-panel w3-card-2">
                        <Link
                            to={{
                            pathname: '/books/fiction',
                            state: {
                                id: 'drama'
                            }
                        }}>Drama</Link>
                    </div>
                    <div className="w3-panel w3-card-3">
                        <Link
                            to={{
                            pathname: '/books/fiction',
                            state: {
                                id: 'history'
                            }
                        }}>History</Link>
                    </div>
                    <div className="w3-panel w3-card-4">
                        <Link
                            to={{
                            pathname: '/books/fiction',
                            state: {
                                id: 'comedy'
                            }
                        }}>Comedy</Link>
                    </div>
                    <div className="w3-panel w3-card-5">
                        <Link
                            to={{
                            pathname: '/books/fiction',
                            state: {
                                id: 'romance'
                            }
                        }}>Romance</Link>
                    </div>
                    <div className="w3-panel w3-card-6">
                        <Link
                            to={{
                            pathname: '/books/fiction',
                            state: {
                                id: 'fantasy'
                            }
                        }}>Fantasy</Link>
                    </div>
                    <div className="w3-panel w3-card-7">
                        <Link
                            to={{
                            pathname: '/books/fiction',
                            state: {
                                id: 'crime'
                            }
                        }}>Crime</Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Homepage);