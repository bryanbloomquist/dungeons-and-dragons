import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
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
    submitNewUser
  } = useContext(Context);

  return (
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
          type="text"
          defaultValue={userEmail}
          onChange={handleUserEmailChange}
        />
      </Form.Group>
      <Form.Group controlId="formAddUserPassword">
        <Form.Label>Choose a Password</Form.Label>
        <Form.Control
          type="text"
          defaultValue={userPassword}
          onChange={handleUserPasswordChange}
        />
      </Form.Group>
      <Form.Group controlId="formAddConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="text"
          defaultValue={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </Form.Group>
      <Button variant="warning" type="submit" oncClick={submitNewUser} />
      {error && <p>{error.message}</p>}
    </Form>
  );
};

export default SignUpForm;
