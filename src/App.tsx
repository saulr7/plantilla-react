import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/common/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Users from './components/user/Users';

function App() {
  return (
    <div >


      <Router>
        <NavBar/>
      <div>

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
    </div>
  );
}

export default App;
