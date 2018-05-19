import React from 'react';
import {connect} from 'react-redux';
import '../assets/css/books.css';
import {loadBooksApi} from '../action/index';
import InfiniteScroll from 'react-infinite-scroller';

class Bookslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  loadMore = () => {
    let length = this.props.booksReducer.books_data.length;
    if (!this.props.booksReducer.has_more_items) {
      this
        .props
        .dispatch(loadBooksApi('lazyLoad', length, this.props.id));
    }
  }

  changeUrl = (html, pdf, txt) => {
    if (html) 
      window.location = html
    else if (pdf) 
      window.location = pdf
    else if (txt) 
      window.location = txt
    else alert("No viewable version available");
  }

  render() {
    console.log(this.props.booksReducer.books_data);
    return (
      <div>
        <InfiniteScroll
          pageStart={1}
          loadMore={this.loadMore}
          hasMore={true}
          loader={< div className = "loader" key = {
          0
        } > Loading ........... </div>}>
          <div>
            {this
              .props
              .booksReducer
              .books_data
              .map((ele, index) => {
                return (
                  <div
                    key={index}
                    className="card6 card"
                    onClick={() => this.changeUrl(ele.formats["text/html; charset=utf-8"], ele.formats["application/pdf"], ele.formats["text/plain; charset=utf-8"])}>
                    <div>
                      <b>&nbsp;{ele.title}</b>
                    </div>
                    <div>{ele.authors && ele.authors[0] && <div>Author Name:&nbsp;{ele.authors[0].name}</div>}
                    </div>
                  </div>
                )
              })
}
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Bookslist);