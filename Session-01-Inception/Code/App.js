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
