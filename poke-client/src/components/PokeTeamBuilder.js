import React from 'react';
import SearchBar from './SearchBar';
import PokemonDescription from './PokemonDescription';
import '../styles/PokeTeamBuilder.css';

const Pokedex = require('pokeapi-js-wrapper');

const myPokedex = new Pokedex.Pokedex();

class PokeTeamBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPokemon: {},
    };
  }

  handleSearchByName = async name => {
    myPokedex
      .getPokemonByName(name)
      .then(response => {
        console.log(response);
        return this.setState({ currentPokemon: response });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <main className="poke-team-builder">
        <SearchBar onSearchPokemon={this.handleSearchByName} />
        <PokemonDescription currentPokemon={this.state.currentPokemon} />
      </main>
    );
  }
}

export default PokeTeamBuilder;
