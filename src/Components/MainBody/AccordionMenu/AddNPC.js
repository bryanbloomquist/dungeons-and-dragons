import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../../../AppContext";

const AddNPC = () => {
  const {
    monsterName,
    monsterQuantity,
    handleMonsterNameChange,
    handleMonsterQuantityChange,
    submitMonster
  } = useContext(Context);

  return (
    <Form>
      <Form.Group className="m-2 text-left" controlId="formAddMonsterName">
        <Form.Label>Monster Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={monsterName}
          onChange={handleMonsterNameChange}
        />
      </Form.Group>
      <Form.Group className="m-2 text-left" controlId="formAddMonsterQuantity">
        <Form.Label>Number of Monsters</Form.Label>
        <Form.Control
          type="number"
          defaultValue={monsterQuantity}
          onChange={handleMonsterQuantityChange}
        />
      </Form.Group>
      <Button
        variant="warning"
        className="m-2"
        type="submit"
        onClick={submitMonster}
      >
        Submit
      </Button>
    </Form>
  );
};

export default AddNPC;
