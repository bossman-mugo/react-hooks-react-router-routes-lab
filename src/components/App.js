import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import Directors from './Directors';
import Actors from './Actors';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        
      </Switch>
    </div>
  );
}

export default App;
