import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profilepicture from "./assets/maja-profil.png";

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="profile-image-section">
          <img className="profile-img" src={profilepicture}></img>
        </div>
        <div>
          <h2 className="about-name-h2">Maja Walde</h2>
          <h3 className="about-name-h3">Datateknologi</h3>
          <p className="about-text">
            Jeg er for tiden student på 3. året på datateknologi ved
            Universitetet i Bergen. Jeg er interessert i fullstack utvikling og
            spesielt frontend!
          </p>
        </div>
        <div className="about-icons">
          <AiFillLinkedin className="linkedin-icon" />
          <AiFillGithub className="github-icon" />
        </div>
      </div>
    </>
  );
};

export default About;
