import React, { useContext } from "react";
import { Context } from "./AppContext";
import LoginPage from "./LoginPage";
import SignInPage from "./SignInPage";

const Login = () => {
  const { isNewUser } = useContext(Context);
  return <div>{!isNewUser ? <LoginPage /> : <SignInPage />}</div>;
};

export default Login;
