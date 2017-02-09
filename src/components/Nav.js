import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'Reactjobs'
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item as={IndexLink} to="/"
            name='Reactjobs'
            active={activeItem === 'Reactjobs'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to="/about"
              name='About'
              active={activeItem === 'About'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={Link} to="/signin"
              name='Sign In'
              active={activeItem === 'Sign In'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={Link} to="/signup"
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={Link} to="/preferences"
              name='Preferences'
              active={activeItem === 'Preferences'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={Link} to="/logout"
              name='Logout'
              active={activeItem === 'Logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
