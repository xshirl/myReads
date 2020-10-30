import React, { Component } from "react";

export default class BookPopup extends Component {
  render() {
    const id = this.props.id;
    const {
      authors,
      title,
      description,
      publisher,
      publishedDate,
      industryIdentifiers,
      imageLinks
    } = this.props.info;
    let stringAuthors;
    if (Array.isArray(authors) && authors.length > 0) {
      stringAuthors = authors.join(", ");
    } else {
      stringAuthors = null;
    }
    let ISBN_type;
    let ISBN_num;
    if (industryIdentifiers != undefined) {
      ISBN_type = industryIdentifiers[0].type;
      ISBN_num = industryIdentifiers[0].identifier;
    }

    return (
      <div className="modal fade" id={id} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{title}</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <img src={imageLinks.smallThumbnail} alt={title} />
              <p className="book-description">Author(s): {stringAuthors}</p>
              <p className="book-description">Description: {description}</p>
              <p className="book-description">Publisher: {publisher}</p>
              <p className="book-description">
                Published Date: {publishedDate}
              </p>
              <p className="book-description">
                {ISBN_type} : {ISBN_num}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
