import React, { useContext } from "react";
import { Context } from "../../AppContext";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const Login = () => {
  const { isNewUser } = useContext(Context);
  return <div>{!isNewUser ? <LoginPage /> : <SignUpPage />}</div>;
};

export default Login;
