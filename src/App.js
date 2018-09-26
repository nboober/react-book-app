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
    // this.handleShelfUpdate=this.handleShelfUpdate.bind(this);
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({books: books})
        })
    }

        // handleShelfUpdate(book, shelf) {
        //     let newShelf = shelf;
        //     let newBook = book;
        //
        //     if (book.shelf !== shelf) {
        //       BooksAPI.update(book, shelf).then(() => {
        //         this.setState(state => ({
        //           books: book
        //         }));
        //       });
        //     }
        //   }


  render() {

    const currentlyReading = this.state.books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = this.state.books.filter(book => book.shelf === "wantToRead");
    const read = this.state.books.filter(book => book.shelf === "read");
    const none = this.state.books.filter(book => book.shelf === "none");

    return(
  <div className="app">
    <Route exact path="/" render={()=>(
    <div>
      <BookShelf books={this.state.books} onShelfUpdate={this.handleShelfUpdate} currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} none={none}/>
      <div className="open-search">
        <Link to="/search" >Add a book></Link>
      </div>
    </div>
    )}/>
        <Route path="/search" render={()=>(
          <Search books={this.state.books} onShelfUpdate={this.handleShelfUpdate} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
