import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { IDataTray } from "../../types";
import { getValidCoordPosition } from "../../utils";

const ConnectorElementWrapper = styled.div<any>`
  background-color: white;
  border: 1px solid #999;
  border-radius: 5px;
  bottom: ${({ coords }) => getValidCoordPosition(coords.y)};
  display: ${({ interestingList }) =>
    interestingList ? "inline-block" : "block"};
  height: 75px;
  left: ${({ coords }) => getValidCoordPosition(coords.x)};
  margin: ${({ interestingList }) => (interestingList ? "0 20px 20px 0" : "0")};
  position: ${({ interestingList }) =>
    interestingList ? "static" : "absolute"};
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

export const Connector = (connector: IDataTray, interestingList: boolean) => {
  const drag = (
    event: React.DragEvent<HTMLDivElement>,
    connector: IDataTray
  ) => {
    event.currentTarget.style.border = "dashed";
    event.dataTransfer.setData("text/plain", JSON.stringify(connector));
  };

  return (
    <ConnectorElementWrapper
      draggable="true"
      onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
        drag(event, connector)
      }
      coords={connector["data-tray"]?.coords}
      key={uuidv4()}
      interestingList={interestingList}
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
};
