import React from 'react'
import * as BooksAPI from './BooksAPI'

export class Book extends React.Component{

  render() {

    let bookList=this.props.book.map(function(i, id){
      return  <li key={i.title + id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${i.imageLinks && i.imageLinks.thumbnail ? i.imageLinks.thumbnail : "No Image Available"})` }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{i.title ? i.title : "No title available"}</div>
                    {i.authors ? i.authors.map((author) => (
                      <div className="book-authors" key={author}>{author}</div>
                    )) : <div className="book-authors">No authors available</div>}
                    </div>
                    <div>{i.shelf ? i.shelf : "Not on a Shelf"}</div>
                </li>
              });


    return bookList
  }
}
