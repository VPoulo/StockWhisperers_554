import React, { useState } from "react";
import "../styles/App.css";
import AboutApp from "../pageComponents/aboutApp";
import SWButton from "src/pageComponents/swButton";

function App() {
  // const [activeOption, setCurrentOption] = useState(false);

  return (
    <div className="container mx-auto">
      <header className="App">
        <AboutApp />
        <div className="flex">
          <SWButton
            text="Buy"
            className="SW-Button m-4 w-20 h-10 hover:text-emerald-700"
            // explore contexts for passing in states and modifying them
          />
          <SWButton
            text="Sell"
            className="SW-Button m-4 w-20 h-10 hover:text-emerald-700"
            // explore contexts for passing in states and modifying them
          />
        </div>
      </header>
    </div>
  );
}

export default App;
