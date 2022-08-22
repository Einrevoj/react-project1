import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger navbar-dark py-3 fixed-top">
        <div className="container">
          <NavLink href="#home" className="navbar-brand fw-bold" to="/">
            J.Cano
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="navbar-item">
                <a href="#home" className="nav-link fw-bold text-white" to="/">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#about"
                  className="nav-link fw-bold text-white"
                  to="#about"
                >
                  About
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#services"
                  className="nav-link fw-bold text-white"
                  to="#services"
                >
                  Services
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#skills"
                  className="nav-link fw-bold text-white"
                  to="#skills"
                >
                  Skills
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#contact"
                  className="nav-link fw-bold text-white"
                  to="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
