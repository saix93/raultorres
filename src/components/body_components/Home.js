import React, { Component } from 'react';
import img_raul from '../../images/HomeRaul.jpg';
import './Home.css';

// Components
import BodyLink from '../auxiliar_components/BodyLink.js';
import AboutMe from './AboutMe.js';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src={img_raul} className="Home-photo" alt="Raúl"/>
        <div className="Home-text">
          <h1 className="Home-text-title">Game & <span className="Home-text-title-span">Web</span> Developer</h1>
          <p className="Home-text-paragraph">I like to use many different technologies to bring my projects to life.</p>
        </div>
        <BodyLink to="AboutMe" text="Read More >" onClick={() => this.props.onClick("AboutMe", AboutMe)}/>
      </div>
    );
  }
}

export default Home;