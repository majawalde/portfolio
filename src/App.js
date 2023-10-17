import React from "react";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import "./style.css";

function App() {
  return (
    <>
      <main className="main">
        <section className="main-section">
          <Header></Header>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

export default App;
