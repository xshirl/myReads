import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";
import BookPopup from "./BookPopup";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: true
    };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
  render() {
    const { volumeInfo, id } = this.props.book;
    const newId = "A" + id;
    let authors;
    if (Array.isArray(volumeInfo.authors) && volumeInfo.authors.length > 0) {
      authors = volumeInfo.authors.join(", ");
    } else {
      authors = null;
    }
    console.log(this.state.showPopup);
    return (
      <div>
        <img src={volumeInfo.imageLinks.smallThumbnail} />
        <div className="card-body">
          <h6 className="card-title">{volumeInfo.title}</h6>
          {console.log(volumeInfo.authors)}
          <p>{authors}</p>
        </div>
        <ShelfChanger />
        <button
          type="button"
          className="btn btn-info btn-lg"
          data-toggle="modal"
          data-target={`#${newId}`}
          onClick={this.togglePopup}
        >
          More Info
        </button>
        {this.state.showPopup ? (
          <BookPopup info={volumeInfo} id={newId} />
        ) : null}
      </div>
    );
  }
}
