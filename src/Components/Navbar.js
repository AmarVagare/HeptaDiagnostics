import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navMain">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="linkImg" href="#">
            <img
              className="logo-img"
              src={require("./Images/logo.png")}
              alt="logo"
            ></img>
          </a>
          <a className="navbar-brand" href="#">
            Hepta Diagnostics
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar-right"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  me-auto mb-2  ">
              <li className="nav-item">
                <a className="nav-link nav-text" href="#">
                  About Diseases
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text n" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item nav-text ">
                <a className="nav-link nav-text" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
