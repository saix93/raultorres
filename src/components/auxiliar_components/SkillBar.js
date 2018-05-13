import React, { Component } from 'react';
import './SkillBar.css';

class SkillBar extends Component {
  render() {
    let divStyle = {
      width: this.props.score + "%",
      backgroundColor: this.props.color
    }

    return (
      <div className="SkillBar">
        <div className="SkillBar-skills" style={divStyle}>{this.props.score}%</div>
      </div>
    );
  }
}

export default SkillBar;