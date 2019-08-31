import styled from 'styled-components'

export const Main = styled.div`
  background: #efefef;
	height: 100vh;
	display: flex;
	justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  flex-direction: column;
  padding: 0 1.5rem;
`

export const Header = styled.header`
  padding: 1rem 2rem;

  h3 {
    color: #3e3d3d;
    font-size: 2.4rem;
    text-align: center;
  }
`

export const Section = styled.section`
  margin: 1rem auto;

  p {
    padding: 1rem 0.5rem;
    color: #3e3d3d;
    text-align: center;

    span {
      font-weight: bold;
      color: #E91E63;
    }
  }
`

export const CTA = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: 2px solid #7d7d7d;
    color: #7d7d7d;
  }

  button:hover {
    border: 2px solid #cccccc;
    color: #565656;
  }
`