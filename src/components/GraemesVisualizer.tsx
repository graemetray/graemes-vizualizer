import React, { useState, useEffect } from "react";
import styled from "styled-components";
import format from "date-fns/format";

interface coordsType {
  x: number;
  y: number;
}

export interface IDataTray {
  "data-tray"?: {
    coords: coordsType;
    connector: {
      iconURL: string;
      name: string;
    };
  };
}

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

const InterestingConectorList = styled.div`
  border: 1px solid #999;
  margin: 0 auto;
  padding: 20px;
  width: 960px;
`;

const ConnectorElementWrapper = styled.div<any>`
  border: 1px solid #999;
  border-radius: 5px;
  bottom: ${({ coords }) =>
    coords.y < 0 || coords.y > 1000
      ? "0px"
      : coords.y > 925
      ? `${coords.y - 75}px`
      : `${coords.y}px`};
  height: 75px;
  left: ${({ coords }) =>
    coords.x < 0 || coords.x > 1000
      ? "0px"
      : coords.x > 925
      ? `${coords.x - 75}px`
      : `${coords.x}px`};
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

export const validConnector = (inputConnector: IDataTray) => {
  if (
    inputConnector["data-tray"]?.connector &&
    inputConnector["data-tray"]?.coords
  ) {
    const { connector, coords } = inputConnector["data-tray"];
    if (connector.iconURL && connector.name && coords.x && coords.y) {
      return true;
    }
  }
  return false;
};

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
      <ConnectorVisualizer>
        {visualizerList.map((connector: IDataTray) => {
          if (validConnector(connector)) {
            return (
              <ConnectorElementWrapper
                draggable="true"
                coords={connector["data-tray"]?.coords}
              >
                <ConnectorElementImage
                  src={connector["data-tray"]?.connector.iconURL}
                  alt="butterfly"
                  draggable="false"
                />

                <ConnectorElementTitle>
                  {connector["data-tray"]?.connector.name}
                </ConnectorElementTitle>
              </ConnectorElementWrapper>
            );
          }
        })}
      </ConnectorVisualizer>
      <InterestingConectorList></InterestingConectorList>
    </AppWrapper>
  );
};
