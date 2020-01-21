import React from "react";
import {Form, Button} from "react-bootstrap";

const AddPC = () => {
	return (
		<Form>
			<Form.Group className="m-2 text-left" controlId="formAddPlayerName">
				<Form.Label>Character Name</Form.Label>
				<Form.Control type="text" placeholder="Enter name..." />
			</Form.Group>
			<Form.Group className="m-2 text-left" controlId="formAddPlayerInitiative">
				<Form.Label>Initiative Roll</Form.Label>
				<Form.Control type="number" placeholder="Enter initiative..." />
			</Form.Group>
			<Form.Group className="m-2 text-left" controlId="formAddPlayerArmorClass">
				<Form.Label>Armor Class</Form.Label>
				<Form.Control type="number" placeholder="Enter armor class..." />
			</Form.Group>
			<Form.Group className="m-2 text-left" controlId="formAddPlayerArmorClass">
				<Form.Label>Max Health</Form.Label>
				<Form.Control type="number" placeholder="Enter maximum HP..." />
			</Form.Group>
			<Form.Group className="m-2 text-left" controlId="formAddPlayerArmorClass">
				<Form.Label>Current Health</Form.Label>
				<Form.Control type="number" placeholder="Enter current HP..." />
			</Form.Group>
			<Button variant="warning" className="m-2" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default AddPC;