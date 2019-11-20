import React from "react";
import ReactDOM from "react-dom";
import R from "ramda";

import "./styles.css";

console.log(R.add(2, 3));
R.add(7)(10);

function App(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox {props.message}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

let dish = React.createElement("h1", { id: "recipe-0", key: 78 }, "Baked Salmon");
let text = React.createElement(
  "p",
  { id: "recipe-1", key: 89 },
  "Mix some Baked Salmon in a bowl and pray!"
);
ReactDOM.render(
  [<App key="9" message="Dave" />, dish, text],
  document.getElementById("root")
);
document.getElementById("root");
