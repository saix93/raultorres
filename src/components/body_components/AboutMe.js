import React, { Component } from 'react';
import './AboutMe.css';

// Components
import BodyLink from '../auxiliar_components/BodyLink.js';
import Skills from './Skills.js';

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <h1 className="AboutMe-title">Hi! My name is Raúl and I live in Alcobendas, Madrid.</h1>
        <p className="AboutMe-paragraph">
          I was born in Madrid in 1993 and I am addicted to technology ever since!<br/>
          I have always dreamed about being a programmer, to create my own ideas. So I decided to get my hands dirty by studying some courses and being a little self-teaching.
        </p>
        <p className="AboutMe-paragraph">
          I am a specialist technician on Web Application Development. That course gave me the initial knowledge I was looking for,
          as well as it encouraged me to keep learning and working on things I love.<br/>
          Lately, i have studied a <a href="https://www.cice.es/master-en-desarrollo-de-videojuegos-realidad-virtual-unity/" className="AboutMe-paragraph-cicelink">Master on Unity Development in CICE</a>,
          that gave me all the insights I needed to start developing games as well as prepared me to get the <a href="https://certification.unity.com/products/certified-developer" className="AboutMe-paragraph-unitylink">Unity Certified Developer</a> title.
        </p>
        <p className="AboutMe-paragraph">
          I am able to learn how to use a new technology in a matter of days (Take this website for example, built with ReactJS in two days!).<br/>
          I love working in a team to share knowledge and solve problems. Really, i LOVE to solve problems.
        </p>
        <p className="AboutMe-paragraph">
          For example, I have had a problem lately:<br/>
          My room is at the opposite end of the house from the router, so I had very bad Wifi signal, for my phone.
          I had to think about a solution, so I decided to set my Raspberry Pi up as a Bridge, between the cable network and the wifi network, acting as an Access Point.<br/>
          Now, I have my own Wifi access point in my room.
        </p>
        <BodyLink to="Skills" text="Skills >" onClick={() => this.props.onClick("Skills", Skills)}/>
      </div>
    );
  }
}

export default AboutMe;