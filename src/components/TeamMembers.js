import React, { Component } from 'react';
import WebDev from '../images/web-dev.png'
import Sonia from '../images/sonia.png'
import Przemek from '../images/przemek.png'
import Wizzard from '../images/graphic-wizzard.png'
import './TeamMembers.css'

class TeamMembers extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="section-header">OUR TEAM</h2>
        <div className="row">
          <div className="col-3">
            <img className="team-photo" src={WebDev} height="90" width="90" />
            <p>Developer Web/Mobile</p>
          </div>
          <div className="col-3">
            <img className="team-photo" src={Sonia} height="90" width="90" />
            <p>Sonia Targosz</p>
          </div>
          <div className="col-3">
            <img className="team-photo" src={Przemek} height="90" width="90" />
            <p>Przemysław Targosz</p>
          </div>
          <div className="col-3">
            <img className="team-photo" src={Wizzard} height="90" width="90" />
            <p>Graphic Wizzard</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMembers;