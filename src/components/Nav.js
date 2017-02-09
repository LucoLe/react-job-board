import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
  return (
    <ul>
      <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
      <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
    </ul>
  );
}

export default Nav;
