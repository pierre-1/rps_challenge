import React, { Component } from "react";
import { computerMove, assessGame } from "./gameLogic";


class Game extends Component {
  state = {
    playerChoice: "",
    computerChoice: "",
    showMessage: false,
    results: ""
  };

  handleClick(event) {
    let playerChoice = event.target.value;
    let computerChoice = computerMove();
    this.setState({
      playerChoice: playerChoice,
      computerChoice: computerChoice,
      showMessage: true,
      result: assessGame()
    });
  }

  render() {
    return (
      <>
        <h1>Play to score for every win!</h1>
        <button onClick={event => this.handleMove(event)} value="rock">
          Rock
        </button>
        <button onClick={event => this.handleMove(event)} value="paper">
          Paper
        </button>
        <button onClick={event => this.handleMove(event)} value="scissors">
          Scissors
        </button>
        {this.state.showMessage && (
          <>
            <h3>You chose: {this.state.playerChoice}</h3>
            <h3>Computer chose: {this.state.computerChoice}</h3>
            <h2>{this.state.results}</h2>
          </>
        )}
      </>
    );
  }
}

export default Game;
