import styled from 'styled-components';

const Main = styled.div`
	background: url(${props => props.img}) no-repeat;
	background-size: cover;
	background-position: center center;
	height: 100vh;
	display: flex;
	justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif; 
  
  .welcome {
    background: rgba(101, 99, 99, 0.4);
    padding: 1rem 3rem;
    border-radius: 0.3rem;
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 6rem;
    font-weight: 200;
    color: #1d1d1d;
    padding-bottom: 0.6rem;

    span {
      font-weight: 600;
      color: #efeeea;
    }
  }
  
  p.welcome__cta-lead {
    font-size: 1.6rem;
    color: #0f0b08;
  }
`;

const Section = styled.section`
  padding: 1rem;

  a:focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: ${props => (props.fill ? '#0c4877' : 'transparent')};
  font-size: 1.2rem;
  border-radius: 5px;
  color: ${props => (props.primary ? 'violet' : '#f5f5f5')};
  border: ${props =>
    props.primary ? '3px solid violet' : '3px solid #0c4877'};
  margin: 0 1em;
  padding: 0.55em 2em;
  transition: 0.5s all ease-out;

  &:hover {
    color: white;
    background-color: ${props =>
    props.primary ? 'violet' : 'transparent'};
    border: ${props => props.fill ? '3px solid palevioletred' : '3px solid violet'}
  }

  &:focus {
    outline: none
  }
`

export {
  Main, Section, Button
}