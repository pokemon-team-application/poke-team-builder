import React from 'react';
import '../styles/PokemonMoveList.css';

class PokemonMoveList extends React.Component {
  render() {
    const { pokemonMoveList, onSelectMove } = this.props;
    if (!pokemonMoveList) {
      return (
        <aside className="pokemon-move-list">
          <h2 className="move-title">Move List</h2>
        </aside>
      );
    }
    return (
      <aside className="pokemon-move-list">
        <h2 className="move-title">Move List</h2>
        {pokemonMoveList.map(move => (
          <button key={move.move.name} type="button" onClick={() => onSelectMove(move.move.name)}>
            {move.move.name}
          </button>
        ))}
      </aside>
    );
  }
}

export default PokemonMoveList;
