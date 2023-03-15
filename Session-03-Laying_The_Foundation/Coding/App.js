// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 /* Created A Server
  HMR - Hot Module Replacement
  File Watcher algorithm - C++
  BUNDLING
  MINIFY
  Cleaning our Code
  Dev abd Production Build
  Super Fast build algorithm
  Image Optimization
  Caching while development
  Compression
  Compatible with older version of browser
  HTTPS on dev
  port Number
  Consistent Hashing Algorithm
  Zero Config
  Tree shaking
 
 
 Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>

  );
};

//putting container into the root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
