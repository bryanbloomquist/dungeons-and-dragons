import React from "react";
import {Form, Button} from "react-bootstrap";

const DiceRoller = () => {
	return (
		<Form>
			<Form.Group className="m-2 text-left" controlId="formAddNumberOfDice">
				<Form.Label>Number of Dice</Form.Label>
				<Form.Control type="text" placeholder="4" value="4" />
			</Form.Group>
			<Form.Group className="m-2 text-left" controlId="formAddNumberOfSides">
				<Form.Label>Number of Sides</Form.Label>
				<Form.Control type="number" placeholder="6" value="6" />
			</Form.Group>
			<Form.Group className="m-2 text-left" controlId="formAddModifier">
				<Form.Label>Modifier</Form.Label>
				<Form.Control type="number" placeholder="0" value="0" />
			</Form.Group>
			<Button variant="warning" className="m-2" type="submit">
				Submit
			</Button>
			<div class="bg-white text-center dice-tray m-2">
				<span id="dice-tray"></span>
			</div>
		</Form>
	);
};

export default DiceRoller;