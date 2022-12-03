import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://heroic-sprinkles-834702.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Natsuki Shuko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NatsukiSh/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
