import React from 'react';
import '../styles/PokemonCurrentInfo.css';

class PokemonCurrentInfo extends React.Component {
  render() {
    const { currentPokemon } = this.props;
    if (!currentPokemon.id) {
      return (
        <section className="pokemon-current-info">
          <h2 className="pokemon-current-info-header">Pokemon Current Info</h2>
        </section>
      );
    }
    return (
      <section className="pokemon-description">
        <h2 className="pokemon-current-info-header">Pokemon Current Info</h2>
        <div className="poke_info">
          <h3>Moves</h3>
          <ul>
            {currentPokemon.currentMoves ? (
              currentPokemon.currentMoves.map((move, i) => <li key={i}>{move}</li>)
            ) : (
              <li>No current Moves</li>
            )}
          </ul>
          <h3>Item</h3>
          <ul>
            {currentPokemon.currentItem !== '' ? (
              <li>{currentPokemon.currentItem}</li>
            ) : (
              <li>No Item Held</li>
            )}
          </ul>
        </div>
      </section>
    );
  }
}

export default PokemonCurrentInfo;
