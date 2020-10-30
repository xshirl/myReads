import React, { Component } from "react";
import Book from "./Book";
export default class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        {this.props.books.map(book => {
          return (
            <div className="book-item card" key={book.id}>
              <Book book={book} />
            </div>
          );
        })}
      </div>
    );
  }
}
