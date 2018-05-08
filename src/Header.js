import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

// Components
import MenuItem from './MenuItem.js';
import Home from './Home.js';
import Contact from './Contact.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">Raúl Torres</h1>
          <div className="Header-menu">
            <MenuItem onClick={this.props.onClick} route="" text="Home" component={Home}/>
            /
            <MenuItem onClick={this.props.onClick} route="Contact" text="Contact" component={Contact}/>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;