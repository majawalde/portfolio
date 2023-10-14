import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <h1>Maja Walde</h1>
          <ul>
            <li>
              <BsFillMoonStarsFill className="darkmode-icon" />
            </li>
            <li>
              <a className="resume-button" href="#">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
