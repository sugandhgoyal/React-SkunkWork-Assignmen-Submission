import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Homepage from '../containers/Home/home.container';
import Books from '../containers/Home/books.container';

export default (
    <Router>
        <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/books/*" component={Books} />
        </div>
    </Router>
)