import React from "react";
import "./styles.scss";
import { Button } from "ui-neu";

const App = () => {
  return (
    <div className="main">
      <main>
        <h1 className="display-1">
          Neu UI<span className="display-4 ml-1">v 0.1.15-2</span>
        </h1>
        <h3 className="display-3">
          Prototype and build projects faster using Neu UI - an open source
          React component library designed to neumorphic style.
        </h3>
        <div>
          <img
            alt="npm"
            src="https://img.shields.io/github/v/release/daniel-norris/neu_ui"
            className="mr-1"
          />
          <img
            alt="GitHub stars"
            src="https://img.shields.io/github/stars/daniel-norris/react_neu?style=social"
          />
        </div>
        <div style={{ display: "flex" }}>
          <a href="https://neu-ui-docs.netlify.app/?path=/docs/getting-started--page">
            <Button>Getting started</Button>
          </a>
          <a
            href="https://neu-ui-docs.netlify.app/?path=/docs/button--standard"
            className="ml-1"
          >
            <Button>Components</Button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
