import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Firebase from "./Components/Firebase/Firebase";
import FirebaseContext from "./Components/Firebase/Context";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
