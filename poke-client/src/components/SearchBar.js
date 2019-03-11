import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTextValue: ""
    };
  }

  handleChange = (event) => {
    this.setState({ searchTextValue: event.target.value });
  };

  handleSearch = (event) => {
    event.preventDefault();
    this.props.onSearchPokemon(this.state.searchTextValue);
  };

  render() {
    return (
      <form className="SearchBar" onSubmit={this.handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search here"
          value={this.state.searchTextValue}
          onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;
