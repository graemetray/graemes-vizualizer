import React from "react";
import { render } from "@testing-library/react";

import { GraemesVisualizer } from "./GraemesVisualizer";

describe("Graeme's visualizer", () => {
  it("renders current time component", () => {
    const { getByTestId } = render(<GraemesVisualizer />);
    expect(getByTestId("currentTime")).toBeInTheDocument();
  });
});
