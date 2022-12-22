import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`
export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`
export const AboutSection = styled.div`
  width: 50%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`
export const MenuSection = styled.div``
export const LearnSection = styled.div``
export const AddressSection = styled.div``
export const Heading = styled.h1`
  color: #212121;
  font-family: 'Roboto';
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    margin-top: 15px;
  }
`
export const AboutText = styled.p`
  color: #212121;
  font-family: 'Roboto';
  font-size: 13px;
  line-height: 1.5;
`
export const MenuItems = styled.ul`
  padding-left: 0px;
`
export const MenuLists = styled.li`
  list-style: none;
  font-size: 12px;
`
export const Details = styled.p`
  font-family: 'Roboto';
  color: #212121;
  font-size: 12px;
  margin-bottom: 10px;
`
export const Social = styled.div``
export const SocialIcons = styled.div`
  gap: 12px;
  display: flex;
`

export const SocialBtn = styled.div`
  background-color: #fafafa;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Footer = styled.footer`
  background-color: #000000;
  padding: 15px;
  width: 100%;
`

export const FooterText = styled.p`
  color: #fafafa;
  font-size: 14px;
  font-family: 'Roboto';
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`

export const HrefLink = styled.a`
  text-decoration: none;
`
