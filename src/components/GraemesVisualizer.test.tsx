import React from "react";
import { render } from "@testing-library/react";

import { GraemesVisualizer } from "./GraemesVisualizer";

describe("Graeme's visualizer", () => {
  it("renders current time component", () => {
    const { getByTestId } = render(<GraemesVisualizer />);
    expect(getByTestId("currentTime")).toBeInTheDocument();
  });

  it("renders dummy connector in app's main box", () => {
    const dummyData = {
      coords: { x: 20, y: 20 },
      connector: {
        iconURL: "string",
        name: "string",
      },
    };
    const { container } = render(<GraemesVisualizer data-tray={dummyData} />);
    expect(container.children.length).toBe(1);
  });
});
