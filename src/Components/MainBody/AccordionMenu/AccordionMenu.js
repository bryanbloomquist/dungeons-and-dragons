import React from "react";
// import { Accordion, Card, Button } from "react-bootstrap";
import { Accordion, Card, Button, Row, Col } from "react-bootstrap";
import DiceRoller from "./DiceRoller";
import AddNPC from "./AddNPC";
import AddPC from "./AddPC";

const AccordionMenu = () => {
	return (
		<Accordion>
			<Card>
				<Row>
					<Col xs={4} className="pl-3 pr-1">
						<Accordion.Toggle as={Button} variant="warning" className="my-2" eventKey="0" block>
							Dice
						</Accordion.Toggle>
					</Col>
					<Col xs={4} className="px-1">
						<Accordion.Toggle as={Button} variant="warning" className="my-2" eventKey="1" block>
							NPC
						</Accordion.Toggle>
					</Col>
					<Col xs={4} className="pl-1 pr-3">
						<Accordion.Toggle as={Button} variant="warning" className="my-2" eventKey="2" block>
							PC
						</Accordion.Toggle>
					</Col>
				</Row>
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