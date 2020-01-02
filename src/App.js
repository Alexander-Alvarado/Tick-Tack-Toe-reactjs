import React, { Component } from "react";
import "./App.css";
import Board from "./components/board";
import TurnBar from "./components/turnbar";

class App extends Component {
  state = {
    xTurn: true, //x is the player, o is cpu
    freeSpaces: 9,
    cpuBlock: false,
    cpuMove: null,
    gameOver: false,
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

  checkTile = (tile, freeSpaces) => {
    const grid = [...this.state.grid];
    const index = grid.indexOf(tile);
    this.setState({ cpuBlock: false, cpuMove: null });

    if (this.state.xTurn === true && grid[index].value === "_") {
      if (freeSpaces === 1) {
        console.log("board full");
        this.setState({ gameOver: true });
      }
      this.handlePlace(tile);
    }
  };

  handleCpuTurn = () => {
    if (this.state.xTurn === false) {
      const grid = [...this.state.grid];

      if (
        this.state.cpuBlock === true &&
        grid[this.state.cpuMove - 1].value === "_"
      ) {
        let index = this.state.cpuMove - 1;
        grid[index].value = "o";
        this.setState({ grid, cpuBlock: false, cpuMove: null });
        console.log("blocked player at", this.state.cpuMove);
      } else if (this.state.freeSpaces > -1) {
        let randIndex;

        do {
          randIndex = Math.floor(Math.random() * 9);
        } while (grid[randIndex].value !== "_");

        grid[randIndex].value = "o";
        this.setState({ grid });
        console.log("random play at", randIndex + 1);
      }
      this.handlePlace();
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
    } else if (this.state.xTurn === false) {
      let xTurn = this.state.xTurn;
      xTurn = true;
      this.setState({ xTurn });
    }

    this.setState({ freeSpaces: this.state.freeSpaces - 1 });

    this.checkWin();
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

    let freeSpaces = this.state.freeSpaces;
    freeSpaces = 9;
    this.setState({ freeSpaces });

    this.setState({ cpuBlock: false, cpuMove: null });
    console.log("new game");
  };

  checkWin = () => {
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
      } else if (
        grid[i].value !== "_" &&
        grid[i + 1].value !== "_" &&
        grid[i + 2].value === "_" &&
        grid[i].value === grid[i + 1].value
      ) {
        this.setState({ cpuBlock: true, cpuMove: grid[i + 2].id });
      } else if (
        grid[i].value !== "_" &&
        grid[i + 2].value !== "_" &&
        grid[i + 1].value === "_" &&
        grid[i].value === grid[i + 2].value
      ) {
        this.setState({ cpuBlock: true, cpuMove: grid[i + 1].id });
      } else if (
        grid[i].value !== "_" &&
        grid[i + 1].value !== "_" &&
        grid[i + 2].value === "_" &&
        grid[i].value === grid[i + 1].value
      ) {
        this.setState({ cpuBlock: true, cpuMove: grid[i + 2].id });
      } else if (
        grid[i + 1].value !== "_" &&
        grid[i + 2].value !== "_" &&
        grid[i].value === "_" &&
        grid[i + 1].value === grid[i + 2].value
      ) {
        this.setState({ cpuBlock: true, cpuMove: grid[i].id });
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
      } else if (
        grid[i].value !== "_" &&
        grid[i + 3].value !== "_" &&
        grid[i + 6].value === "_" &&
        grid[i].value === grid[i + 3].value
      ) {
        this.setState({ cpuBlock: true, cpuMove: grid[i + 6].id });
      } else if (
        grid[i].value !== "_" &&
        grid[i + 6].value !== "_" &&
        grid[i + 3].value === "_" &&
        grid[i].value === grid[i + 6].value
      ) {
        this.setState({ cpuBlock: true, cpuMove: grid[i + 3].id });
      } else if (
        grid[i + 3].value !== "_" &&
        grid[i + 6].value !== "_" &&
        grid[i].value === "_" &&
        grid[i + 3].value === grid[i + 6].value
      ) {
        this.setState({ cpuBlock: true, cpuMove: grid[i].id });
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
    } else if (
      grid[0].value !== "_" &&
      grid[4].value !== "_" &&
      grid[8].value === "_" &&
      grid[0].value === grid[4].value
    ) {
      this.setState({ cpuBlock: true, cpuMove: grid[8].id });
    } else if (
      grid[0].value !== "_" &&
      grid[8].value !== "_" &&
      grid[4].value === "_" &&
      grid[0].value === grid[8].value
    ) {
      this.setState({ cpuBlock: true, cpuMove: grid[4].id });
    } else if (
      grid[4].value !== "_" &&
      grid[8].value !== "_" &&
      grid[0].value === "_" &&
      grid[4].value === grid[8].value
    ) {
      this.setState({ cpuBlock: true, cpuMove: grid[0].id });
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
    } else if (
      grid[2].value !== "_" &&
      grid[4].value !== "_" &&
      grid[6].value === "_" &&
      grid[2].value === grid[4].value
    ) {
      this.setState({ cpuBlock: true, cpuMove: grid[6].id });
    } else if (
      grid[2].value !== "_" &&
      grid[6].value !== "_" &&
      grid[4].value === "_" &&
      grid[2].value === grid[6].value
    ) {
      this.setState({ cpuBlock: true, cpuMove: grid[4].id });
    } else if (
      grid[4].value !== "_" &&
      grid[6].value !== "_" &&
      grid[2].value === "_" &&
      grid[4].value === grid[6].value
    ) {
      this.setState({ cpuBlock: true, cpuMove: grid[2].id });
    }
  };

  render() {
    return (
      <React.Fragment>
        <TurnBar
          xTurn={this.state.xTurn}
          gameOver={this.state.gameOver}
          freeSpaces={this.state.freeSpaces}
        />
        <div>
          <Board
            grid={this.state.grid}
            checkTile={this.checkTile}
            onReset={this.handleReset}
            gameOver={this.state.gameOver}
            freeSpaces={this.state.freeSpaces}
            xTurn={this.state.xTurn}
            handlePlace={this.handlePlace}
            handleCpuTurn={this.handleCpuTurn}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
