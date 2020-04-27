export interface ICoordsType {
  x: number;
  y: number;
}

export interface IDataTray {
  "data-tray"?: {
    coords: ICoordsType;
    connector: {
      iconURL: string;
      name: string;
    };
  };
}
