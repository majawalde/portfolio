import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import "./style.css";

function App() {
  return (
    <>
      <main className="main">
        <section className="main-section">
          <Header></Header>
          <About></About>
          <Projects></Projects>
        </section>
      </main>
    </>
  );
}

export default App;
