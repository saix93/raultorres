import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <Link className="MenuItem-link" to={"/" + this.props.route}>{this.props.text}</Link>
    );
  }
}

export default MenuItem;