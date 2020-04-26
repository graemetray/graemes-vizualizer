import React from "react";
import EventEmitter from "@trayio/builder-squad-event-emitter";

import { GraemesVisualizer } from "./components/GraemesVisualizer";

const App = () => {
  return (
    <EventEmitter>
      <GraemesVisualizer />
    </EventEmitter>
  );
};

export default App;
