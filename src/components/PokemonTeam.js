import React from "react";
import "../styles/PokemonTeam.css";

class PokemonTeam extends React.Component {
  render() {
    const { pokemonList, onRemovePokemon } = this.props;

    if (pokemonList.length === 0) {
      return (
        <section className="pokemon-team">
          <h2 className="team-title">Team</h2>
        </section>
      );
    }

    return (
      <section className="pokemon-team">
        <h2 className="team-title">Team</h2>
        <div className="pokemon-team-list">
          {pokemonList.map(pokemon => (
            <div key={pokemon.uuid} className="poke-bullets">
              <img
                src="https://66.media.tumblr.com/1d710c53dddcd114b42e4781fa1c52cf/tumblr_inline_mi3fpcf9fz1roozkr.png"
                alt="Poke Bullet"
              />
              <img src={pokemon.sprites.front_default} alt="Pokemon Sprite" />
              <span>{pokemon.name}</span>
              <span />
              <button
                className="delete-button"
                type="button"
                onClick={() => onRemovePokemon(pokemon.uuid)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default PokemonTeam;
