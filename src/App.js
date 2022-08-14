import "./App.css";
import { useEffect, useState } from "react";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { initialState } from "./initialState";

const App = () => {
  // method way - calls only the very first time component is rendered
  const [characters, setCharacters] = useState(() => {
    console.log("initial state was loaded");
    return initialState;
  });
  /////////////////////////////////////////////////////////////

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // const [winnerArray, setWinnerArray] = useState([]);
  // const [order, setOrder] = useState({ order: 0 });

  useEffect(() => {
    shuffleCards(characters);

    if (currentScore === 12) {
      setCharacters(initialState);
      resetBoard();
      // shuffleCards(characters);
      console.log("max score... board reset");
    }
  }, [currentScore]); //calls when component mounts(once) => and everytime when currentscore updates

  const handleClick = (char) => {
    if (!char.clicked) {
      const newArray = characters.map((character) =>
        character.id === char.id ? { ...character, clicked: true } : character
      );

      setCharacters(newArray);
      addScore();
      console.log(char);
      // shuffleCards(newArray);
    }
    if (char.clicked) {
      resetBoard();
      setCharacters(initialState); //set clicked back to false. gets scambled in useeffect
    }

    // setCharacters((prevState) => ({
    //   ...prevState,
    //   [id]: {
    //     ...prevState[id],
    //     name: "clicked",
    //   },
    // }));

    // checkGameOver(characters[character.id]);
  };

  const shuffleCards = (array) => {
    const shuffledCards = [...array].sort(() => Math.random() - 0.5);
    setCharacters(shuffledCards);
  };
  // const resetArrayState = () => {
  //   setWinnerArray([]);
  // };

  const addScore = () => {
    setCurrentScore((prevCount) => prevCount + 1);
  };

  const resetScore = () => {
    setCurrentScore(0);
  };
  const setHighScore = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    } else {
      setBestScore((prevScore) => prevScore);
    }
  };
  const resetBoard = () => {
    resetScore();
    setHighScore();
  };

  // const checkGameOver = (cardObject) => {
  //   const objectName = cardObject.name;
  //   const objectId = cardObject.id;
  //   const addCharacter = characters.map((c) => c.id === objectId);

  //   if (winnerArray.includes(objectId)) {
  //     console.log("ggs no deeeal");
  //     resetArrayState();
  //     setCharacters(initialState);
  //     setHighScore();
  //     resetScore();
  //     //if winner array is cleared, useeffect will call the game reset funciton?
  //   } else if (addCharacter.includes(true)) {
  //     setWinnerArray((oldArray) => [...oldArray, objectId]);
  //     // setWinnerArray(addCharacter);
  //     console.log(addCharacter);
  //     console.log(winnerArray);
  //     console.log(objectName + " was pushed into the array");
  //     addScore();
  //     // shuffleCards();

  //     //scramble positions
  //   }
  // };

  // const random = () => {
  //   for (let i = 0; i < 12; i++) {
  //     let random = shuffleArray(characters);
  //     // setCharacters((prevState) => ({
  //     //   ...prevState,
  //     //   [i]: {
  //     //     ...prevState[random],
  //     //   },
  //     // }));
  //     setCharacters(random);
  //   }
  // };

  useEffect(() => {
    console.log("yo");
  }, [characters]);

  return (
    <div className="App">
      <Header />
      <hr></hr>
      <Main
        characters={characters}
        handleClick={handleClick}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <Footer />
    </div>
  );
};

export default App;
