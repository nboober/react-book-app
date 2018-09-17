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
    this.state = {books: []}

  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({books: []})
        console.log(this.state.books);
        })
    }

  render() {
    return(
  <div className="app">
    <Route exact path="/" render={()=>(
    <div>
      <BookShelf books={this.state.books}/>
      <div className="open-search">
        <Link to="/search" >Add a book></Link>
      </div>
    </div>
    )}/>
        <Route path="/search" render={()=>(
          <Search books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
