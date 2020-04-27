import React, { useState, useEffect } from "react";
import styled from "styled-components";
import format from "date-fns/format";
import { v4 as uuidv4 } from "uuid";

import { IDataTray } from "../types";
import { getValidCoordPosition, isValidConnector } from "../utils";

const AppWrapper = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

const ConnectorVisualizer = styled.div`
  border: 1px solid #999;
  height: 1000px;
  margin: 0 auto 20px auto;
  position: relative;
  width: 1000px;
`;

const StyledInterestingConectorList = styled.div`
  border: 1px solid #999;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  width: 960px;
`;

const ConnectorElementWrapper = styled.div<any>`
  background-color: white;
  border: 1px solid #999;
  border-radius: 5px;
  bottom: ${({ coords }) => getValidCoordPosition(coords.y)};
  height: 75px;
  left: ${({ coords }) => getValidCoordPosition(coords.x)};
  position: absolute;
  width: 75px;
`;

const ConnectorElementImage = styled.img`
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
`;

const ConnectorElementTitle = styled.div`
  font-size: 10px;
  overflow: hidden;
  padding: 0 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CurrentTimeWrapper = styled.div`
  margin: 0 auto;
  text-align: left;
  width: 1000px;
`;

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  setInterval(() => {
    setCurrentTime(format(new Date(), "HH:mm:ss.S"));
  }, 100);

  return <div>{currentTime}</div>;
};

export const InterestingConectorList = (props: {
  interestingConnectors: IDataTray[];
}) => {
  const { interestingConnectors } = props;
  return (
    <StyledInterestingConectorList
      {...props}
      data-testid="interestingConectorList"
    >
      {interestingConnectors.map((connector: IDataTray) => {
        if (isValidConnector(connector)) {
          return renderConnector(connector);
        }
      })}
    </StyledInterestingConectorList>
  );
};

export const renderConnector = (connector: IDataTray) => (
  <ConnectorElementWrapper
    draggable="true"
    coords={connector["data-tray"]?.coords}
    key={uuidv4()}
  >
    <ConnectorElementImage
      src={connector["data-tray"]?.connector.iconURL}
      draggable="false"
    />

    <ConnectorElementTitle>
      {connector["data-tray"]?.connector.name}
    </ConnectorElementTitle>
  </ConnectorElementWrapper>
);

export const GraemesVisualizer = (props: IDataTray) => {
  const [visualizerList, setVisualizerList] = useState<IDataTray[]>([]);
  const [interestingConnectors, setInterestingConnectors] = useState<
    IDataTray[]
  >([]);

  useEffect(() => {
    if (props["data-tray"]) {
      setVisualizerList([...visualizerList, { ...props }]);
    }
  }, [props["data-tray"]]);

  console.log(props);
  return (
    <AppWrapper>
      <h4>
        Graeme's Visualizer{" "}
        <span role="img" aria-label="victory emoji">
          ✌️
        </span>
      </h4>
      <CurrentTimeWrapper data-testid="currentTime">
        <CurrentTime />
      </CurrentTimeWrapper>
      <ConnectorVisualizer data-testid="connectorVisualizer">
        {visualizerList.map((connector: IDataTray) => {
          if (isValidConnector(connector)) {
            return renderConnector(connector);
          }
        })}
      </ConnectorVisualizer>
      <h4>Interesting Connector List</h4>
      <InterestingConectorList interestingConnectors={interestingConnectors} />
    </AppWrapper>
  );
};
