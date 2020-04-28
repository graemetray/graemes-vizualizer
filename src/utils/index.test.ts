import { getValidCoordPosition, isValidConnector } from './'
import { dummyData } from '../mocks/data'

describe('getValidCoordPosition util function', () => {
  it("returns '0px' if coord is less than 0 or greater than 1000", () => {
    expect(getValidCoordPosition(1001)).toBe('0px')
  })

  it('subtracts 75 if coord is greater than 925', () => {
    expect(getValidCoordPosition(1000)).toBe('925px')
  })

  it("returns coord with 'px' suffix if its value is between 0 - 925", () => {
    expect(getValidCoordPosition(500)).toBe('500px')
  })
})

describe('isValidConnector util function', () => {
  it('returns true for valid data', () => {
    expect(isValidConnector({ 'data-tray': dummyData })).toBe(true)
  })

  it('returns false for invalid data', () => {
    expect(
      isValidConnector({
        'data-tray': { ...dummyData, coords: { x: null, y: null } },
      })
    ).toBe(false)
  })
})
