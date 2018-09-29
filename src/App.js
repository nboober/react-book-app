import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Search } from './searchPage'
import { BookShelf } from './bookShelf'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                books: [],
              }
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({books: books})
        })
    }

handleShelfUpdate = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => {
            // Update the local copy of the book
            book.shelf = newShelf;

            // Filter out the book and append it to the end of the list
            // so it appears at the end of whatever shelf it was added to.
            this.setState({
                books: this.state.books.filter(b => b.id !== book.id).concat([ book ])
            });
        });
    };

  render() {

    return(
  <div className="app">
    <Route exact path="/" render={()=>(
    <div>
      <BookShelf books={this.state.books} onShelfUpdate={this.handleShelfUpdate}/>
      <div className="open-search">
        <Link to="/search" >Add a book></Link>
      </div>
    </div>
    )}/>
        <Route path="/search" render={()=>(
          <Search books={this.state.books} onShelfUpdate={this.handleShelfUpdate}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
