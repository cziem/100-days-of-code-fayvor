import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  height: 1.3rem;
  width: 2.5rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  img {
    width: 50%;
    height: 85%;
  }
`

export default () => {
  return (
    <Main>
      <img src={require( '../../assets/logos/spinner.gif' )} alt="loading" />
    </Main>
  )
}