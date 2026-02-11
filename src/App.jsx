import "./App.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div id="main-container">
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <ul id="core-concepts">
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept {...concept} />
          ))}
        </ul>
      </main>
      <section className="examples-section">
        <h3>Examples</h3>
        <menu id="tabs">
          <button className="active">Components</button>
          <button>JSX</button>
          <button>Props</button>
          <button>State</button>
        </menu>
        <section className="tab-content">
          {/* <p>Please select a topic.</p> */}
          <div>
            <h4>Components</h4>
            <p>
              Components are the building blocks of React applications. A
              component is a self-contained module (HTML + optional CSS + JS)
              that renders some output.
            </p>
            <pre>
              <code>{`function Welcome() {
  return <h1>Hello, World!</h1>;
}`}</code>
            </pre>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
