import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import DiceRoller from "./DiceRoller";
import AddNPC from "./AddNPC";
import AddPC from "./AddPC";

const AccordionMenu = () => {
	return (
		<Accordion>
			<Card>
				<Accordion.Toggle as={Button} variant="warning" className="m-2" eventKey="0">
					Roll Dice
				</Accordion.Toggle>
				<Accordion.Toggle as={Button} variant="warning" className="m-2" eventKey="1">
					Add NPC
				</Accordion.Toggle>
				<Accordion.Toggle as={Button} variant="warning" className="m-2" eventKey="2">
					Add PC
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<Card.Body className="p-0">
						<h1>Roll Dice</h1>
						<DiceRoller />
					</Card.Body>
				</Accordion.Collapse>
				<Accordion.Collapse eventKey="1">
					<Card.Body className="p-0">
						<h1>Add NPC</h1>
						<AddNPC />
					</Card.Body>
				</Accordion.Collapse>
				<Accordion.Collapse eventKey="2">
					<Card.Body className="p-0">
						<h1>Add PC</h1>
						<AddPC />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default AccordionMenu;