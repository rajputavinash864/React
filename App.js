import React from "react";
import ReactDOM from "react-dom/client";

// Using React.createElement
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

// Create React root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Using JSX
const jsxheading = <h1 id="heading">Namaste React using JSX</h1>;

console.log(heading);
console.log(jsxheading);

// Render either of these:
root.render(heading);
root.render(jsxheading); // Uncomment to render the JSX version