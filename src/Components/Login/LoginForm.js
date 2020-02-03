import React, { useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";

const LoginForm = () => {
  const {
    userEmail,
    userPassword,
    error,
    handleUserEmailChange,
    handleUserPasswordChange,
    changeLoginStatus,
    submitUserLogin
  } = useContext(Context);

  // onSubmit = event => {};

  // onChange = event => {};

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="sign-up-form">
          <h1 className="text-center">Login to Existing Account</h1>
          <Button
            onClick={changeLoginStatus}
            variant="warning"
            className="sign-up-button"
            type="submit"
          >or Create an Account</Button>
          <Form>
            <Form.Group controlId="formAddUserEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                defaultValue={userEmail}
                onChange={handleUserEmailChange}
              />
              <Form.Group controlId="formAddUserPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  defaultValue={userPassword}
                  onChange={handleUserPasswordChange}
                />
                <Button
                  variant="warning"
                  type="submit"
                  className="sign-up-button"
                  onClick={submitUserLogin}
                >Submit</Button>
                {error && <p>{error.message}</p>}
              </Form.Group>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default LoginForm;
