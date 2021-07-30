import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import typescriptLogo from "./images/typescript.png";

const App = () => (
  <h1>
    My React and TypeScript App!! {new Date().toLocaleDateString("en-EN")}
    <img src={typescriptLogo} alt="logo" />
  </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
