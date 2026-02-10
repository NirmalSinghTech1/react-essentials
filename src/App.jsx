import "./App.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <ul id="core-concepts">
          {
            CORE_CONCEPTS.map(concept => <CoreConcept {...concept} />)
          }
        </ul>
      </main>
    </>
  );
}

export default App;
