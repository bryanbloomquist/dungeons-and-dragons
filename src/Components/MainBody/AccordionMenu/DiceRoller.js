import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../../../AppContext";

// need to add listeners to inputs in form so that the rollDice function can actually work
// it's too late to do that now, I'm going to bed

const DiceRoller = () => {
  const {
    diceModifier,
    diceResults,
    numberOfDice,
    numberOfSides,
    handleDiceInputChange,
    handleModInputChange,
    handleSideInputChange,
    rollDice
  } = useContext(Context);

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
