import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  height: 4rem;
  background: #E91E63;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;

  a, a:visited {
    text-decoration: none;
  }

  h4 {
    color: white;
    font-size: 1.4rem;
  }

  header {
    display: flex;
    width: 8rem;
    align-items: center;

    a, a:visited {
      text-decoration: none;
    }
  }
`

export const NavWrap = styled.nav`
  display: flex;
  width: 14rem;
  margin-right: 3rem;
  list-style: none;
  justify-content: space-around;
  align-items: center;
`

export const NavItemList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: .5s ease-in;

  &:hover svg {
    color: white;
  }

  p {
    font-size: 0.6rem;
    color: #69213a;
  }

  svg {
    font-size: 1.58rem;
    color: #ffbbd2;
  }
`

export const MenuIcon = styled.div`
  margin-right: 1rem;
  padding-top: 0.4rem;

  svg {
    font-size: 1.58rem;
    color: #ffbbd2;
    transition: .2s ease-in;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  
`