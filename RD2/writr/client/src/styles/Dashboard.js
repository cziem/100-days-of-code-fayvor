import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
`

export const DashboardWrap = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 5.5rem 2rem;
  justify-content: center;
  width: calc(${props => `100vw - ${props.width}px`});
`