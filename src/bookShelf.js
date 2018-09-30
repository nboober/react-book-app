import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Book } from './Book'
import PropTypes from 'prop-types';

export class BookShelf extends React.Component{
  constructor(props){
    super(props);
    this.state={books: this.props.books}
  }

  componentDidMount() {
      this.setState({books: this.props.books})
    }

  render() {

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books.filter(book => book.shelf === "currentlyReading").map((book) => (
                    <li key={book.id}>
                    <Book onShelfUpdate={this.props.onShelfUpdate} books={book}/>
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books.filter(book => book.shelf === "wantToRead").map((book) => (
                    <li key={book.id}>
                    <Book onShelfUpdate={this.props.onShelfUpdate} books={book}/>
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books.filter(book => book.shelf === "read").map((book) => (
                    <li key={book.id}>
                    <Book onShelfUpdate={this.props.onShelfUpdate} books={book}/>
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfUpdate: PropTypes.func.isRequired
}
