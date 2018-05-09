import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BodyLink.css';

class BodyLink extends Component {
  render() {
    return (
      <div className="BodyLink">
        <Link className="BodyLink-link" to={this.props.to} onClick={this.props.onClick}>{this.props.text}</Link>
      </div>
    );
  }
}

export default BodyLink;