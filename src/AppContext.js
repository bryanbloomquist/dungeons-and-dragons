import React, { useState } from "react";

const Context = React.createContext({});

const Provider = ({ children }) => {
  //////////STATE FOR DICE TRAY BEGINS HERE//////////

  const [diceModifier, setDiceModifier] = useState(0);
  const [diceResults, setDiceResults] = useState("");
  const [numberOfDice, setNumberOfDice] = useState(4);
  const [numberOfSides, setNumberOfSides] = useState(6);

  const handleDiceInputChange = event => setNumberOfDice(event.target.value);
  const handleSideInputChange = event => setNumberOfSides(event.target.value);
  const handleModInputChange = event => setDiceModifier(event.target.value);

  const rollDice = event => {
    event.preventDefault();
    let tempArray = [];
    let tempTotal = 0;
    for (let i = 0; i < numberOfDice; i++) {
      let x = Math.floor(Math.random() * numberOfSides) + 1;
      tempArray.push(x);
      tempTotal += x;
    }
    let diceString = tempArray.join(" + ");
    let total = parseInt(tempTotal) + parseInt(diceModifier);
    setDiceResults(`( ${diceString} ) + ${diceModifier} = ${total}`);
  };

  //////////STATE FOR DICE TRAY ENDS HERE//////////

  //////////STATE FOR ADD NPC STARTS HERE//////////

  const [monsterName, setMonsterName] = useState("");
  const [monsterQuantity, setMonsterQuantity] = useState(1);

  const handleMonsterNameChange = event => setMonsterName(event.target.value);
  const handleMonsterQuantityChange = event =>
    setMonsterQuantity(event.target.value);

  const submitMonster = event => {
    event.preventDefault();
    console.log(
      "You are requesting " + monsterName + " (" + monsterQuantity + "x)"
    );
  };
  //////////STATE FOR ADD NPC ENDS HERE//////////

  //////////STATE FOR ADD PC STARTS HERE//////////

  const [playerName, setPlayerName] = useState("");
  const [playerInit, setPlayerInit] = useState("");
  const [playerAC, setPlayerAC] = useState("");
  const [playerMaxHP, setPlayerMaxHP] = useState("");
  const [playerCurrentHP, setPlayerCurrentHP] = useState("");

  const handlePlayerNameChange = event => setPlayerName(event.target.value);
  const handlePlayerInitChange = event => setPlayerInit(event.target.value);
  const handlePlayerAcChange = event => setPlayerAC(event.target.value);
  const handlePlayerMaxHpChange = event => setPlayerMaxHP(event.target.value);
  const handlePlayerCurrentHpChange = event =>
    setPlayerCurrentHP(event.target.value);

  const submitPlayer = event => {
    event.preventDefault();
    console.log(
      "name: " +
        playerName +
        " ; Initiative: " +
        playerInit +
        " ; AC: " +
        playerAC +
        " ; Max HP: " +
        playerMaxHP +
        " ; Current HP: " +
        playerCurrentHP
    );
  };

  //////////STATE FOR ADD PC ENDS HERE//////////

  return (
    <Context.Provider
      value={{
        // DICE ROLLER STATE
        diceModifier,
        diceResults,
        numberOfDice,
        numberOfSides,
        handleDiceInputChange,
        handleModInputChange,
        handleSideInputChange,
        rollDice,
        // ADD NPC STATE
        monsterName,
        monsterQuantity,
        handleMonsterNameChange,
        handleMonsterQuantityChange,
        submitMonster,
        // ADD PC STATE
        playerName,
        playerInit,
        playerAC,
        playerMaxHP,
        playerCurrentHP,
        handlePlayerNameChange,
        handlePlayerInitChange,
        handlePlayerAcChange,
        handlePlayerMaxHpChange,
        handlePlayerCurrentHpChange,
        submitPlayer
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
