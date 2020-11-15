import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Classes from './components/OurClasses/Classes/Classes';
import Service from './components/Service/Service';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/OurClasses'>
          <Classes></Classes>
        </Route>
        <Route path='/service/:id'>
          <Service></Service>
        </Route>
        <Route path='/pricing'>
          <Pricing></Pricing>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
