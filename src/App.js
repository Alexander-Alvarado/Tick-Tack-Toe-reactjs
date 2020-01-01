import React, { Component } from "react";
import "./App.css";
import Board from "./components/board";
import TurnBar from "./components/turnbar";

class App extends Component {
  state = {
    xTurn: true,
    gameOver: false,
    emptySpace: true,
    grid: [
      { id: 1, value: "_", winTile: false },
      { id: 2, value: "_", winTile: false },
      { id: 3, value: "_", winTile: false },
      { id: 4, value: "_", winTile: false },
      { id: 5, value: "_", winTile: false },
      { id: 6, value: "_", winTile: false },
      { id: 7, value: "_", winTile: false },
      { id: 8, value: "_", winTile: false },
      { id: 9, value: "_", winTile: false }
    ]
  };

  checkTile = tile => {
    const grid = [...this.state.grid];
    const index = grid.indexOf(tile);

    if (grid[index].value === "_") {
      this.handlePlace(tile);
    }
  };

  handlePlace = tile => {
    if (this.state.xTurn === true) {
      const grid = [...this.state.grid];
      const index = grid.indexOf(tile);
      grid[index].value = "x";
      this.setState({ grid });

      let xTurn = this.state.xTurn;
      xTurn = false;
      this.setState({ xTurn });
    } else {
      const grid = [...this.state.grid];
      const index = grid.indexOf(tile);
      grid[index].value = "o";
      this.setState({ grid });

      let xTurn = this.state.xTurn;
      xTurn = true;
      this.setState({ xTurn });
    }
    this.checkWin(tile);
  };

  handleReset = () => {
    const grid = this.state.grid.map(g => {
      g.value = "_";
      g.winTile = false;
      return g;
    });
    this.setState({ grid });

    let xTurn = this.state.xTurn;
    xTurn = true;
    this.setState({ xTurn });

    let gameOver = this.state.gameOver;
    gameOver = false;
    this.setState({ gameOver });
  };

  checkWin(tile) {
    const { grid } = this.state;

    for (let i = 0; i < 9; i = i + 3) {
      //horizontal(i=0,3,6): i, i+1, i+2
      if (
        grid[i].value !== "_" &&
        grid[i + 1].value !== "_" &&
        grid[i + 2].value !== "_" &&
        grid[i].value === grid[i + 1].value &&
        grid[i].value === grid[i + 2].value
      ) {
        const grid = [...this.state.grid];
        grid[i].winTile = true;
        grid[i + 1].winTile = true;
        grid[i + 2].winTile = true;
        this.setState({ grid });

        let gameOver = this.state.gameOver;
        gameOver = true;
        this.setState({ gameOver });
        console.log("Horizontal Winner");
      }
    }

    for (let i = 0; i < 3; i++) {
      //vertical(i=0,1,2): i, i+3, i+6
      if (
        grid[i].value !== "_" &&
        grid[i + 3].value !== "_" &&
        grid[i + 6].value !== "_" &&
        grid[i].value === grid[i + 3].value &&
        grid[i].value === grid[i + 6].value
      ) {
        const grid = [...this.state.grid];
        grid[i].winTile = true;
        grid[i + 3].winTile = true;
        grid[i + 6].winTile = true;
        this.setState({ grid });

        let gameOver = this.state.gameOver;
        gameOver = true;
        this.setState({ gameOver });

        console.log("Vertical Winner");
      }
    }

    if (
      //diagnalDown(i=0): i, i+4, i+8
      grid[0].value !== "_" &&
      grid[4].value !== "_" &&
      grid[8].value !== "_" &&
      grid[0].value === grid[4].value &&
      grid[4].value === grid[8].value
    ) {
      const grid = [...this.state.grid];
      grid[0].winTile = true;
      grid[4].winTile = true;
      grid[8].winTile = true;
      this.setState({ grid });
      let gameOver = this.state.gameOver;
      gameOver = true;
      this.setState({ gameOver });

      console.log("Diagnal Winner");
    }

    if (
      //diagnalUp(i=2): i, i+2, i+4
      grid[2].value !== "_" &&
      grid[4].value !== "_" &&
      grid[6].value !== "_" &&
      grid[2].value === grid[4].value &&
      grid[4].value === grid[6].value
    ) {
      const grid = [...this.state.grid];
      grid[2].winTile = true;
      grid[4].winTile = true;
      grid[6].winTile = true;
      this.setState({ grid });

      let gameOver = this.state.gameOver;
      gameOver = true;
      this.setState({ gameOver });

      console.log("Diagnal Winner");
    }
  }

  render() {
    return (
      <React.Fragment>
        <TurnBar xTurn={this.state.xTurn} gameOver={this.state.gameOver} />

        <Board
          grid={this.state.grid}
          checkTile={this.checkTile}
          onReset={this.handleReset}
          gameOver={this.state.gameOver}
        />
      </React.Fragment>
    );
  }
}

export default App;
