import React, { Component } from 'react';
import './Skills.css';

// Components
import BodyLink from '../auxiliar_components/BodyLink.js';
import SkillItem from '../auxiliar_components/SkillItem.js';
import Work from './Work.js';

// Images
import img_unity from '../../images/unity.jpg';
import img_ue4 from '../../images/ue4.jpg';
import img_maya from '../../images/maya.jpg';
import img_nodejs from '../../images/nodejs.jpg';
import img_angularjs from '../../images/angularjs.jpg';
import img_reactjs from '../../images/reactjs.jpg';

import img_ps4 from '../../images/PS4Controller.jpg';

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div className="Skills-list">
          <SkillItem title="Unity" img={img_unity} score="90" color="#00bcd4"
            text="I have created a bunch of projects on my own.\nLooking forward to participate in a project with more people."/>
            
          <SkillItem title="Unreal Engine 4" img={img_ue4} score="75" color="#17448c"
            text="I have developed some scripting blueprints and created a few materials.\nCurrently learning C++ to avoid Visual scripting!"/>

          <SkillItem title="Maya" img={img_maya} score="45" color="#34d8bd"
            text="I am not a particularly artistic person, but I have used Maya to recreate my room's furniture (without textures) and I think I did a pretty decent job."/>

          <SkillItem title="NodeJS" img={img_nodejs} score="80" color="#018c26"
            text="As a javascript developer I must love NodeJS, everytime I have to create a server to host anything, I use Node."/>

          <SkillItem title="AngularJS" img={img_angularjs} score="85" color="#b50000"
            text="In my first job as frontend developer, I created a big part of an AngularJS application."/>

          <SkillItem title="ReactJS" img={img_reactjs} score="70" color="#42c5f4"
            text="I haven't used it a lot but I decided to give it an opportunity.\nThis page was built with react in less than a week."/>

          <SkillItem title="Gaming" img={img_ps4} score="90" color="#222"
            text="I am proud to say that I am a very proficient gamer, being able to adapt myself to any situation very quickly in any type of game."/>
        </div>
        <BodyLink to="Work" text="My Work >" onClick={() => this.props.onClick("Work", Work)}/>
      </div>
    );
  }
}

export default Skills;