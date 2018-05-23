import React, { Component } from 'react';
import Facebook from '../images/facebook-icon.png'
import Twitter from '../images/twitter-icon.png'
import Meetup from '../images/meetup-icon.png'

class SocialLinks extends Component {
  render() {
    return (
      <div id="social" className="container">
        <h3 className="sub-section-header">For updates, more info about speakers & live streaming:</h3>
        <div className="row">
          <div className="col-12 col-sm-4">
            <img src={Facebook} height="80" />
            <p>Follow our Facebook</p>
          </div>
          <div className="col-12 col-sm-4">
            <img src={Twitter} height="80" />
            <p>Follow our Twitter</p>
          </div>
          <div className="col-12 col-sm-4">
            <img src={Meetup} height="90" />
            <p>Follow our Meetup</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialLinks;