import React, { Component } from 'react';
import FacebookWhite from '../images/facebook-white.png'
import TwitterWhite from '../images/twitter-white.png'
import MeetupWhite from '../images/meetup-white.png'

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container footer">
        <h3>FOLLOW US</h3>
        <div className="row">
          <div className="col-4">
            <img src={FacebookWhite} height="80" />
            <p>Follow our Facebook</p>
          </div>
          <div className="col-4">
            <img src={TwitterWhite} height="80" />
            <p>Follow our Twitter</p>
          </div>
          <div className="col-4">
            <img src={MeetupWhite} height="80" />
            <p>Follow our Meetup</p>
          </div>
        </div>
        <p>&copy; Wicked Crypto Meetup. All rights reserved.</p>
      </div>
    );
  }
}

export default Footer;