import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import {
  FooterContainer,
  FooterSection,
  AboutSection,
  MenuSection,
  LearnSection,
  AddressSection,
  Heading,
  AboutText,
  MenuItems,
  MenuLists,
  Details,
  Social,
  SocialIcons,
  SocialBtn,
  Footer,
  FooterText,
  HrefLink,
} from './StyledFooter'

const FooterRoute = () => (
  <>
    <FooterContainer>
      <FooterSection>
        <AboutSection>
          <Heading>about us</Heading>
          <AboutText>
            Rubixe <sup>TM</sup> is a global technology company specializing in
            disruptive technologies - Artificial Intelligence (AI), Machine
            Learning, Robotic Process Automation (RPA), BlockChain and Internet
            of Things (IoT).
            <br />
            Rubixe <sup>TM</sup> mission is to enable businesses to leverage the
            full potential of disruptive technologies and stay competitive in
            the market
          </AboutText>
        </AboutSection>
        <MenuSection>
          <Heading>Menus</Heading>
          <MenuItems>
            <MenuLists>Home</MenuLists>
            <MenuLists>Services</MenuLists>
            <MenuLists>Products</MenuLists>
            <MenuLists>Career</MenuLists>
          </MenuItems>
        </MenuSection>
        <LearnSection>
          <Heading>Learn More</Heading>
          <MenuItems>
            <MenuLists>About</MenuLists>
            <MenuLists>Contact Us</MenuLists>
          </MenuItems>
        </LearnSection>
        <AddressSection>
          <Heading>Address</Heading>
          <Details>
            Novel Tech Park, 1st Floor, Hosur Rd, <br /> Kudlu gate, Bengaluru,
            Karnataka <br />
            560068 <br /> Phone: 0804-717-8999 <br /> Email: hi@rubixe.com
          </Details>
          <Social>
            <Heading>social media</Heading>
            <SocialIcons>
              <SocialBtn>
                <HrefLink
                  href="https://www.facebook.com/Rubixe.Official/"
                  target="_blank"
                >
                  <AiFillFacebook color="#3b5998" />
                </HrefLink>
              </SocialBtn>
              <SocialBtn>
                <HrefLink
                  href="https://www.linkedin.com/company/rubixe"
                  target="_blank"
                >
                  <AiFillLinkedin color="#0077b5" />
                </HrefLink>
              </SocialBtn>
            </SocialIcons>
          </Social>
        </AddressSection>
      </FooterSection>
    </FooterContainer>
    <Footer>
      <FooterText>
        &copy; Copyright 2017 - 2022 | Rubixe is a brand of THINK AHEAD
        INNOVATIONS PVT. LTD. | All Rights Reserved
      </FooterText>
    </Footer>
  </>
)

export default FooterRoute
