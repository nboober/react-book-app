import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Book } from './Book'

export class BookShelf extends React.Component{
  constructor(props){
    super(props);
    this.state={currentlyReading: [],
                wantToRead: [],
                read: [],
                none: [],
                books: []
                }
  }

  componentDidMount() {
      this.setState({books: this.props.books})
    }

  changeShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(response => {

    })
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
                  {this.state.currentlyReading}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.wantToRead}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.read}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
