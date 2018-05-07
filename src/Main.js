import React, { Component } from 'react';

// Components
import Header from './Header';
import Body from './Body';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: null,
      componentName: null
    };
  }

  handleClick(newState, newComponent) {
    this.setState({ stateName: newState, componentName: newComponent });
  }

  render() {
    return (
      <div className="Main">
        <Header onClick={(newState, newComponent) => this.setState({ stateName: newState, componentName: newComponent })}/>
        <Body stateName={this.state.stateName} componentName={this.state.componentName}/>
      </div>
    );
  }
}

export default Main;
