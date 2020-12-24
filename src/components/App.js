// import logo from './logo.svg';
import '../App.css';
import {Switch, Route} from "react-router-dom"
import Nav from "../pages/Nav"
import Home from "../pages/Home"
import Auth from "../pages/Auth"
import Dashboard from '../pages/Dashboard'

function App() {
  return <>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth/:form" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </>
}

export default App;
