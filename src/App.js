import {Switch, Route} from 'react-router-dom'
import HeaderRoute from './components/HeaderRoute'
import './App.css'
import MainRoute from './components/MainRoute'
import ServiceRoute from './components/ServiceRoute'
import AboutRoute from './components/AboutRoute'
import ContactRoute from './components/ContactRoute'
import BlogsRoute from './components/BlogsRoute'
import CareerRoute from './components/CareerRoute'
import ProductRoute from './components/ProductsRoute'
import AiInternshipRoute from './components/AiInternshipRoute'

const App = () => (
  <>
    <HeaderRoute />
    <Switch>
      <Route exact path="/" component={MainRoute} />
      <Route exact path="/services" component={ServiceRoute} />
      <Route exact path="/about" component={AboutRoute} />
      <Route exact path="/contact-us" component={ContactRoute} />
      <Route exact path="/blogs" component={BlogsRoute} />
      <Route exact path="/careers" component={CareerRoute} />
      <Route exact path="/products" component={ProductRoute} />
      <Route exact path="/ai-internship" component={AiInternshipRoute} />
    </Switch>
  </>
)

export default App
