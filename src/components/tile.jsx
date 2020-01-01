import React, { Component } from "react";

class Tile extends Component {
  render() {
    let tile;

    if (this.props.tile.winTile === true) {
      tile = (
        <button disabled className="btn btn-lg btn-success  mx-2">
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
        <div className="">
          <button
            className="btn btn-lg btn-light mx-2"
            onClick={() => this.props.checkTile(this.props.tile)}
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
