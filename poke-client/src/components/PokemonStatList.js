import React from "react";
import "../styles/PokemonStatList.css";

const PokemonStatList = (props) => {
  const { pokemonStatList } = props;
  if (!pokemonStatList) {
    return (
      <aside className="pokemon-stat-list">
        <h2 className="stat-list-header">Pokemon Base Stats</h2>
      </aside>
    );
  }
  return (
    <aside className="pokemon-stat-list">
      <h2 className="stat-list-header">Pokemon Base Stats</h2>
      <ul className="stat-unordered-list">
        {pokemonStatList.map(stat => (
          <li key={stat.stat.name} className="stat-list-item">
            <span className="stat-name">{stat.stat.name}</span>
            <span className="stat-value">{stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PokemonStatList;
