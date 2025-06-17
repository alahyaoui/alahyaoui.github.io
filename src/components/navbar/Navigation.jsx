import React from "react";
import { NavLink } from "react-router-dom";
import "./style/navigation.css"

function Navigation() {
  return (
    <header className="navigation">
      <nav className="navigation__container">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink className="navigation__link" to="/">
              Home
              <span className="navigation__sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__link" to="/about">
              About
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__link" to="/skills">
              Skills
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;