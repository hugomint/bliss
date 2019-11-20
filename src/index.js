import React from "react";
import ReactDOM from "react-dom";
import R from "ramda"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

console.log(R.add(2, 3));
R.add(7)(10); 