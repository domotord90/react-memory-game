import React, { useEffect } from "react";

import "../styles/CardGame.css";

const CardGame = ({
  newGame,
  difficulty,
  setDifficulty,
  moves,
  setMoves,
  time,
  setTime,
  iconArray,
  cardsArray,
  setCardsArray,
  FontAwesomeIcon,
  faQuestion,
  currentCards,
  setCurrentCards,
  foundPairs,
  setFoundPairs,
  won,
  setWon,
  faTrophy,
  faThumbsUp,
  timer,
  setTimer
}) => {
  const getClock = seconds => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min < 10 ? `0${min}` : `${min}`}:${
      sec < 10 ? `0${sec}` : `${sec}`
    }`;
  };

  useEffect(() => {
    if (difficulty) {
      switch (difficulty) {
        case 1:
          setMoves(12);
          setTime(60);
          break;
        case 2:
          setMoves(20);
          setTime(120);
          break;
        case 3:
          setMoves(30);
          setTime(180);
          break;
        default:
          break;
      }
      const tempIArray = [...iconArray];
      shuffle(tempIArray);
      const tempCArray = [];
      const numOfPairs = difficulty === 1 ? 6 : difficulty === 2 ? 9 : 12;
      for (let i = 0; i < numOfPairs; i++) {
        const iconName = tempIArray[i].props.icon.iconName;
        let item = React.cloneElement(tempIArray[i], {
          key: `${iconName}-1`,
          id: `${iconName}-1`
        });
        tempCArray.push(item);
        item = React.cloneElement(tempIArray[i], {
          key: `${iconName}-2`,
          id: `${iconName}-2`
        });
        tempCArray.push(item);
      }
      shuffle(tempCArray);
      setCardsArray(tempCArray);
      //setTime(time - 1);
    }
  }, [difficulty]);

  const timeFunction = () => {
    if (time > 0) {
      setTime(time - 1);
    }
  };

  useEffect(() => {
    if (time > 0 && won !== "won" && won !== "lost") {
      setTimer(setInterval(timeFunction, 1000));
    } else if (time === 0 && won !== "won" && won !== "lost") {
      setTimer(null);
      setWon("lost");
      setCardsArray([]);
    }
    return () => clearInterval(timer);
  }, [time]);

  const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  useEffect(() => {
    if (currentCards.length === 2) {
      setTimeout(() => {
        if (currentCards[0].name === currentCards[1].name) {
          const tempArray = [...foundPairs];
          tempArray.push(currentCards[0].name);
          setFoundPairs(tempArray);
          setCurrentCards([]);
          if (foundPairs.length !== cardsArray.length / 2 - 1) {
            setMoves(moves - 1);
          }
        } else {
          setCurrentCards([]);
          setMoves(moves - 1);
        }
      }, 700);
    }
  }, [currentCards]);

  useEffect(() => {
    if (cardsArray.length !== 0) {
      if (foundPairs.length === cardsArray.length / 2) {
        setWon("won");
        setCardsArray([]);
      }
    }
  }, [foundPairs]);

  useEffect(() => {
    if (
      moves === 0 &&
      (foundPairs.length !== cardsArray.length / 2 || won !== "won")
    ) {
      setWon("lost");
      setCardsArray([]);
    }
  }, [moves]);

  const cardOnClick = e => {
    const { className } = e.target;
    if (className === "card-front") {
      const tempArray = [...currentCards];
      tempArray.push({
        id: Object.values(e.target.parentElement.children[1].children[0])[0]
          .pendingProps.id,
        name: Object.values(e.target.parentElement.children[1].children[0])[0]
          .pendingProps["data-icon"]
      });
      setCurrentCards(tempArray);
    }
  };

  const newGameClick = () => {
    setMoves(null);
    setTime(null);
    setCardsArray([]);
    setFoundPairs([]);
    setWon(null);
    setTimer(null);
    setDifficulty(null);
  };

  return (
    <div className="card-game-container">
      <div className="info-container">
        <p className="info-difficulty">{`Difficulty: ${
          difficulty === 1 ? "Easy" : difficulty === 2 ? "Medium" : "Hard"
        }`}</p>
        <p className="info-moves">{`Remaining moves: ${moves}`}</p>
        <p className="info-time">{`Time: ${getClock(time)}`}</p>
      </div>
      {cardsArray !== null && (
        <div
          className={`cards-container ${
            difficulty === 1
              ? "cards-easy"
              : difficulty === 2
              ? "cards-medium"
              : "cards-hard"
          }`}
        >
          {cardsArray.map(item => {
            return (
              <div
                key={`card-container-${item.key}`}
                className={`card-flip-container ${
                  currentCards.length === 1
                    ? currentCards[0].id === item.key
                      ? "card-flip"
                      : ""
                    : currentCards.length === 2
                    ? currentCards[0].id === item.key ||
                      currentCards[1].id === item.key
                      ? "card-flip"
                      : ""
                    : ""
                } ${
                  foundPairs.includes(item.props.icon.iconName)
                    ? "card-flip"
                    : ""
                }`}
                onClick={cardOnClick}
              >
                <div className="card-flipper">
                  <div className="card-front">
                    <FontAwesomeIcon className="card-icon" icon={faQuestion} />
                  </div>
                  <div
                    className={`card-back ${
                      foundPairs.includes(item.props.icon.iconName)
                        ? "pair-found"
                        : ""
                    }`}
                  >
                    {item}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {won === "won" && (
        <div className="won-container">
          <FontAwesomeIcon className="trophy" icon={faTrophy} />
          <p className="won-description">Coungratulations!</p>
          <p className="won-description">You won!</p>
          <button onClick={newGameClick} className="start-new-game-again">
            Start a new game
          </button>
        </div>
      )}
      {won === "lost" && (
        <div className="lost-container">
          <FontAwesomeIcon className="thumbs-up" icon={faThumbsUp} />
          <p className="lost-description">Sorry, you lost!</p>
          <p className="lost-description">But nice try, don't give up!</p>
          <button onClick={newGameClick} className="start-new-game-again">
            Try again
          </button>
        </div>
      )}
    </div>
  );
};

export default CardGame;
