import React from 'react'
import * as BooksAPI from './BooksAPI'

export class Book extends React.Component{

  render() {

    return (
                  <div>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.books.imageLinks && this.props.books.imageLinks.thumbnail ? this.props.books.imageLinks.thumbnail : "No Image Available"})` }}></div>
                          <div className="book-shelf-changer">
                            <select defaultValue={this.props.books.shelf || "none"} onChange={(e) => this.props.onShelfUpdate(this.props.books, e.target.value)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{this.props.books.title ? this.props.books.title : "No title available"}</div>
                        {this.props.books.authors ? this.props.books.authors.map((author) => (
                          <div className="book-authors" key={author}>{author}</div>
                        )) : <div className="book-authors">No authors available</div>}
                        </div>
                        <div>{this.props.books.shelf ? this.props.books.shelf : "Not on a Shelf"}</div>
                    </div>
                )
              }
            }
