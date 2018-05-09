import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

// Components
import MenuItem from './MenuItem.js';
import Home from './Home.js';
import AboutMe from './AboutMe.js';
import Work from './Work.js';
import Skills from './Skills.js';
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
            <MenuItem onClick={this.props.onClick} route="AboutMe" text="About Me" component={AboutMe}/>
            /
            <MenuItem onClick={this.props.onClick} route="Skills" text="My skills" component={Skills}/>
            /
            <MenuItem onClick={this.props.onClick} route="Work" text="Recent work" component={Work}/>
            /
            <MenuItem onClick={this.props.onClick} route="Contact" text="Contact" component={Contact}/>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;