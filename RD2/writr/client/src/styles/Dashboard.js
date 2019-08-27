import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  /* width: 100%; */
`

export const DashboardWrap = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 5rem 2rem;
  justify-content: center;
  margin-left: ${props => ( props.mode === 'true' ? `${props.width}px` : '0px' )};
`