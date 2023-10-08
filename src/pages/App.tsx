import React from "react";
import logo from "../images/logo.svg";
import "../styles/App.css";
import HelloWorld from "../pageComponents/helloworld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-center ">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="text-[200px] Chart-Emoji">📈</span>
        </div>
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
