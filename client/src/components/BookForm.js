import React, { Component } from "react";

export default class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="term"
            value={this.state.term}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search Books" />
        </form>
      </div>
    );
  }
}
