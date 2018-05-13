import React, { Component } from 'react';
import './WorkItem.css';

class WorkItem extends Component {
  render() {
    return (
      <div className="WorkItem">
        <img src={this.props.img} className="WorkItem-photo" alt={this.props.title}/>
        <div className="WorkItem-textContainer">
          <h2 className="WorkItem-textContainer-title">{this.props.title}</h2>
          <p className="WorkItem-textContainer-paragraph">
            {this.props.text.split('\\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
            })}
          </p>
          {this.props.link ? <span>URL: <a href={this.props.link}>{this.props.link}</a></span> : null}
        </div>
      </div>
    );
  }
}

export default WorkItem;