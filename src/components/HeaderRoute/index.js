import {
  NavBar,
  LogoContainer,
  LogoImage,
  NavItems,
  NavLinks,
  LogoTitle,
  LogoHeading,
  LogoDescription,
  NavLink,
} from './StyledHeader'
import './index.css'

const HeaderRoute = () => (
  <NavBar>
    <LogoContainer>
      <LogoImage />
      <LogoTitle>
        <LogoHeading>Rubixe</LogoHeading>
        <LogoDescription>Disruptive Technologies on work</LogoDescription>
      </LogoTitle>
    </LogoContainer>
    <NavItems>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
      </NavLinks>
      <NavLinks>
        <NavLink to="/services">Services</NavLink>
      </NavLinks>
      <NavLinks>
        <NavLink to="/ai-internship">AI Internship</NavLink>
      </NavLinks>
      <NavLinks>
        <NavLink to="/career">Career</NavLink>
      </NavLinks>
      <NavLinks>
        <NavLink to="/blog">Blog</NavLink>
      </NavLinks>
      <NavLinks>
        <NavLink to="/about">About</NavLink>
      </NavLinks>
      <NavLinks>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </NavLinks>
    </NavItems>
  </NavBar>
)

export default HeaderRoute
