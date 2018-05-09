import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Route path={"/" + this.props.stateName} render={()=><this.props.componentName onClick={this.props.onClick}/>}/>
      </div>
    );
  }
}

export default Body;
