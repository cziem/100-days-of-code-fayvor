import React from 'react'
import styled, { keyframes } from 'styled-components'
import { MdErrorOutline } from 'react-icons/md'
import { Button } from '../../styles/Login';

const load = keyframes`
  0%: {
    opacity: 0;
    color: green;
  },
  50%: {
    opacity: 1;
    color: #444;
  }
  100%: {
    opacity: 0;
    color: red;
  }
`

const Main = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  "& > p": {
    transition: 1s ease-in-out;
    animation-name: ${load};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  & svg {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    color: violet;
  }

  Button {
    margin-top: 2rem;
  }
`

export default ({ ErrorText, history }) => (
  <Main>
    <MdErrorOutline />
    <p>{ErrorText}</p>

    <Button primary onClick={() => history.push('/')}>Back</Button>
  </Main>
)