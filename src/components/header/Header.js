import React from "react";
import "./Header.css";
import Headroom from "react-headroom";
import {greeting, workExperiences} from "../../portfolio";

function Header() {
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Compétences</a>
          </li>
          { exp === true &&
            <li>
              <a href="#experience">Experiences Professionnelles</a>
            </li>
          }
          <li>
            <a href="#opensource">Projets</a>
          </li>
          <li>
            <a href="#certs">Certifications</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Me contacter</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
