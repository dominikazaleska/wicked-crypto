import React, { Component } from 'react';
import BitWage from '../images/bitwage.png'
import Forbes from '../images/forbes.png'
import Spindle from '../images/spindle.png'

class Sponsors extends Component {
  render() {
    return (
      <div id="sponsors" className="container">
        <h2>Sponsors: </h2>
        <div className="row">
          <div className="col-4">
            <img src={BitWage} height="60" />
          </div>
          <div className="col-4">
            <img src={Forbes} height="60" />
          </div>
          <div className="col-4">
            <img src={Spindle} height="60" />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src={BitWage} height="60" />
          </div>
          <div className="col-4">
            <img src={Forbes} height="60" />
          </div>
          <div className="col-4">
            <img src={Spindle} height="60" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;