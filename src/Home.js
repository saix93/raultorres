import React, { Component } from 'react';
import photoRaul from './HomeRaul.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src={photoRaul} className="Home-photo" alt="Raúl"/>
        <div className="Home-text">
          <h1 className="Home-text-title">Game & Web Developer</h1>
          <p className="Home-text-paragraph">I like to use many different technologies to bring my projects to life.</p>
        </div>
      </div>
    );
  }
}

export default Home;