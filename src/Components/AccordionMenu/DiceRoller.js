import React from "react";
import {Form, Button} from "react-bootstrap";

const DiceRoller = () => {
	return (
		<Form>
			<Form.Group className="m-2" controlId="formAddNumberOfDice">
				<Form.Label>Number of Dice</Form.Label>
				<Form.Control type="text" placeholder="4" value="4" />
			</Form.Group>
			<Form.Group className="m-2" controlId="formAddNumberOfSides">
				<Form.Label>Number of Sides</Form.Label>
				<Form.Control type="number" placeholder="6" value="6" />
			</Form.Group>
			<Form.Group className="m-2" controlId="formAddModifier">
				<Form.Label>Modifier</Form.Label>
				<Form.Control type="number" placeholder="0" value="0" />
			</Form.Group>
			<Button variant="warning" className="m-2" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default DiceRoller;