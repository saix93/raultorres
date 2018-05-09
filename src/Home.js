import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import photoRaul from './HomeRaul.jpg';
import './Home.css';

// Components
import AboutMe from './AboutMe.js';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src={photoRaul} className="Home-photo" alt="Raúl"/>
        <div className="Home-text">
          <h1 className="Home-text-title">Game & Web Developer</h1>
          <p className="Home-text-paragraph">I like to use many different technologies to bring my projects to life.</p>
          <Link className="Home-text-link" to="AboutMe" onClick={() => this.props.onClick("AboutMe", AboutMe)}>Read More</Link>
        </div>
      </div>
    );
  }
}

export default Home;