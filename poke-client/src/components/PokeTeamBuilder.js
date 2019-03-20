import React from 'react';
import base from '../base';
import SearchBar from './SearchBar';
import PokemonDescription from './PokemonDescription';
import '../styles/PokeTeamBuilder.css';
import PokemonStatList from './PokemonStatList';
import PokemonMoveList from './PokemonMoveList';
import PokemonMoveDescription from './PokemonMoveDescription';

const Pokedex = require('pokeapi-js-wrapper');

const myPokedex = new Pokedex.Pokedex();

class PokeTeamBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [],
      currentPokemon: {},
      currentMoveName: '',
    };
  }

  componentDidMount = () => {
    this.ref = base.syncState('team', {
      context: this,
      state: 'team',
    });
  };

  handleSearchByName = async name => {
    myPokedex
      .getPokemonByName(name)
      .then(response => {
        console.log(response);
        return this.setState({ currentPokemon: response });
      })
      .catch(error => console.error(error));
  };

  handleSelectMove = currentMoveName => {
    this.setState({ currentMoveName });
  };

  render() {
    return (
      <main className="poke-team-builder">
        <SearchBar onSearchPokemon={this.handleSearchByName} />
        <PokemonStatList pokemonStatList={this.state.currentPokemon.stats} />
        <PokemonDescription currentPokemon={this.state.currentPokemon} />
        <PokemonMoveList
          pokemonMoveList={this.state.currentPokemon.moves}
          onSelectMove={this.handleSelectMove}
        />
        <PokemonMoveDescription pokedex={myPokedex} currentMoveName={this.state.currentMoveName} />
      </main>
    );
  }
}

export default PokeTeamBuilder;
