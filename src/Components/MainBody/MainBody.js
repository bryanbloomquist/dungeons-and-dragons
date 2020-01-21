import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AccordionMenu from "../AccordionMenu/AccordionMenu";
import TableTracker from "../TableTracker/TableTracker";

const MainBody = () => {
	return (
		<Container fluid>
			<Row>
				<Col md={3} className="p-0 text-center">
					<AccordionMenu />
				</Col>
				<Col md={9}>
					<TableTracker />
				</Col>
			</Row>
		</Container>
	);
};

export default MainBody;