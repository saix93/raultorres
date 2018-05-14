import React, { Component } from 'react';
import './Header.css';

// Components
import Logo from './auxiliar_components/Logo.js';
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
          <Logo />
          <h1 className="Header-title">Raúl Torres</h1>
          <div className="Header-menu">
            <MenuItem route="" text="Home" component={Home}/>
            /
            <MenuItem route="AboutMe" text="About Me" component={AboutMe}/>
            /
            <MenuItem route="Skills" text="My skills" component={Skills}/>
            /
            <MenuItem route="Work" text="Recent work" component={Work}/>
            /
            <MenuItem route="Contact" text="Contact" component={Contact}/>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;