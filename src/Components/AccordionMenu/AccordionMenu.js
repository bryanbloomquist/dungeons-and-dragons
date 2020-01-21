import React from "react";
import { Accordion, Card } from "react-bootstrap";

const AccordionMenu = () => {
	return (
		<Accordion>
			<Card>
				<Accordion.Toggle as={Card.Header} eventKey="0">
					Roll Dice
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						"Dice Roller Will Go Here Later!"
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Accordion.Toggle as={Card.Header} eventKey="1">
					Add NPC
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						"Add NPC Will Go Here Later!"
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Accordion.Toggle as={Card.Header} eventKey="2">
					Add PC
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="2">
					<Card.Body>
						"Add PC Will Go Here Later!"
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default AccordionMenu;