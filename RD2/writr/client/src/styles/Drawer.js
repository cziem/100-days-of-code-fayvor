import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #0c0a0b;
  width: ${props => `${props.width}px`}
`