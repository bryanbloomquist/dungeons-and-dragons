import React, { useContext } from "react";
import { Context, Provider } from "./AppContext";
import "./App.scss";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import MainBody from "./Components/MainBody/MainBody";

function App() {
  const { isLoggedIn } = useContext(Context);
  console.log(isLoggedIn);
  return (
    <Provider>
      <Header />
      {!isLoggedIn ? <Login /> : <MainBody />}
      {/* {!isLoggedIn ? <MainBody /> : <Login />} */}
    </Provider>
  );
}

export default App;
