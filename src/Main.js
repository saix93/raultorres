import React, { Component } from 'react';

// Components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import Home from './Home.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: null,
      componentName: null
    };
  }

  componentDidMount() {
    // Por defecto carga el componente Home en la ruta /
    this.setState({ stateName: "/", componentName: Home });
  }

  render() {
    return (
      <div className="Main">
        <Header onClick={(newState, newComponent) => this.setState({ stateName: newState, componentName: newComponent })}/>
        <Body stateName={this.state.stateName} componentName={this.state.componentName}/>
        <Footer />
      </div>
    );
  }
}

export default Main;
