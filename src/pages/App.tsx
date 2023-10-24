import React, { useState } from "react";
import "../styles/App.css";
import HelloWorld from "../pageComponents/helloworld";
import SWButton from "src/pageComponents/swButton";

function App() {
  const [activeOption, setCurrentOption] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <SWButton text="Test" className="SW-Button-Inactive m-4 p-4" />
      </header>
    </div>
  );
}

export default App;
