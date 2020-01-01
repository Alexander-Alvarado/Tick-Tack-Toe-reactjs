import React, { Component } from "react";
import Row from "./row";

class Board extends Component {
  render() {
    return (
      <Row
        grid={this.props.grid}
        checkTile={this.props.checkTile}
        gameOver={this.props.gameOver}
        onReset={this.props.onReset}
      />
    );
  }
}

export default Board;
