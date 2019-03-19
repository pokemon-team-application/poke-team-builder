import React from "react";
import "../styles/PokemonTeam.css";

class PokemonTeam extends React.Component {
  render() {
    const { team, onRemovePokemon } = this.props;

    if (team.pokemonList.length === 0) {
      console.log("IF STATE RUNNING");
      return <section> YOU HAVE NO TEAM MATES!</section>;
    }

    return (
      <section className="pokemon-team">
        <h2>Team</h2>
        <ul>
          {team.pokemonList.map(pokemon => (
            <li key={pokemon.uuid}>
              <img src={pokemon.sprites.front_default} alt="Pokemon Sprite" />
              <span>{pokemon.name}</span>
              <button
                type="button"
                onClick={() => onRemovePokemon(pokemon.uuid)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default PokemonTeam;
