import React from 'react'
import { Book } from './Book'
import PropTypes from 'prop-types';

export class BookShelf extends React.Component{
  constructor(props){
    super(props);
    this.state={books: this.props.books}
  }

  componentDidMount() {
      this.setState({books: this.props.books})
    }

  render() {

    const shelves = [
      { title: 'Currently Reading', s: 'currentlyReading' },
      { title: 'Want To Read', s: 'wantToRead' },
      { title: 'Read', s: 'read' }
    ];

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            {shelves.map(shelf =>
              <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">

                    {this.props.books.filter(book => book.shelf === shelf.s).map((book) => (
                      <li key={book.id}>
                      <Book onShelfUpdate={this.props.onShelfUpdate} books={book}/>
                      </li>
                    ))}

                  </ol>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  books: PropTypes.array,
  onShelfUpdate: PropTypes.func.isRequired
}
