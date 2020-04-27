import React from "react";
import { render } from "@testing-library/react";

import { GraemesVisualizer } from "./GraemesVisualizer";
import { InterestingConectorList } from "./GraemesVisualizer";

const dummyData = {
  coords: { x: 20, y: 20 },
  connector: {
    iconURL: "string",
    name: "string",
  },
};

describe("Graeme's visualizer", () => {
  it("renders current time component", () => {
    const { getByTestId } = render(<GraemesVisualizer />);
    expect(getByTestId("currentTime")).toBeInTheDocument();
  });

  it("renders connector in app's main box", () => {
    const { getByTestId } = render(<GraemesVisualizer data-tray={dummyData} />);

    const connectorVisualizer = getByTestId("connectorVisualizer");
    expect(connectorVisualizer.children.length).toBe(1);
  });

  it("renders connector in interesting connectors box", () => {
    const { getByTestId } = render(
      <InterestingConectorList
        interestingConnectors={[{ "data-tray": dummyData }]}
      />
    );

    const connectorVisualizer = getByTestId("interestingConectorList");
    expect(connectorVisualizer.children.length).toBe(1);
  });
});
