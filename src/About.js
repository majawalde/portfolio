import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profilepicture from "./img/maja-profil.png";

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="profile-image-section">
          <img className="profile-img" src={profilepicture}></img>
        </div>
        <div>
          <h2 className="about-name-h2">Maja Walde</h2>
          <h3 className="about-name-h3">Datateknologi-student</h3>
          <p className="about-text">
            Jeg er for tiden student på 3. året på datateknologi ved
            Universitetet i Bergen. Jeg er interessert i fullstack utvikling og
            spesielt frontend!
          </p>
        </div>
        <div className="about-icons">
          <a
            href="https://www.linkedin.com/in/maja-walde-04b280206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="linkedin-icon" />
          </a>
          <a
            href="https://github.com/majawalde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="github-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
