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

//creating heading 1 using react
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

//creating heading 2
const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Heading 2"
);

//putting them into the container
const container = React.createElement(
  "div",
  {
    id: "cont",
  },
  [heading, heading2]
);

//putting container into the root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
