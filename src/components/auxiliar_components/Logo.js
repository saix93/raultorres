import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './Logo.css';

// Image icons
import icon_0 from '../../images/icon_0.jpg';
import icon_1 from '../../images/icon_1.jpg';
import icon_2 from '../../images/icon_2.jpg';
import icon_3 from '../../images/icon_3.jpg';

const icons = [icon_0, icon_1, icon_2, icon_3];

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {icon: 0};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      4000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      icon: this.state.icon === icons.length - 1 ? 0 : this.state.icon + 1
    });
  }

  render() {
    const img = (
      <span key={this.state.icon} className="Logo-container">
        <img src={icons[this.state.icon]} className="Logo-container-img" alt="logo" />
      </span>
    )
    
    return (
      <div className="Logo">
        <CSSTransitionGroup
          transitionName="Logo-transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}>
          {img}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Logo;