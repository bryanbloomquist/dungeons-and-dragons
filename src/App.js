import React from 'react';
import { Provider } from "./AppContext";
import './App.scss';
import Header from "./Components/Header/Header";
import MainBody from "./Components/MainBody/MainBody";

function App() {
  return (
    <Provider>
      <Header />
      <MainBody />
    </Provider>
  );
}

export default App;
