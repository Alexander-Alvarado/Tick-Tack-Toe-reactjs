import React, { Component } from "react";

class Tile extends Component {
  render() {
    let tile;

    if (this.props.tile.winTile === true) {
      tile = (
        <button disabled className="btn  btn-success  m-1  ">
          {this.props.tile.value}
        </button>
      );
    } else if (this.props.gameOver === true) {
      tile = (
        <button disabled className="btn btn-light m-1">
          {this.props.tile.value}
        </button>
      );
    } else if (this.props.tile.value === "_") {
      tile = (
        <button
          className="btn btn-light m-1"
          onClick={() => this.props.checkTile(this.props.tile)}
        >
          {this.props.tile.value}
        </button>
      );
    } else {
      tile = (
        <button disabled className="btn btn-light m-1">
          {this.props.tile.value}
        </button>
      );
    }

    return <div>{tile}</div>;
  }
}

export default Tile;
