import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AccordionMenu from "./AccordionMenu/AccordionMenu";
import CombatTable from "./CombatTable/CombatTable";


const MainBody = () => {
	return (
		<Container fluid>
			<Row>
				<Col md={3} className="p-0 text-center">
					<AccordionMenu />
				</Col>
				<Col md={9} className="p-0">
					<CombatTable />
				</Col>
			</Row>
		</Container>
	);
};

export default MainBody;