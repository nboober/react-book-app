import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'

export class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {query: '',
                  books: []
                }
  }

  render() {
    //Holds the list of books gathered in App.js
    let books=this.props.books;
    console.log(books);

    const bookList = books.map(function(i){
      return `Authors: ${i.authors}`
    });

    console.log(bookList);

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
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              </ol>
            </div>
          </div>
      )
  }
}
