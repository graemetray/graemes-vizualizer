import { IDataTray } from '../types'

export const getValidCoordPosition = (coordinate: number) => {
  if (coordinate < 0 || coordinate > 1000) {
    return '0px'
  } else if (coordinate > 925) {
    return `${coordinate - 75}px`
  } else {
    return `${coordinate}px`
  }
}

export const isValidConnector = (inputConnector: IDataTray) => {
  if (
    inputConnector['data-tray']?.connector &&
    inputConnector['data-tray']?.coords
  ) {
    const { connector, coords } = inputConnector['data-tray']
    if (connector.iconURL && connector.name && coords.x && coords.y) {
      return true
    }
  }
  return false
}
