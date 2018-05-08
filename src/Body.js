import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Route path={"/" + this.props.stateName} component={this.props.componentName}/>
      </div>
    );
  }
}

export default Body;
