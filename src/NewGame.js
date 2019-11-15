import React from "react";

import "./NewGame.css";

const NewGame = ({
  newGame,
  setNewGame,
  difficulty,
  setDifficulty,
  setMoves,
  setTime
}) => {
  const buttonNewGame = () => {
    setNewGame(true);
  };

  const difficultyOptionClick = e => {
    const { innerText } = e.target;
    switch (innerText) {
      case "Easy":
        setDifficulty(1);
        // setMoves(12);
        // setTime(60);
        break;
      case "Medium":
        setDifficulty(2);
        // setMoves(20);
        // setTime(120);
        break;
      case "Hard":
        setDifficulty(3);
        // setMoves(30);
        // setTime(180);
        break;
      default:
        break;
    }
  };

  return (
    <div className="new-game-container">
      {!newGame && (
        <button className="new-game-button" onClick={buttonNewGame}>
          Start a new game!
        </button>
      )}
      {newGame && difficulty === null && (
        <div className="difficulty-container">
          <p className="difficulty-option" onClick={difficultyOptionClick}>
            Easy
          </p>
          <p className="difficulty-option" onClick={difficultyOptionClick}>
            Medium
          </p>
          <p className="difficulty-option" onClick={difficultyOptionClick}>
            Hard
          </p>
        </div>
      )}
    </div>
  );
};

export default NewGame;
