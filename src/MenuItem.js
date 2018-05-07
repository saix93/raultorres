import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <Link to={"/" + this.props.text} onClick={() => this.props.onClick(this.props.text, this.props.component)}>{this.props.text}</Link>
    );
  }
}

export default MenuItem;