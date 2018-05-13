import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-container">
          <div className="Footer-credits">Developed by Raúl Torres</div>
          <div className="Footer-social">
            <a target="_blank" href="https://github.com/saix93" className="fa fa-github"/>
            <a target="_blank" href="https://www.linkedin.com/in/ra%C3%BAl-torres-gonz%C3%A1lez-2a2814113" className="fa fa-linkedin"/>
            <a target="_blank" href="https://www.facebook.com/rtorresgonzalez" className="fa fa-facebook"/>
            <a target="_blank" href="https://plus.google.com/u/0/115979993696490667619" className="fa fa-google"/>
          </div>
        </div>
      </div >
    );
  }
}

export default Footer;