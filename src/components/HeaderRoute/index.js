import {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {
  NavBar,
  NavBarSm,
  LogoContainer,
  LogoImage,
  NavItemsLg,
  NavLinksLg,
  NavItemsSm,
  NavLinksSm,
  LogoTitle,
  LogoHeading,
  LogoDescription,
  NavLink,
  MenuButton,
} from './StyledHeader'
import './index.css'

const menuData = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/services',
    name: 'Services',
  },
  {
    id: 3,
    to: '/products',
    name: 'Products',
  },
  {
    id: 4,
    to: '/ai-internship',
    name: 'AI Internship',
  },
  {
    id: 5,
    to: '/careers',
    name: 'career',
  },
  {
    id: 6,
    to: '/blogs',
    name: 'Blogs',
  },
  {
    id: 7,
    to: '/about',
    name: 'About',
  },
  {
    id: 8,
    to: '/contact-us',
    name: 'Contact Us',
  },
]

const HeaderRoute = () => {
  const [menu, showMenu] = useState(false)

  const changeMenu = () => {
    showMenu(prevState => !prevState)
  }
  return (
    <>
      <NavBar menu={menu}>
        <LogoContainer>
          <NavLink to="/">
            <LogoImage
              src="https://res.cloudinary.com/dhr74n4vu/image/upload/v1671633796/WhatsApp_Image_2022-12-21_at_12.54.08_PM_gvacww.png"
              alt="rubixe logo"
            />
          </NavLink>

          <LogoTitle>
            <LogoHeading>Rubixe</LogoHeading>
            <LogoDescription>Disruptive Technologies at work</LogoDescription>
          </LogoTitle>
        </LogoContainer>
        <NavItemsLg>
          {menuData.map(data => (
            <NavLinksLg key={data.id}>
              <NavLink to={data.to}>{data.name}</NavLink>
            </NavLinksLg>
          ))}
        </NavItemsLg>

        <MenuButton type="button" onClick={changeMenu}>
          {!menu ? (
            <AiOutlineMenu size={20} color="#ffffff" />
          ) : (
            <AiOutlineClose size={20} color="#ffffff" />
          )}
        </MenuButton>
      </NavBar>
      {menu && (
        <NavBarSm>
          <NavItemsSm>
            {menuData.map(data => (
              <NavLinksSm key={data.id}>
                <NavLink to={data.to}>{data.name}</NavLink>
              </NavLinksSm>
            ))}
          </NavItemsSm>
        </NavBarSm>
      )}
    </>
  )
}
export default HeaderRoute
