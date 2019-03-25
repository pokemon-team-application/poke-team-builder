import React from "react";
import base from "../base";
import SearchBar from "./SearchBar";
import PokemonDescription from "./PokemonDescription";
import "../styles/PokeTeamBuilder.css";
import PokemonStatList from "./PokemonStatList";
import PokemonMoveList from "./PokemonMoveList";
import PokemonTeam from "./PokemonTeam";
import PokemonMoveDescription from "./PokemonMoveDescription";

const uuidv1 = require("uuid/v1");

const Pokedex = require("pokeapi-js-wrapper");

const apiOptions = {
  protocol: "https",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5s
};

const myPokedex = new Pokedex.Pokedex(apiOptions);

class PokeTeamBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: {
        pokemonList: [],
      },
      currentPokemon: {},
      currentMoveName: "",
    };
  }

  // componentDidMount = () => {
  //   this.ref = base.syncState("team", {
  //     context: this,
  //     state: "team"
  //   });
  // };

  handleSearchByName = async name => {
    myPokedex
      .getPokemonByName(name)
      .then(response => {
        console.log(response);
        response.uuid = uuidv1();
        return this.setState({ currentPokemon: response });
      })
      .catch(error => console.error(error));
  };

  handleAddPokemon = () => {
    if (this.state.team.pokemonList.length < 6) {
      this.setState(prevState => ({
        team: {
          pokemonList: [...prevState.team.pokemonList, prevState.currentPokemon],
        },
      }));
    } else {
      alert("You must construct additional pylons");
    }

    console.log("TEAM LIST", this.state.team.pokemonList);
  };

  handleRemovePokemon = uuid => {
    this.setState(prevState => {
      const tempPokemonList = prevState.team.pokemonList;
      const pokeIndex = tempPokemonList.findIndex(pokemon => pokemon.uuid === uuid);
      tempPokemonList.splice(pokeIndex, 1);

      return {
        team: {
          pokemonList: tempPokemonList,
        },
      };
    });
  };

  handleSelectMove = currentMoveName => {
    this.setState({ currentMoveName });
  };

  render() {
    return (
      <main className="poke-team-builder">
        <SearchBar onSearchPokemon={this.handleSearchByName} />
        <PokemonStatList pokemonStatList={this.state.currentPokemon.stats} />
        <PokemonDescription
          currentPokemon={this.state.currentPokemon}
          handleAddPokemon={this.handleAddPokemon}
        />
        <PokemonMoveList
          pokemonMoveList={this.state.currentPokemon.moves}
          onSelectMove={this.handleSelectMove}
        />
        <PokemonTeam team={this.state.team} onRemovePokemon={this.handleRemovePokemon} />
        <PokemonMoveDescription pokedex={myPokedex} currentMoveName={this.state.currentMoveName} />
      </main>
    );
  }
}

export default PokeTeamBuilder;
