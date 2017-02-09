import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';

export default props => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
)
