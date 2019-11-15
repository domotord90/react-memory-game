import React, { useState, useEffect } from "react";

import Header from "./Header";
import NewGame from "./NewGame";
import CardGame from "./CardGame";

import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCat,
  faGhost,
  faDragon,
  faFistRaised,
  faPaw,
  faCloudSun,
  faSnowboarding,
  faLeaf,
  faBirthdayCake,
  faSnowman,
  faEye,
  faFrog,
  faRobot,
  faSnowflake,
  faChess,
  faCoffee,
  faCrown,
  faPallet,
  faSplotch,
  faStamp,
  faLaughBeam,
  faHandHoldingHeart,
  faRibbon,
  faHatWizard,
  faBicycle,
  faAnchor,
  faBell,
  faIceCream,
  faFootballBall,
  faTrophy,
  faQuestion,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [newGame, setNewGame] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [moves, setMoves] = useState(null);
  const [time, setTime] = useState(null);
  const [iconArray, setIconArray] = useState([]);
  const [cardsArray, setCardsArray] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);
  const [won, setWon] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const array = [];
    array.push(<FontAwesomeIcon className="card-icon" icon={faHeart} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faCat} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faGhost} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faDragon} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faFistRaised} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faPaw} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faCloudSun} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faSnowboarding} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faLeaf} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faBirthdayCake} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faSnowman} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faEye} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faFrog} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faRobot} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faSnowflake} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faChess} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faCoffee} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faCrown} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faPallet} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faSplotch} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faStamp} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faLaughBeam} />);
    array.push(
      <FontAwesomeIcon className="card-icon" icon={faHandHoldingHeart} />
    );
    array.push(<FontAwesomeIcon className="card-icon" icon={faRibbon} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faHatWizard} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faBicycle} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faAnchor} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faBell} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faIceCream} />);
    array.push(<FontAwesomeIcon className="card-icon" icon={faFootballBall} />);
    setIconArray(array);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <NewGame
        newGame={newGame}
        setNewGame={setNewGame}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        setMoves={setMoves}
        setTime={setTime}
      />
      {newGame && difficulty !== null && (
        <CardGame
          newGame={newGame}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          moves={moves}
          setMoves={setMoves}
          time={time}
          setTime={setTime}
          iconArray={iconArray}
          cardsArray={cardsArray}
          setCardsArray={setCardsArray}
          FontAwesomeIcon={FontAwesomeIcon}
          faQuestion={faQuestion}
          currentCards={currentCards}
          setCurrentCards={setCurrentCards}
          foundPairs={foundPairs}
          setFoundPairs={setFoundPairs}
          won={won}
          setWon={setWon}
          faTrophy={faTrophy}
          faThumbsUp={faThumbsUp}
          timer={timer}
          setTimer={setTimer}
        />
      )}
    </div>
  );
};

export default App;
