import React from 'react';
import '../styles/PokemonStatList.css';

const PokemonStatList = props => {
  const { pokemonStatList } = props;
  if (!pokemonStatList) return <aside className="pokemon-stat-list" />;
  return (
    <aside className="pokemon-stat-list">
      <ul>
        {pokemonStatList.map(stat => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PokemonStatList;
