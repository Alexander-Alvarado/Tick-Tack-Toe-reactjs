import React, { Component } from "react";
import Row from "./row";

class Board extends Component {
  render() {
    return (
      <div className="bg-secondary">
        <Row
          grid={this.props.grid}
          checkTile={this.props.checkTile}
          gameOver={this.props.gameOver}
        />

        <button
          className="btn btn-danger btn-outline-dark btn-md"
          onClick={this.props.onReset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Board;
