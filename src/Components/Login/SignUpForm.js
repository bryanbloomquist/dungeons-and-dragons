import React, { useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";


const SignUpForm = () => {
  const {
    userName,
    userEmail,
    userPassword,
    confirmPassword,
    error,
    handleUserNameChange,
    handleUserEmailChange,
    handleUserPasswordChange,
    handleConfirmPasswordChange,
    changeLoginStatus,
    submitNewUser
  } = useContext(Context);

  const isInvalid =
    userName === '' ||
    userEmail === '' ||
    userPassword === '' ||
    userPassword !== confirmPassword;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="sign-up-form">
          <h1 className="text-center">Create an account</h1>
          <Button 
            onClick={changeLoginStatus} 
            variant="warning"
            className="sign-up-button"
            type="submit"
          >or Sign In To Existing Account</Button>
          <Form>
            <Form.Group controlId="formAddUserName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={userName}
                onChange={handleUserNameChange}
              />
            </Form.Group>
            <Form.Group controlId="formAddUserEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                defaultValue={userEmail}
                onChange={handleUserEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="formAddUserPassword">
              <Form.Label>Choose a Password</Form.Label>
              <Form.Control
                type="password"
                defaultValue={userPassword}
                onChange={handleUserPasswordChange}
              />
            </Form.Group>
            <Form.Group controlId="formAddConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                defaultValue={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </Form.Group>
            <Button 
              disabled={isInvalid}
              variant="warning" 
              type="submit" 
              className="sign-up-button"
              onClick={submitNewUser}
            >Submit</Button>
            {error && <p>{error.message}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
