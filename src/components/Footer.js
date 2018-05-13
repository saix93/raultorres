import React, { Component } from 'react';
import './Footer.css';

// Components
import SocialNetworkList from './auxiliar_components/SocialNetworkList.js';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-container">
          <div className="Footer-credits">Developed by Raúl Torres</div>
          <div className="Footer-social">
            <SocialNetworkList />
          </div>
        </div>
      </div >
    );
  }
}

export default Footer;