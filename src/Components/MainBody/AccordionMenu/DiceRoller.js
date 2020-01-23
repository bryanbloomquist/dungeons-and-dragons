import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

// need to add listeners to inputs in form so that the rollDice function can actually work
// it's too late to do that now, I'm going to bed

const DiceRoller = () => {

	const [numberOfDice, setNumberOfDice] = useState(4);
	const [numberOfSides, setNumberOfSides] = useState(6);
	const [diceModifier, setDiceModifier] = useState(0);
	const [diceArray, setDiceArray] = useState("");
	const [diceTotal, setDiceTotal] = useState(0);
	const [diceRolled, setDiceRolled] = useState(true);

	const handleDiceInputChange = event => setNumberOfDice(event.target.value);
	const handleSideInputChange = event => setNumberOfSides(event.target.value);
	const handleModInputChange = event => setDiceModifier(event.target.value);

	const rollDice = (e) => {
		e.preventDefault();
		setDiceRolled(true);
		setDiceTotal(0);
		let tempArray = [];
		let tempTotal = 0;
		for (let i=0; i<numberOfDice; i++) {
			let x = Math.floor(Math.random() * numberOfSides) + 1;
			tempArray.push(x);
			tempTotal += x;
		};
		let diceString = tempArray.join(" + ");
		setDiceArray(diceString);
		setDiceTotal(tempTotal+diceModifier);
		console.log(diceString + " + " + diceModifier);
		console.log(diceRolled);
	}

	return (
		<Form>
			<Form.Group className="row m-2 text-left" controlId="formAddNumberOfDice">
				<Form.Label className="col-9 p-0">Number of Dice</Form.Label>
				<Form.Control className="col-3" type="number" defaultValue={numberOfDice} onChange={handleDiceInputChange} />
			</Form.Group>
			<Form.Group className="row m-2 text-left" controlId="formAddNumberOfSides">
				<Form.Label className="col-9 p-0">Number of Sides</Form.Label>
				<Form.Control className="col-3" type="number" defaultValue={numberOfSides} onChange={handleSideInputChange}/>
			</Form.Group>
			<Form.Group className="row m-2 text-left" controlId="formAddModifier">
				<Form.Label className="col-9 p-0">Modifier</Form.Label>
				<Form.Control className="col-3" type="number" defaultValue={diceModifier} onChange={handleModInputChange}/>
			</Form.Group>
			<Button variant="warning" className="m-2" type="submit" onClick={rollDice}>
				Submit
			</Button>
			<div className="bg-white text-center dice-tray m-2">
				<p className="text-center">
					{ diceRolled ? `${diceArray} + ${diceModifier}<br /> = ${diceTotal} ` : null }
				</p>
			</div>
		</Form>
	);
};

export default DiceRoller;