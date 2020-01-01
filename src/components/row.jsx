import React, { Component } from "react";
import Tile from "./tile";

class Row extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center btn ">{this.row1()}</div>
        <div className="d-flex justify-content-center btn ">{this.row2()}</div>
        <div className="d-flex justify-content-center btn ">{this.row3()}</div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger" onClick={this.props.onReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  row1() {
    const grid = [...this.props.grid];
    return grid
      .filter(g => g.id < 4)
      .map(tile => (
        <Tile
          key={tile.id}
          tile={tile}
          checkTile={this.props.checkTile}
          gameOver={this.props.gameOver}
        />
      ));
  }

  row2() {
    const grid = [...this.props.grid];
    return grid
      .filter(g => g.id > 3 && g.id < 7)
      .map(tile => (
        <Tile
          key={tile.id}
          tile={tile}
          checkTile={this.props.checkTile}
          gameOver={this.props.gameOver}
        />
      ));
  }

  row3() {
    const grid = [...this.props.grid];
    return grid
      .filter(g => g.id > 6)
      .map(tile => (
        <Tile
          key={tile.id}
          tile={tile}
          checkTile={this.props.checkTile}
          gameOver={this.props.gameOver}
        />
      ));
  }
}

export default Row;
