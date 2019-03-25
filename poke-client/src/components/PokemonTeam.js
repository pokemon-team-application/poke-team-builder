import React from "react";
import "../styles/PokemonTeam.css";

class PokemonTeam extends React.Component {
  render() {
    const { pokemonList, onRemovePokemon } = this.props;

    if (pokemonList.length === 0) {
      console.log("Not Rendering");
      console.log(pokemonList);
      return <section> YOU HAVE NO TEAM MATES!</section>;
    }

    return (
      <section className="pokemon-team">
        <h2>Team</h2>
        <ul>
          {pokemonList.map(pokemon => (
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
