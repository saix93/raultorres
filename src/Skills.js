import React, { Component } from 'react';

// Components
import BodyLink from './BodyLink.js';
import Work from './Work.js';

class Skills extends Component {
  render() {
    return (
      <div>
        <h1 className="MenuItem-title">Skills</h1>
        <BodyLink to="Work" text="My Work >" onClick={() => this.props.onClick("Work", Work)}/>
      </div>
    );
  }
}

export default Skills;