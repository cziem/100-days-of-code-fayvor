import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  background: #0c0a0b;
  color: white;
  width: ${props => `${props.width}px`}
  margin-top: 4rem;
  padding: 0.2rem 1.8rem;
  /* padding: 2rem; */
  box-sizing: border-box;

  .drawer__ppic-wrp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-bottom: 1px solid #292929;
    padding: .5rem 0;

    p {
      margin: 0.34rem auto;
      color: #c1c1c1;
    }
  }
`

export const ProPic = styled.div`
  height: 7rem;
  width: 7rem;
  margin: 0 auto;
  border-radius: 50%;
  background: url(${props => props.pro_pic}) no-repeat;
  background-size: cover;
  background-position: center center;
`