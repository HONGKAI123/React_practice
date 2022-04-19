import React from "react";
import Card from "./Card"
import emojipedia from "../emojipedia";
import addcard from "./addcard";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(addcard)}
      </dl>
    </div>
  );
}

export default App;
