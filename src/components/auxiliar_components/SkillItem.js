import React, { Component } from 'react';
import './SkillItem.css';

class SkillItem extends Component {
  render() {
    return (
      <div className="SkillItem">
        <img src={this.props.img} className="SkillItem-photo" alt={this.props.title}/>
        <div className="SkillItem-textContainer">
          <h2 className="SkillItem-textContainer-title">{this.props.title}</h2>
          <p className="SkillItem-textContainer-paragraph">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default SkillItem;