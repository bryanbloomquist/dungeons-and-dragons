import React from "react";
import {Form, Button} from "react-bootstrap";

const AddNPC = () => {
	return (
		<Form>
			<Form.Group className="m-2 text-left" controlId="formAddMonsterName">
				<Form.Label>Monster Name</Form.Label>
				<Form.Control type="text" placeholder="Enter monster name..." />
			</Form.Group>
			<Form.Group className="m-2 text-left" controlId="formAddMonsterQuantity">
				<Form.Label>Number of Monsters</Form.Label>
				<Form.Control type="number" placeholder="1" value="1" />
			</Form.Group>
			<Button variant="warning" className="m-2" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default AddNPC;