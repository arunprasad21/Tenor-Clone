import React from "react";
import '../app.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand- navbar-light container">
      <a className="navbar-brand" href="/">
        tenor
      </a>
      <div className="navbar-right">
        <button type="button" className="btn btn-primary btn-lg mr-4">
          CREATE
        </button>
        <button type="button" className="btn btn-outline-primary btn-lg mr-4">
          SIGN IN
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
