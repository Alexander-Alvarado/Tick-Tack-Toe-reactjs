import React, { Component } from "react";

class Tile extends Component {
  render() {
    let tile;

    if (this.props.tile.winTile === true) {
      if (this.props.xTurn === false) {
        tile = (
          <button disabled className="btn btn-lg btn-success  mx-2">
            {this.props.tile.value}
          </button>
        );
      } else {
        tile = (
          <button disabled className="btn btn-lg btn-danger  mx-2">
            {this.props.tile.value}
          </button>
        );
      }
    } else if (this.props.gameOver === true && this.props.winner === false) {
      tile = (
        <button disabled className="btn btn-lg btn-warning mx-2">
          {this.props.tile.value}
        </button>
      );
    } else if (this.props.gameOver === true) {
      tile = (
        <button disabled className="btn btn-lg btn-light mx-2">
          {this.props.tile.value}
        </button>
      );
    } else if (this.props.tile.value === "_") {
      tile = (
        <div className="_">
          <button
            className="btn btn-lg btn-light mx-2"
            onClick={() =>
              this.props.checkTile(this.props.tile, this.props.freeSpaces)
            }
          >
            {this.props.tile.value}
          </button>
        </div>
      );
    } else {
      tile = (
        <button disabled className="btn btn-lg btn-light mx-2">
          {this.props.tile.value}
        </button>
      );
    }

    return <div>{tile}</div>;
  }
}

export default Tile;
