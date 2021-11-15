import React, { Component } from "react";
import Team from "./Team";

const weapons = ["rock", "paper", "scissor"];
class Game extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return "Oops it's a Tie!";
    } else if (
      (playerOne === "rock" && playerTwo === "scissor") ||
      (playerOne === "scissor" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Rock Paper Scissor</h1>

        <div>
          <Team weapon={playerOne} />
          <Team weapon={playerTwo} />
        </div>
        <div className="rows">
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("rock")}
          >
            rock
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("paper")}
          >
            paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("scissor")}
          >
            scissor
          </button>
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>
        <button type="button" onClick={this.startGame}>
          Start Game!
        </button>
      </>
    );
  }
}

export default Game;
