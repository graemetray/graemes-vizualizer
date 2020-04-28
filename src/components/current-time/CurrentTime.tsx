import React, { useState } from 'react'
import format from 'date-fns/format'
import styled from 'styled-components'

const CurrentTimeWrapper = styled.div`
  margin: 0 auto;
  text-align: left;
  width: 1000px;
`

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('')

  setInterval(() => {
    setCurrentTime(format(new Date(), 'HH:mm:ss.S'))
  }, 100)

  return (
    <CurrentTimeWrapper data-testid="currentTime">
      <div>{currentTime}</div>
    </CurrentTimeWrapper>
  )
}
