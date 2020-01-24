import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../../../AppContext";

// need to add listeners to inputs in form so that the rollDice function can actually work
// it's too late to do that now, I'm going to bed

const DiceRoller = () => {
  const {
    handleDiceInputChange,
    handleModInputChange,
    handleSideInputChange,
    numberOfDice,
    numberOfSides,
    diceModifier,
    rollDice,
    diceResults
  } = useContext(Context);
  // const [numberOfDice, setNumberOfDice] = useState(4);
  // const [numberOfSides, setNumberOfSides] = useState(6);
  // const [diceModifier, setDiceModifier] = useState(0);
  // const [diceResults, setDiceResults] = useState("");

  // const handleDiceInputChange = event => setNumberOfDice(event.target.value);
  // const handleSideInputChange = event => setNumberOfSides(event.target.value);
  // const handleModInputChange = event => setDiceModifier(event.target.value);

  // const rollDice = e => {
  //   e.preventDefault();
  //   let tempArray = [];
  //   let tempTotal = 0;
  //   for (let i = 0; i < numberOfDice; i++) {
  //     let x = Math.floor(Math.random() * numberOfSides) + 1;
  //     tempArray.push(x);
  //     tempTotal += x;
  //   }
  //   let diceString = tempArray.join(" + ");
  //   let total = parseInt(tempTotal) + parseInt(diceModifier);
  //   console.log(typeof tempTotal, typeof diceModifier);
  //   setDiceResults(`( ${diceString} ) + ${diceModifier} = ${total}`);
  // };

  return (
    <Form>
      <Form.Group className="row m-2 text-left" controlId="formAddNumberOfDice">
        <Form.Label className="col-9 p-0">Number of Dice</Form.Label>
        <Form.Control
          className="col-3"
          type="number"
          defaultValue={numberOfDice}
          onChange={handleDiceInputChange}
        />
      </Form.Group>
      <Form.Group
        className="row m-2 text-left"
        controlId="formAddNumberOfSides"
      >
        <Form.Label className="col-9 p-0">Number of Sides</Form.Label>
        <Form.Control
          className="col-3"
          type="number"
          defaultValue={numberOfSides}
          onChange={handleSideInputChange}
        />
      </Form.Group>
      <Form.Group className="row m-2 text-left" controlId="formAddModifier">
        <Form.Label className="col-9 p-0">Modifier</Form.Label>
        <Form.Control
          className="col-3"
          type="number"
          defaultValue={diceModifier}
          onChange={handleModInputChange}
        />
      </Form.Group>
      <Button
        variant="warning"
        className="m-2"
        type="submit"
        onClick={rollDice}
      >
        Submit
      </Button>
      <div className="text-center dice-tray m-2">
        <p className="text-center">{diceResults}</p>
      </div>
    </Form>
  );
};

export default DiceRoller;
