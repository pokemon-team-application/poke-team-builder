/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import '../styles/PokemonDescription.css';

class PokemonDescription extends React.Component {
  handleAdd = event => {
    // event.preventDefault();
    this.props.handleAddPokemon();
  };

  render() {
    const { currentPokemon } = this.props;
    if (!currentPokemon.id) {
      return (
        <section className='pokemon-description'>
          <h2 className='pokemon-empty-header'>Pokemon Description</h2>
        </section>
      );
    }
    return (
      <section className='pokemon-description'>
        <header className='pokemon-description-header'>
          <img
            id='description-header-sprite'
            src={currentPokemon.sprites.front_default}
            alt='Pokemon Sprite'
          />
          <h2 id='description-header-name'>{currentPokemon.name}</h2>
        </header>
        <div className='poke_info'>
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
          <div className='capture-container'>
            <img
              className='capture-picture'
              src='https://archive-media-1.nyafuu.org/vp/image/1418/00/1418001683870.png'
              alt='Team Rocket PokeBall'
              onClick={() => this.handleAdd()}
              role='button'
              onKeyPress={this.handleKeyPress}
            />
            <span>Capture this Pokemon!</span>
          </div>
        </div>
      </section>
    );
  }
}

export default PokemonDescription;
