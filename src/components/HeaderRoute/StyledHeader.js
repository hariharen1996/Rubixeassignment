import styled, {css} from 'styled-components'
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
  gap: 10px;
`
export const LogoImage = styled.img`
  width: 30px;
  height: 30px;
`
export const NavItemsLg = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const NavLinksLg = styled.li`
  list-style: none;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fafafa;
  font-size: 12px;
  font-family: 'Roboto';
  cursor: pointer;
  text-transform: uppercase;
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

export const MenuButton = styled.button`
  border: 1px solid #e10600;
  background: none;
  outline: none;
  cursor: pointer;
  display: none;
  padding: 9px 8px;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    display: block;
  }
`

export const NavBarSm = styled.nav`
  background-color: #000;
  padding: 15px;
  width: 100%;
`

export const NavItemsSm = styled.ul`
  gap: 10px;
  display: none;
  padding-left: 0px;
  @media screen and (max-width: 800px) {
    display: block;
  }
`
export const NavLinksSm = styled.li`
  list-style: none;
  margin-bottom: 5px;
`
