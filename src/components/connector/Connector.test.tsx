import React from "react";
import { render } from "@testing-library/react";

import { Connector } from "./";
import { dummyData } from "../../mocks/data";

describe("Coononector component", () => {
  it("renders connector component", () => {
    const { getByTestId } = render(
      <Connector
        connector={{ "data-tray": dummyData }}
        interestingList={false}
      />
    );
    expect(getByTestId("connector")).toBeInTheDocument();
  });

  it("renders an image inside the connector component", () => {
    const { getByTestId } = render(
      <Connector
        connector={{ "data-tray": dummyData }}
        interestingList={false}
      />
    );
    expect(getByTestId("connectorImage")).toBeInTheDocument();
  });

  it("renders a title inside the connector component", () => {
    const { getByTestId, getByText } = render(
      <Connector
        connector={{ "data-tray": dummyData }}
        interestingList={false}
      />
    );
    expect(getByTestId("connectorTitle")).toBeInTheDocument();
    expect(
      getByText(dummyData.connector.name, { selector: "div" })
    ).toBeInTheDocument();
  });
});
