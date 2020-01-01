import React, { Component } from "react";
import Tile from "./tile";

class Row extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="btn-group">{this.row1()}</div>
        </div>
        <div>
          <div className="btn-group">{this.row2()}</div>
        </div>
        <div>
          <div className="btn-group">{this.row3()}</div>
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
