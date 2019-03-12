import React from 'react';
import '../styles/PokemonDescription.css';

class PokemonDescription extends React.Component {
  render() {
    const { currentPokemon } = this.props;
    if (!currentPokemon.id) return <section className="pokemon-description" />;
    return (
      <section className="pokemon-description">
        <header className="pokemon-description-header">
          <img
            id="description-header-sprite"
            src={currentPokemon.sprites.front_default}
            alt="Pokemon Sprite"
          />
          <h2 id="description-header-name">{currentPokemon.name}</h2>
          <button id="description-header-add" type="submit">
            +
          </button>
        </header>
        <h3>Types</h3>
        <ul>
          {currentPokemon.types.map(type => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
        <h3>Abilities</h3>
        <ul>
          {currentPokemon.abilities.map(ability => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default PokemonDescription;
