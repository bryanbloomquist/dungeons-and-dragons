import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../../../AppContext";

const AddPC = () => {
  const {
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
  } = useContext(Context);

  return (
    <Form>
      <Form.Group className="m-2 text-left" controlId="formAddPlayerName">
        <Form.Label>Character Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={playerName}
          onChange={handlePlayerNameChange}
        />
      </Form.Group>
      <Form.Group className="m-2 text-left" controlId="formAddPlayerInitiative">
        <Form.Label>Initiative Roll</Form.Label>
        <Form.Control
          type="number"
          defaultValue={playerInit}
          onChange={handlePlayerInitChange}
        />
      </Form.Group>
      <Form.Group className="m-2 text-left" controlId="formAddPlayerArmorClass">
        <Form.Label>Armor Class</Form.Label>
        <Form.Control
          type="number"
          defaultValue={playerAC}
          onChange={handlePlayerAcChange}
        />
      </Form.Group>
      <Form.Group className="m-2 text-left" controlId="formAddPlayerMaxHealth">
        <Form.Label>Max Health</Form.Label>
        <Form.Control
          type="number"
          defaultValue={playerMaxHP}
          onChange={handlePlayerMaxHpChange}
        />
      </Form.Group>
      <Form.Group
        className="m-2 text-left"
        controlId="formAddPlayerCurrentHealth"
      >
        <Form.Label>Current Health</Form.Label>
        <Form.Control
          type="number"
          defaultValue={playerCurrentHP}
          onChange={handlePlayerCurrentHpChange}
        />
      </Form.Group>
      <Button
        variant="warning"
        className="m-2"
        type="submit"
        onClick={submitPlayer}
      >
        Submit
      </Button>
    </Form>
  );
};

export default AddPC;
