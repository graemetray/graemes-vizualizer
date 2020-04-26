import React from "react";
import EventEmitter from "@trayio/builder-squad-event-emitter";
import styled from "styled-components";

import "./App.css";

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

const ConnectorElementWrapper = styled.div`
  border: 1px solid #999;
  border-radius: 5px;
  height: 75px;
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

export interface IDataTray {
  coords: {
    x: number;
    y: number;
  };
  connector: {
    iconURL: string;
    name: string;
  };
}

const App = () => {
  return (
    <EventEmitter>
      <GraemesVisualizer />
    </EventEmitter>
  );
};

export const GraemesVisualizer = (props: any) => {
  console.log(props);
  return (
    <AppWrapper>
      <h4>
        Graeme's Visualizer{" "}
        <span role="img" aria-label="victory emoji">
          ✌️
        </span>
      </h4>
      <ConnectorVisualizer />
      <InterestingConectorList>
        <ConnectorElementWrapper draggable="true">
          <ConnectorElementImage
            src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="butterfly"
            draggable="false"
          />

          <ConnectorElementTitle>
            Test a sf asd fa sdf asd f asd fa sdf{" "}
          </ConnectorElementTitle>
        </ConnectorElementWrapper>
      </InterestingConectorList>
    </AppWrapper>
  );
};

export default App;
