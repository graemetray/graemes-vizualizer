import React, { useState } from "react";
import styled from "styled-components";
import format from "date-fns/format";

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

const CurrentTimeWrapper = styled.div`
  margin: 0 auto;
  text-align: right;
  width: 1000px;
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

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  setInterval(() => {
    setCurrentTime(format(new Date(), "HH:mm:ss.S"));
  }, 100);

  return <div>{currentTime}</div>;
};

export const GraemesVisualizer = (props: any) => {
  // console.log(props);
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
