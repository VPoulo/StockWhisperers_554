import React from "react";
import logo from "../images/logo.svg";
import "../styles/App.css";
import HelloWorld from "../pageComponents/helloworld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
