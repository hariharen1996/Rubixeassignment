import {
  AboutSection,
  AboutContainer,
  AboutContent,
  AboutHeading,
  AboutDescription,
  AboutImage,
  AboutImageContainer,
  MoreInfoContainer,
  MoreInfoContent,
  InfoHeading,
  InfoDescription,
} from './StyledAbout'

const AboutRoute = () => (
  <AboutSection>
    <AboutContainer>
      <AboutContent>
        <AboutHeading>who we are</AboutHeading>
        <AboutDescription>
          Rubixe <sup>TM</sup> is a global technology company specializing in
          disruptive technologies - Artificial Intelligence (AI), Machine
          Learning, Robotic Process Automation (RPA), BlockChain and Internet of
          Things (IoT).
          <br />
          Rubixe <sup>TM</sup> mission is to enable businesses to leverage the
          full potential of disruptive technologies and stay competitive in the
          market, turning complex challenges into solutions, providing a
          strategic competitive advantage that are more efficient, effective and
          predictable.
        </AboutDescription>
      </AboutContent>
      <AboutImageContainer>
        <AboutImage
          src="https://res.cloudinary.com/dhr74n4vu/image/upload/v1667899788/instashare-search_im9amq.png"
          alt="rubixe-logo"
        />
      </AboutImageContainer>
    </AboutContainer>
    <MoreInfoContainer>
      <MoreInfoContent>
        <InfoHeading>where we started</InfoHeading>
        <InfoDescription>
          We started in 2015, with a passionate team who want to bring
          game-changing solutions through disrupting technologies. We expertise
          in delivering enterprise-level solutions in the field of Artificial
          Intelligence (AI), Cyber Security, Robotic Process Automation (RPA),
          Internet Of Things (IOT), and BlockChain Technology
        </InfoDescription>
      </MoreInfoContent>
    </MoreInfoContainer>
  </AboutSection>
)

export default AboutRoute
