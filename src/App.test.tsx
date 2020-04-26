import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { CurrentTime } from "./App";

describe("Graeme's visualizer", () => {
  it("renders current time component", () => {
    const { getByTestId } = render(<CurrentTime />);
    expect(getByTestId("currentTime")).toBeInTheDocument();
  });
});
