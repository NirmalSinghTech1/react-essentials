import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <div id="main-container">
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <ul id="core-concepts">
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ))}
        </ul>
      </main>
      <section className="examples-section">
        <h3>Examples</h3>
        <menu id="tabs">
          <TabButton
            onSelect={() => setSelectedTab("components")}
            isActive={selectedTab === "components"}
          >
            Components
          </TabButton>
          <TabButton
            onSelect={() => setSelectedTab("jsx")}
            isActive={selectedTab === "jsx"}
          >
            JSX
          </TabButton>
          <TabButton
            onSelect={() => setSelectedTab("props")}
            isActive={selectedTab === "props"}
          >
            Props
          </TabButton>
          <TabButton
            onSelect={() => setSelectedTab("state")}
            isActive={selectedTab === "state"}
          >
            State
          </TabButton>
        </menu>
        <section className="tab-content">
          {!selectedTab ? (
            <p>Please select a topic.</p>
          ) : (
            <div>
              <h4>{EXAMPLES[selectedTab].title}</h4>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].example}</code>
              </pre>
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

export default App;
