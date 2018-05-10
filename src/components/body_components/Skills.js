import React, { Component } from 'react';
import './Skills.css';

// Components
import BodyLink from '../auxiliar_components/BodyLink.js';
import Work from './Work.js';

class Skills extends Component {
  render() {
    return (
      <div>
        <h2 className="MenuItem-title">Unity</h2>
        <p>My skill with unity</p>
        <BodyLink to="Work" text="My Work >" onClick={() => this.props.onClick("Work", Work)}/>
      </div>
    );
  }
}

export default Skills;