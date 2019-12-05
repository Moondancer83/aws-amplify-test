import React from "react";

import "./Splash.css";
import logo from "./logo.jpg";

export default function Splash() {
  return (
    <div className="Splash">
      <header className="Splash-header">
        <img src={logo} className="Splash-logo" alt="logo" />
        <p>
          ChemAxon's Electronic Data Capture Project
        </p>
        <a
          className="Splash-link"
          href="https://chemaxon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}