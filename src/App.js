import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Search } from './searchPage'
import { BookShelf } from './bookShelf'

class BooksApp extends React.Component {

  render() {
    return(
  <div className="app">
    <Route exact path="/" render={()=>(
    <div>
      <BookShelf/>
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
