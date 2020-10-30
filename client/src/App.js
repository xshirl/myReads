import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
    };
  }

  getBooks = (term) => {
    console.log(API_KEY);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${API_KEY}`
      )
      .then((data) => {
        console.log(data);
        this.setState({ books: data.data.items });
      });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <BookForm onSubmit={this.getBooks} />
          <BookList books={this.state.books} />
        </div>
      </Router>
    );
  }
}
