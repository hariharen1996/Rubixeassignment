import {MainFlex, MainContainer} from './StyledMain'
import HomeRoute from '../HomeRoute'
import ServiceRoute from '../ServiceRoute'
import AboutRoute from '../AboutRoute'
import ContactRoute from '../ContactRoute'
import FooterRoute from '../FooterRoute'

const MainRoute = () => (
  <MainContainer>
    <HomeRoute />
    <AboutRoute />
    <ServiceRoute />
    <ContactRoute />
    <FooterRoute />
  </MainContainer>
)

export default MainRoute
