import React from "react";
import projImg1 from "./img/proj-1.png";
import projImg2 from "./img/proj-2.png";
import projImg3 from "./img/proj-3.png";
import projImg4 from "./img/proj-4.png";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const Projects = () => {
  return (
    <div className="main project-container">
      <h1>Prosjekter</h1>
      <div className="main project-list">
        <div className="project">
          <img src={projImg1}></img>
          <div className="layer">
            <h3>Sorting Visualizer</h3>
            <p>
              En applikasjon laget i Java og Swing, som viser visualiserer ulike
              sorteringsalgoritmer som QuickSort, MergeSort etc.
            </p>
            <a
              href="https://github.com/majawalde/sorting-algorithms-visualizer"
              target="_blank"
            >
              <HiMiniArrowTopRightOnSquare className="project-icon" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={projImg2}></img>
          <div className="layer">
            <h3>Solar System</h3>
            <p>En simulasjon av solsystemet, laget med Three.js</p>
            <a href="https://github.com/majawalde/solar-system" target="_blank">
              <HiMiniArrowTopRightOnSquare className="project-icon" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={projImg3}></img>
          <div className="layer">
            <h3>Kanban-board</h3>
            <p>
              En applikasjon hvor man kan håndtere de ulike oppgavene man har.
              Laget med react
            </p>
            <a href="https://github.com/majawalde/kanban-board" target="_blank">
              <HiMiniArrowTopRightOnSquare className="project-icon" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src={projImg4}></img>
          <div className="layer">
            <h3>majawalde.no</h3>
            <p>Denne portefølje-nettsiden, laget med React.js</p>
            <a href="https://github.com/majawalde/portfolio" target="_blank">
              <HiMiniArrowTopRightOnSquare className="project-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
