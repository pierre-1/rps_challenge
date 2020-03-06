import "./App.css";
import React, { Component } from "react";
import { computerMove, assessGame, totalscores} from "./gameLogic";
import { Button } from 'semantic-ui-react'

class App extends Component {
  state = {
    playerChoice: "",
    computerChoice: "",
    results: "",
    playerScore: 0,
    computerScore: 0,
    score: null,
    showMessage: false
  };

  handleButtonClick(event) {
    let playerChoice = event.target.name;
    let computerChoice = computerMove();
    let score = totalscores()
    this.setState({
      playerChoice: playerChoice,
      computerChoice: computerChoice,
      showMessage: true,
      results: assessGame(playerChoice, computerChoice),
      score: score
    });
  }

  render() {
    return (
      <>
        <center><div>
        <h1>Play Rock Paper Scissors!</h1>
        <h2>Click to play</h2>
        <Button id="rock"
          onClick={event => this.handleButtonClick(event)}
          name="rock">rock
        </Button>
        <Button id="paper"
          onClick={event => this.handleButtonClick(event)}
          name="paper">paper
        </Button>
        <Button id="scissors"
          onClick={event => this.handleButtonClick(event)}
          name="scissors">scissors
        </Button>
        </div></center>
        {this.state.showMessage && (
          <center><>
            <h3>{`You chose ${this.state.playerChoice}, computer chose ${this.state.computerChoice}`}</h3>
            <h1>{this.state.results}</h1>
          </></center>
        )}
      </>
    );
  }
}
export default App;
