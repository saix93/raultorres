import React, { Component } from 'react';
import './Contact.css';

// Components
import SocialNetworkList from '../auxiliar_components/SocialNetworkList.js';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2 className="Contact-title">Follow me on social network!</h2>
        <div className="Contact-social">
          <SocialNetworkList />
        </div>
        <h2 className="Contact-title">Or send me an email :)</h2>
        <h2 className="Contact-title"><a className="Contact-link" href="mailto:r.torresgonzalez.93@gmail.com">r.torresgonzalez.93@gmail.com</a></h2>
      </div>
    );
  }
}

export default Contact;