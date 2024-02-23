import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './general/Navbar';
import MainCategory from './categories/MainCategory';
import MainMusics from './musics/MainMusics';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <MainMusics />
      </Route>
      <Route path="/category">
        <MainCategory />
      </Route>
    </Switch>
  </Router>
);

export default App;
