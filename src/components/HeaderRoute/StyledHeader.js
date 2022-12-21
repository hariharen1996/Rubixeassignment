import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  background-color: #000;
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoImage = styled.div``
export const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`
export const NavLinks = styled.li`
  list-style: none;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fafafa;
  font-size: 16px;
  font-family: 'Roboto';
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`

export const LogoTitle = styled.div`
  margin: 0px;
`
export const LogoHeading = styled.h1`
  color: #ffffff;
  font-size: 25px;
  border-bottom: 1px solid #fafafa;
`
export const LogoDescription = styled.p`
  color: #ffffff;
  font-size: 12px;
  border-bottom: none;
`
