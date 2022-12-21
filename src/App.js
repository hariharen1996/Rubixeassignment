import {Switch, Route} from 'react-router-dom'
import HeaderRoute from './components/HeaderRoute'
import './App.css'
import MainRoute from './components/MainRoute'

const App = () => (
  <>
    <HeaderRoute />

    <Switch>
      <Route exact path="/" component={MainRoute} />
    </Switch>
  </>
)

export default App
