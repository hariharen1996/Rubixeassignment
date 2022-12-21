import {MainFlex, MainContainer} from './StyledMain'
import AboutRoute from '../AboutRoute'
import ContactRoute from '../ContactRoute'
import FooterRoute from '../FooterRoute'

const MainRoute = () => (
  <MainContainer>
    <AboutRoute />
    <ContactRoute />
    <FooterRoute />
  </MainContainer>
)

export default MainRoute
