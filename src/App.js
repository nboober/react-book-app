import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Search } from './searchPage'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {books: []};
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({books})
        console.log(this.state.books);
        })
    }

  render() {
    return(
  <div className="app">
    <Route exact path="/" render={()=>(
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

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" >Add a book></Link>
        </div>
      </div>
    )}/>
        <Route path="/search" render={()=>(
          <Search />
        )}/>
      </div>
    )
  }
}

export default BooksApp
