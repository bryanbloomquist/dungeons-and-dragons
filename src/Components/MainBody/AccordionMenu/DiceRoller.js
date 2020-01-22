import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

// need to add listeners to inputs in form so that the rollDice function can actually work
// it's too late to do that now, I'm going to bed

const DiceRoller = () => {
	const [diceSum, setDiceSum] = useState(0);
	const [allDice, setAllDice] = useState([]);
	const [diceRolled, setDiceRolled] = useState(false);

	const rollDice = (sides, quantity, modifier) => {
		const diceArray = [];
		for (let i = 0; i < quantity; i++) {
			let die = Math.floor(Math.random() * sides) + 1;
			diceArray.push(die);
		};
		setAllDice([...diceArray]);
		const sum = allDice.reduce((a, b) => a + b, 0);
		setDiceSum(sum + modifier);
		setDiceRolled(true);
	};

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
			<Button variant="warning" className="m-2" type="submit" onClick={() => rollDice()}>
				Submit
			</Button>
			<div class="bg-white text-center dice-tray m-2">
				{ diceRolled ?
					<p>Results: {allDice.map(die => (`${die} `))} + modifier = ${diceSum}</p>
				:
					null
				}
			</div>
		</Form>
	);
};

export default DiceRoller;