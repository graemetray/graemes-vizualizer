import React from "react";
import { render } from "@testing-library/react";

import { CurrentTime } from "./";

describe("Current time component", () => {
  it("renders current time component", () => {
    const { getByTestId } = render(<CurrentTime />);
    expect(getByTestId("currentTime")).toBeInTheDocument();
  });
});
