import React from 'react'
import * as BooksAPI from './BooksAPI'

export class Book extends React.Component{

  render() {

    let bookList=this.props.book.map(function(i){
      return  <li key={i.title}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("{i.imageLinks.smallThumbnail}")' }}></div>
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
                    <div className="book-title">{i.title}</div>
                    <div className="book-authors">{i.author}</div>
                  </div>
                </li>
              });


    return bookList
  }
}
