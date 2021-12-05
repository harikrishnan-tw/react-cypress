import React from "react";
import logo from "./logo.svg";
import "./App.css";

type ButtonProps = {
  color: "blue" | "red" | "purple";
};

const classes = {
  button({ color }: ButtonProps): string {
    return `bg-${color}-500 hover:bg-${color}-300 text-white font-bold rounded p-2`;
  },
};

function App() {
  return (
    <button className={classes.button({ color: "purple" })}>Click me</button>
  );
}

export default App;
