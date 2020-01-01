import React, { Component } from "react";
import Row from "./row";

class Board extends Component {
  render() {
    return (
      <Row
        grid={this.props.grid}
        gameOver={this.props.gameOver}
        onReset={this.props.onReset}
        freeSpaces={this.props.freeSpaces}
        xTurn={this.props.xTurn}
        checkTile={this.props.checkTile}
        handleCpuTurn={this.props.handleCpuTurn}
      />
    );
  }
}

export default Board;
