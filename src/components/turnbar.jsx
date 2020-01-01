import React, { Component } from "react";

class TurnBar extends Component {
  render() {
    let player;

    if (this.props.gameOver === true) {
      if (this.props.xTurn === false) {
        player = "You Win!";
      } else {
        player = "CPU Wins!";
      }
    } else if (this.props.freeSpaces === 0) {
      player = "No Winner";
    } else if (this.props.xTurn === true) {
      player = "Your Turn";
    } else {
      player = "CPU's Turn";
    }

    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">{player}</a>
      </nav>
    );
  }
}

export default TurnBar;
