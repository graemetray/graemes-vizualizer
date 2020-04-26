import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EventEmitter from "@trayio/builder-squad-event-emitter";

function App() {
  return (
    <EventEmitter>
      <GraemesVisualizer />
    </EventEmitter>
  );
}

export const GraemesVisualizer = (props: any) => {
  console.log(props);
  return <div>graeme</div>;
};

export default App;
