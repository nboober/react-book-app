import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import { Book } from './Book'
import PropTypes from 'prop-types';

export class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {query: '',
                  books: ''
                }
  }

    querySearch = (event) => {
      let query = event.target.value;
        this.setState({ query });

        if (query) {
          BooksAPI.search(query, 5).then((books) => {
            this.setState({books: this.props.books.filter(b => b.id !== books.id).concat([ books ])})
            books.length > 0 ? this.setState({books}) : this.setState({ books: []})
            console.log(this.state.books);

          })


      }
    }

  render() {

    return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.querySearch} value={this.state.query}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books.length !== 0 && this.state.query !== ''?
                (this.state.books.map((book) => (
                  <li key={book.id}>
                  <Book onShelfUpdate={this.props.onShelfUpdate} books={book}/>
                  </li>
                ))) :
                <h2>No Results Found</h2>
              }
              </ol>
            </div>
          </div>
      )
  }
}
Search.propTypes = {
  onShelfUpdate: PropTypes.func.isRequired,
  books: PropTypes.array
}
