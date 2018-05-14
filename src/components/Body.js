import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Body.css';

import Home from './body_components/Home.js';
import AboutMe from './body_components/AboutMe.js';
import Work from './body_components/Work.js';
import Skills from './body_components/Skills.js';
import Contact from './body_components/Contact.js';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Route exact path="/" component={Home}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Work" component={Work}/>
        <Route path="/Skills" component={Skills}/>
        <Route path="/Contact" component={Contact}/>
      </div>
    );
  }
}

export default Body;
