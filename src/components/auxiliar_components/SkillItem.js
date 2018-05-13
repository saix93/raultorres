import React, { Component } from 'react';
import './SkillItem.css';

// Components
import SkillBar from './SkillBar.js';

class SkillItem extends Component {
  render() {
    return (
      <div className="SkillItem">
        <img src={this.props.img} className="SkillItem-photo" alt={this.props.title}/>
        <div className="SkillItem-textContainer">
          <h2 className="SkillItem-textContainer-title">{this.props.title}</h2>
          <p className="SkillItem-textContainer-paragraph">
            {this.props.text.split('\\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
            })}
          </p>
          <div className="SkillItem-score">
            <SkillBar score={this.props.score} color={this.props.color}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillItem;