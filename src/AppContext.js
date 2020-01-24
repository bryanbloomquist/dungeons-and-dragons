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
  const rollDice = e => {
    e.preventDefault();
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

  return (
    <Context.Provider
      value={{
        diceModifier,
        diceResults,
        handleDiceInputChange,
        handleModInputChange,
        handleSideInputChange,
        numberOfDice,
        numberOfSides,
        rollDice
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
