import React, { Component } from 'react';

// Components
import BodyLink from '../auxiliar_components/BodyLink.js';
import Contact from './Contact.js';

class Work extends Component {
  render() {
    return (
      <div>
        <h1 className="MenuItem-title">My Work</h1>
        <BodyLink to="Contact" text="How to Contact me >" onClick={() => this.props.onClick("Contact", Contact)}/>
      </div>
    );
  }
}

export default Work;