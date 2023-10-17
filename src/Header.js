import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import CV from "./img/majawalde_cv_no-kopi.pdf";

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
              <a
                className="resume-button"
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
              >
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
