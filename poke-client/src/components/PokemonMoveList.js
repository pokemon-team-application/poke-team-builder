import React from "react";
import "../styles/PokemonMoveList.css";

class PokemonMoveList extends React.Component {
  render() {
    const { pokemonMoveList } = this.props;
    if (!pokemonMoveList) return <aside>NADA!</aside>;
    return (
      <aside className="pokemon-move-list">
        <ul>
          {pokemonMoveList.map(move => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default PokemonMoveList;
