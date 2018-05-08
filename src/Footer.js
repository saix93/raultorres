import React, { Component } from 'react';
import './Footer.css';

class Header extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-container">
          <div className="Footer-rights">Developed by Raúl Torres</div>
          <div className="Footer-social">Follow me on Twitter, Facebook, LinkedIn</div>
        </div>
      </div >
    );
  }
}

export default Header;