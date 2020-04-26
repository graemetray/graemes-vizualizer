import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EventEmitter from "@trayio/builder-squad-event-emitter";

function App() {
  return (
    <EventEmitter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </EventEmitter>
  );
}

export default App;
