import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => {
  return (
    <Main>
      <img src={require('../../assets/logos/pageLoader.gif')} alt="loading" />
    </Main>

  )
}