import React from "react";
import { render } from "@testing-library/react";

import { GraemesVisualizer } from "./GraemesVisualizer";
import { dummyData } from "../../mocks/data";

describe("Graeme's visualizer", () => {
  it("renders connector in app's main box", () => {
    const { getByTestId } = render(<GraemesVisualizer data-tray={dummyData} />);

    const connectorVisualizer = getByTestId("connectorVisualizer");
    expect(connectorVisualizer.children.length).toBe(1);
  });

  it("renders interesting connectors component", () => {
    const { getByTestId } = render(<GraemesVisualizer data-tray={dummyData} />);
    expect(getByTestId("interestingConnectorList")).toBeInTheDocument();
  });

  it("renders current time component", () => {
    const { getByTestId } = render(<GraemesVisualizer data-tray={dummyData} />);
    expect(getByTestId("currentTime")).toBeInTheDocument();
  });
});
