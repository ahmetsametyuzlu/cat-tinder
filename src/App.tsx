import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './containers/Home';
import Category from './containers/Category';
import Stats from './containers/Stats';
import './App.css';

function App() {
  return (
    <Router basename="/cat-tinder">
      <header>
        <Link to="/">
          <img
            src="/cat-tinder/img/logo/Logo.svg"
            alt="Pet"
          />
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/stats/:categoryId(\d+)">
            <Stats />
          </Route>
          <Route path="/category/:categoryId(\d+)">
            <Category />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
