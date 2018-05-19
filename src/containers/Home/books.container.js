import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/searchBox.css';
import {FormControl} from 'react-bootstrap';
import Bookslist from '../../components/bookList';
import {searchApiCall,loadBooksApi} from "../../action/index";


class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            hasMoreItems: true
        }
    }
    componentWillMount = () => {
        this.props.dispatch(loadBooksApi("firstLoad",10,this.props.location.state.id));
      }
    search = (e) => {
        console.log("search");
        if (e.keyCode === 13) {
            this.handleChange(e, true);
        }
        this.handleChange(e, false);
    }
    handleChange = (e, isEnter) => {
        console.log("handlechnage");
        if (!isEnter) {
            this.setState({searchString: e.target.value});
        } else {
            console.log("else", this.state.searchString);
            let searchedString = this.state.searchString;
            this.props.dispatch(searchApiCall(searchedString));
        }
    }

    render() {
        return (
            <div>
                <div className="main" id="mainFeed">
                    <div className="col-sm-10">
                        <FormControl
                            value={this.state.searchString}
                            type="text"
                            placeholder="Search here.."
                            onChange={this.handleChange}
                            onKeyDown={this.search}/>
                        <i className="fa fa-search" aria-hidden="true" id="searchIcon"></i>
                        <i
                            className="fa fa-times"
                            aria-hidden="true"
                            id="cancelButton"
                            onClick={() => this.setState({searchString: ''})}></i>
                    </div>
                </div>
                <Bookslist id={this.props.location.state.id}/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Books);