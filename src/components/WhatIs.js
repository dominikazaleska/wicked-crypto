import React, { Component } from 'react';
import './WhatIs.css';

class WhatIs extends Component {
  render() {
    return (
      <div id="about" className="container">
        <h2 className="section-header what-is-header">WHAT IS WICKED CRYPTO??</h2>
        <div className="row">
          <div className="col-12 col-sm-6 what-is-photo-card">
          </div>
          <div className="col-12 col-sm-6 what-is-text-card">
            <div className="what-is-text">
              <p>The event is for all awesome human beings who want to network and hang out with blockchain and tech geeks. We will be inviting experts from global blockchain scene. There will be plenty of time for networking and...oh well, parting :)</p>
              <p>Everyone is welcome on the Wicked Crypto Meetup - thos who are well into crypto and those who are new in space!</p>
              <p>Come over, have a drink, networsk with awesome people, learn something new, leave happy and come back for the next event.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatIs;