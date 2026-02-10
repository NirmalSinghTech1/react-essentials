import { useState } from "react";
import reactLogo from "./assets/react-core-concepts.png";
import componentLogo from "./assets/components.png";
import jsxLogo from "./assets/jsx-ui.png";
import propsLogo from "./assets/config.png";
import stateLogo from "./assets/state-mgmt.png";
import "./App.css";
import { jsx } from "react/jsx-runtime";

function App() {
  return (
    <>
      <header>
        <img src={reactLogo} alt="React logo" width={165} height={165} />
        <h1>React Essentials</h1>
        <p>
          Crucial React concepts you will need for almost any app you are going
          to build!
        </p>
      </header>
      <main>
        <h2>Core Concepts</h2>
        <ul id="core-concepts">
          <li className="core-concept">
            <img src={componentLogo} alt="React Component logo" />
            <h3>Components</h3>
            <p>
              The core UI building block - compose the user interface by
              combining multiple components.
            </p>
          </li>
          <li className="core-concept">
            <img src={jsxLogo} alt="JSX logo" />
            <h3>JSX</h3>
            <p>
              Return (potentially dynamic) HTML(ish) code to define the actual
              markup that will be rendered.
            </p>
          </li>
          <li className="core-concept">
            <img src={propsLogo} alt="Props logo" />
            <h3>Props</h3>
            <p>
              Make components configurable (and therefore reusable) by passing
              input data to them.
            </p>
          </li>
          <li className="core-concept">
            <img src={stateLogo} alt="State logo" />
            <h3>State</h3>
            <p>
              React-managed data which, when changed, causes the component to
              re-render & the UI to update.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
