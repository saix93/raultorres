import React, { Component } from 'react';
import './Work.css';

// Components
import BodyLink from '../auxiliar_components/BodyLink.js';
import WorkItem from '../auxiliar_components/WorkItem.js';
import Contact from './Contact.js';

// Media
import krosus from '../../images/Krosus.jpg';
import splintercice from '../../images/splintercice.jpg';
import dspbot from '../../images/DSPBot.jpg';
import comeround from '../../images/comeround.jpg';
import picamera from '../../images/picamera.jpg';
import pintamonas from '../../images/pintamonas.jpg';
import videoconferencia from '../../images/videoconferencia.jpg';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <div className="Work-content">
          <WorkItem img={krosus} title="Krosus" link="https://www.youtube.com/watch?v=Q3-DESyvngM"
            text="This is my TFM (Trabajo de Final de Master / Master's final work) of the Unity development master I coursed in CICE.
            \nThe idea was to create a game using our own ideas, so I decided to create a turn-based RPG." />
            
          <WorkItem img={splintercice} title="SplinterCICE" link="https://github.com/saix93/SplinterCICE"
            text="One of the most gratefull works I had to do in my Unity course.
            \nThis is a stealth game, the main objective is to infiltrate an enemy base and kill the commander. Then, escape.
            \n It has an intelligent AI that can hear the player and look for him" />

          <WorkItem img={dspbot} title="DSP-Bot" link="https://github.com/saix93/dsp-bot"
            text="A discord bot I made to act as an assistant in our discord server.
            \nIt is mostly used to play some sounds we have stored or make it 'talk' using Google's translate."/>

          <WorkItem img={comeround} title="COME ROUND"
            text="In my first work as a developer I worked in this big framework used to create web apps using SDL Tridion as it's CMS for a famous assurance company.
            \nMade with AngularJS, I wrote most of it's code, including some tricky parts with lots of elements.
            \nI also created some automated tasks using Gulp." />

          <WorkItem img={picamera} title="PiCamera" link="https://github.com/saix93/PiCamera"
            text="PiCamera was an attempt to stream the image captured from a camera conected to my Raspberry through a NodeJS web server.
            \nIt didn't work as expected but it was a good example of how to use hardware with the Raspberry." />

          <WorkItem img={pintamonas} title="Pintamonas" link="https://github.com/Side-Project-Ninjas/pintamonas"
            text="Pintamonas is a web game like pictionary, where a user has to draw something to represent a word, so the other players can guess it.
            \nWe used AngularJS for the frontend and Socket IO for the connections and data interchange.
            \nAfter a long stop, we are finally thinking about redoing this app with newer technologies." />

          <WorkItem img={videoconferencia} title="Videoconferencia" link="https://github.com/saix93/OLD-Videoconferencia"
            text="As my final work for the superior degree on Web Apps Development I made an app that allowed you to use videoconference rooms between any modern device, being able to use it from a smartphone and a PC, for example.
            \nIt uses EasyRTC as a bridge between the lowest part of WebRTC and my code.
            \nBe carefull, this is an old project (NodeJS was in <1.0 version when I made it) and A LOT of it is deprecated."/>
        </div>
        <BodyLink to="Contact" text="How to Contact me >" onClick={() => this.props.onClick("Contact", Contact)}/>
      </div>
    );
  }
}

export default Work;