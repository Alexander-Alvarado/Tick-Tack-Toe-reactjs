import React, { Component } from "react";
import Tile from "./tile";

class Row extends Component {
  render() {
    let cpuButton;

    if (this.props.gameOver === false) {
      cpuButton = (
        <button
          className="btn btn-primary m-1"
          onClick={this.props.handleCpuTurn}
        >
          CPU Turn
        </button>
      );
    } else if (this.props.gameOver === true) {
      cpuButton = (
        <button disabled className="btn btn-primary m-1">
          CPU Turn
        </button>
      );
    }
    return (
      <div className="container">
        <div className="d-flex justify-content-center btn ">{this.row1()}</div>
        <div className="d-flex justify-content-center btn ">{this.row2()}</div>
        <div className="d-flex justify-content-center btn ">{this.row3()}</div>
        <div className="d-flex justify-content-center">
          {cpuButton}
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
          gameOver={this.props.gameOver}
          freeSpaces={this.props.freeSpaces}
          xTurn={this.props.xTurn}
          checkTile={this.props.checkTile}
          handleCpuTurn={this.props.handleCpuTurn}
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
          gameOver={this.props.gameOver}
          freeSpaces={this.props.freeSpaces}
          xTurn={this.props.xTurn}
          checkTile={this.props.checkTile}
          handleCpuTurn={this.props.handleCpuTurn}
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
          gameOver={this.props.gameOver}
          freeSpaces={this.props.freeSpaces}
          xTurn={this.props.xTurn}
          checkTile={this.props.checkTile}
          handleCpuTurn={this.props.handleCpuTurn}
        />
      ));
  }
}

export default Row;
