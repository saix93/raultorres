import React, { Component } from 'react';

// Components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import Home from './Home.js';
import AboutMe from './AboutMe.js';
import Work from './Work.js';
import Skills from './Skills.js';
import Contact from './Contact.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: null,
      componentName: null
    };
  }

  componentDidMount() {
    // Por defecto carga el componente Home en la ruta '/'
    let route = window.location.pathname;
    let state = "";
    let component = null;

    switch (route) {
      case "/":         state = "/";          component = Home; break;
      case "/AboutMe":  state = "AboutMe";    component = AboutMe; break;
      case "/Work":     state = "Work";       component = Work; break;
      case "/Skills":   state = "Skills";     component = Skills; break;
      case "/Contact":  state = "Contact";    component = Contact; break;
      default:          state = "/";          component = Home;
    }

    this.setState({ stateName: state, componentName: component });
  }

  render() {
    return (
      <div className="Main">
        <Header onClick={(newState, newComponent) => this.setState({ stateName: newState, componentName: newComponent })}/>
        <Body onClick={(newState, newComponent) => this.setState({ stateName: newState, componentName: newComponent })} stateName={this.state.stateName} componentName={this.state.componentName}/>
        <Footer />
      </div>
    );
  }
}

export default Main;
