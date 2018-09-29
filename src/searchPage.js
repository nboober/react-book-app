import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import { Book } from './Book'

export class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {query: '',
                  books: []
                }
  }

    querySearch = (event) => {
      let query = event.target.value.trim();
        this.setState({ query: query })

        if (query) {
          BooksAPI.search(query, 20).then((books) => {
            query.length > 0 ? this.setState({books: books}) : this.setState({ books: []})
            console.log(this.state.books);

          })

        // if query is empty => reset state to default
      } else this.setState({books: []})
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
                <input type="text" placeholder="Search by title or author" onChange={this.querySearch}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.books.map((book) => (
                  <li key={book.id}>
                  <Book onShelfUpdate={this.props.onShelfUpdate} books={book}/>
                  </li>
                ))
              }
              </ol>
            </div>
          </div>
      )
  }
}
