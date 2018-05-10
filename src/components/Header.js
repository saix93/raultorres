import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './Header.css';

// Components
import MenuItem from './auxiliar_components/MenuItem.js';
import Home from './body_components/Home.js';
import AboutMe from './body_components/AboutMe.js';
import Work from './body_components/Work.js';
import Skills from './body_components/Skills.js';
import Contact from './body_components/Contact.js';

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