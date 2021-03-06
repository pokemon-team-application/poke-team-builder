import React from 'react';
import base from '../base';
import SearchBar from './SearchBar';
import PokemonDescription from './PokemonDescription';
import '../styles/PokeTeamBuilder.css';
import PokemonStatList from './PokemonStatList';
import PokemonMoveList from './PokemonMoveList';
import PokemonTeam from './PokemonTeam';
import PokemonMoveDescription from './PokemonMoveDescription';
import PokemonCurrentInfo from './PokemonCurrentInfo';

const uuidv1 = require('uuid/v1');

const Pokedex = require('pokeapi-js-wrapper');

const apiOptions = {
  protocol: 'https',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5 * 1000, // 5s
};

const myPokedex = new Pokedex.Pokedex(apiOptions);

class PokeTeamBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonList: [],
      currentPokemon: {},
      currentMoveName: '',
    };
  }

  componentDidMount = () => {
    this.ref = base.syncState('team', {
      context: this,
      state: 'pokemonList',
      asArray: true,
    });
  };

  handleSearchByName = async name => {
    myPokedex
      .getPokemonByName(name)
      .then(response => {
        response.uuid = uuidv1();
        response.currentMoves = [];
        response.currentItem = '';
        console.log(response);
        return this.setState({ currentPokemon: response });
      })
      .catch(error => console.error(error));
  };

  handleAddPokemon = () => {
    if (this.state.pokemonList.length < 6) {
      this.setState(prevState => ({
        pokemonList: [...prevState.pokemonList, prevState.currentPokemon],
      }));
    } else {
      alert('You have TOO MUCH POKEMON!');
    }

    console.log('TEAM LIST', this.state.pokemonList);
  };

  handleRemovePokemon = uuid => {
    this.setState(prevState => {
      const tempPokemonList = prevState.pokemonList;
      const pokeIndex = tempPokemonList.findIndex(pokemon => pokemon.uuid === uuid);
      tempPokemonList.splice(pokeIndex, 1);

      return {
        pokemonList: tempPokemonList,
      };
    });
  };

  handleSelectMove = currentMoveName => {
    this.setState({ currentMoveName });
  };

  handleShowPokemon = pokemon => {
    console.log(pokemon);
    this.setState({ currentPokemon: pokemon, currentMoveName: '' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleAddMove = move => {
    this.setState(prevState => {
      const tempCurrentPokemon = prevState.currentPokemon;
      if (!tempCurrentPokemon.currentMoves) {
        tempCurrentPokemon.currentMoves = [];
      }
      if (tempCurrentPokemon.currentMoves.length < 4) {
        tempCurrentPokemon.currentMoves.push(move);
      } else {
        alert('You are all out of moves');
      }
      console.log(tempCurrentPokemon.currentMoves);
      return {
        currentPokemon: tempCurrentPokemon,
      };
    });
  };

  handleRemoveMove = move => {};

  render() {
    return (
      <main className="poke-team-builder">
        <SearchBar onSearchPokemon={this.handleSearchByName} />

        <PokemonStatList pokemonStatList={this.state.currentPokemon.stats} />

        <PokemonDescription
          currentPokemon={this.state.currentPokemon}
          handleAddPokemon={this.handleAddPokemon}
        />

        <PokemonMoveDescription
          pokedex={myPokedex}
          currentMoveName={this.state.currentMoveName}
          onAddMove={this.handleAddMove}
        />
        <PokemonMoveList
          pokemonMoveList={this.state.currentPokemon.moves}
          onSelectMove={this.handleSelectMove}
        />
        <PokemonTeam
          pokemonList={this.state.pokemonList}
          onRemovePokemon={this.handleRemovePokemon}
          onShowPokemon={this.handleShowPokemon}
        />
        <PokemonCurrentInfo
          currentPokemon={this.state.currentPokemon}
          onRemoveMove={this.handleRemoveMove}
        />
      </main>
    );
  }
}

export default PokeTeamBuilder;
