import React from "react";
import styled from "styled-components";

import { IDataTray } from "../../types";
import { isValidConnector } from "../../utils";
import { Connector } from "../connector";

const StyledInterestingConnectorList = styled.div`
  border: 1px solid #999;
  border-radius: 5px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  width: 960px;
`;

export const InterestingConnectorList = (props: {
  interestingConnectors: IDataTray[];
  setInterestingConnectors(connectors: IDataTray[]): void;
}) => {
  const { interestingConnectors, setInterestingConnectors } = props;

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const drop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const interestingConnector = JSON.parse(event.dataTransfer.getData("text"));
    setInterestingConnectors([interestingConnector, ...interestingConnectors]);
  };
  return (
    <StyledInterestingConnectorList
      {...props}
      data-testid="interestingConnectorList"
      onDrop={(event) => drop(event)}
      onDragOver={(event) => allowDrop(event)}
    >
      {interestingConnectors.map((connector: IDataTray) => {
        if (isValidConnector(connector)) {
          return <Connector connector={connector} interestingList={true} />;
        }
        return null;
      })}
    </StyledInterestingConnectorList>
  );
};
