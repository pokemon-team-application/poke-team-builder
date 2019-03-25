import React from "react";
import "../styles/PokemonMoveDescription.css";

class PokemonMoveDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMove: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { pokedex, currentMoveName } = this.props;
    if (currentMoveName === "") return;

    if (prevState.currentMove.name !== currentMoveName) {
      pokedex
        .getMoveByName(currentMoveName)
        .then((response) => {
          console.log(response);
          console.log(response.type);
          this.setState({ currentMove: response });
          console.log("Current Move", this.state.currentMove);
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    const { currentMoveName } = this.props;
    const { currentMove } = this.state;
    if (currentMoveName === "") {
      return (
        <aside className="pokemon-move-description">
          <h2 className="move-description-header">Move Attributes</h2>
        </aside>
      );
    }
    return (
      <aside className="pokemon-move-description">
        <h2 className="move-description-header">Move Attributes</h2>
        <ul className="move-unordered-list">
          <li className="move-list-item">
            <span className="move-attribute">Move Name</span>
            <span className="move-attribute-value">{currentMove.name}</span>
          </li>
          <li className="move-list-item">
            <span className="move-attribute">Accuracy</span>
            <span className="move-attribute-value">
              {currentMove.accuracy ? currentMove.accuracy : "N/A"}
            </span>
          </li>
          <li className="move-list-item">
            <span className="move-attribute">Power</span>
            <span className="move-attribute-value">
              {currentMove.power ? currentMove.power : "N/A"}
            </span>
          </li>
          <li className="move-list-item">
            <span className="move-attribute">PP</span>
            <span className="move-attribute-value">
              {currentMove.pp ? currentMove.pp : "N/A"}
            </span>
          </li>
          <li className="move-list-item">
            <span className="move-attribute">Type</span>
            <span className="move-attribute-value">
              {currentMove.type ? currentMove.type.name : "N/A"}
            </span>
          </li>
        </ul>
      </aside>
    );
  }
}

export default PokemonMoveDescription;
