import React from 'react';
import '../styles/PokemonMoveList.css';

class PokemonMoveList extends React.Component {
  render() {
    const { pokemonMoveList, onSelectMove } = this.props;
    if (!pokemonMoveList) return <aside>NADA!</aside>;
    return (
      <aside className="pokemon-move-list">
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
