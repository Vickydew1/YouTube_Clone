import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleSubmit = () => {
    const { searchTerm, value, value1 } = this.state;
    console.log(searchTerm, value, value1);
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
