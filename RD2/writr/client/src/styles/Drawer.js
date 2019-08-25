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
  position: fixed;
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

export const Section = styled.section`
  padding: 1rem 0;

  a:link, a:visited {
    text-decoration: none;

    p {
      color: #e91e63;
      width: 100%;
      padding: 0.3rem;
      display: flex;
      align-items: center;
      transition: .2s ease-in-out;

      &:hover {
        color: #e91e63;
        /* background: #ddd; */
        border-radius: 0.2rem;
        box-shadow: 0 0 1px 1px rgba(72, 71, 71, 0.6)
      }
    }
  }

  svg {
    margin-right: 1.34rem;
    font-size: 1.32rem;
  }
`

export const Divider = styled.div`
  margin: 1.5rem 0;
  border-bottom: 1px solid #171717;
`