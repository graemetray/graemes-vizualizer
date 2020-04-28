import React from 'react'
import { render } from '@testing-library/react'

import { InterestingConnectorList } from './'
import { dummyData } from '../../mocks/data'

describe('Interesting connector list', () => {
  it('renders connector in interesting connectors box', () => {
    const { getByTestId } = render(
      <InterestingConnectorList
        interestingConnectors={[{ 'data-tray': dummyData }]}
        setInterestingConnectors={() => {}}
      />
    )

    const connectorVisualizer = getByTestId('interestingConnectorList')
    expect(connectorVisualizer.children.length).toBe(1)
  })
})
