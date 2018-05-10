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
          <SkillItem title="Unity" text="I have created a bunch of projects on my own. Never participated in a project with more people but I am looking forward to it. 9/10" img={img_unity}/>
          <SkillItem title="Unreal Engine 4" text="I have developed some scripting blueprints and created a few materials. Currently learning C++ to avoid Visual scripting! 7/10" img={img_ue4}/>
          <SkillItem title="Maya" text="I am not a particularly artistic person, but I have used Maya to recreate my room's furniture (without textures) and I think I did a pretty decent job. 4/10" img={img_maya}/>
          <SkillItem title="NodeJS" text="As a javascript developer I must love NodeJS, everytime I have to create a server to host anything, I use Node. 8/10" img={img_nodejs}/>
          <SkillItem title="AngularJS" text="In my first job as frontend developer, I created a big part of an AngularJS application. 8/10" img={img_angularjs}/>
          <SkillItem title="ReactJS" text="I haven't used it a lot but I heard good things about it so I decided to give it an opportunity. This very page you are navigating throught right now, was built with react in less than a week. 6/10" img={img_reactjs}/>
          <SkillItem title="Gaming" text="I am proud to say that I am a very proficient gamer, being able to adapt myself to any situation very quickly in any type of game. 9/10" img={img_ps4}/>
        </div>
        <div className="Skills-bodyLink">
          <BodyLink to="Work" text="My Work >" onClick={() => this.props.onClick("Work", Work)}/>
        </div>
      </div>
    );
  }
}

export default Skills;