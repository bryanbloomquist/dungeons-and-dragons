import React from "react";
import { Accordion, Card } from "react-bootstrap";

const AccordionMenu = () => {
	return (
		<Accordion>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} eventKey="0">Roll Dice</Accordion.Toggle>
				</Card.Header>
				<Card.Body>
					"Dice Roller Will Go Here Later!"
				</Card.Body>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} eventKey="1">Add NPC</Accordion.Toggle>
				</Card.Header>
				<Card.Body>
					"Add NPC Will Go Here Later!"
				</Card.Body>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} eventKey="2">Add PC</Accordion.Toggle>
				</Card.Header>
				<Card.Body>
					"Add PC Will Go Here Later!"
				</Card.Body>
			</Card>


		</Accordion>
	);
};

export default AccordionMenu;