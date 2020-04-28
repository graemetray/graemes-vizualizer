import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { IDataTray } from "../../types";
import { isValidConnector } from "../../utils";
import { Connector } from "../connector";
import { CurrentTime } from "../current-time";
import { InterestingConnectorList } from "../interesting-connector-list";

const AppWrapper = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

const ConnectorVisualizer = styled.div`
  border: 1px solid #999;
  border-radius: 5px;
  height: 1000px;
  margin: 5px auto 20px auto;
  position: relative;
  width: 1000px;
`;

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

  return (
    <AppWrapper>
      <h4>
        Graeme's Visualizer{" "}
        <span role="img" aria-label="victory emoji">
          ✌️
        </span>
      </h4>
      <CurrentTime />
      <ConnectorVisualizer data-testid="connectorVisualizer">
        {visualizerList.map((connector: IDataTray) => {
          if (isValidConnector(connector)) {
            return Connector(connector, false);
          }
          return null;
        })}
      </ConnectorVisualizer>
      <h4>Interesting Connector List</h4>
      <InterestingConnectorList
        interestingConnectors={interestingConnectors}
        setInterestingConnectors={setInterestingConnectors}
      />
    </AppWrapper>
  );
};
