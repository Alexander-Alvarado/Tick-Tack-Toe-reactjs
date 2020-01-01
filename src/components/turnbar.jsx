import React, { Component } from "react";

class TurnBar extends Component {
  render() {
    let player;

    if (this.props.gameOver === true) {
      if (this.props.xTurn === false) {
        player = "X Wins!";
      } else {
        player = "O Wins!";
      }
    } else if (this.props.xTurn === true) {
      player = "X's Turn";
    } else {
      player = "O's Turn";
    }

    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">{player}</a>
      </nav>
    );
  }
}

export default TurnBar;
