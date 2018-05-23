import React, { Component } from 'react';
import QRCode from '../images/qr-code.png'

class BitcoinSupport extends Component {
  render() {
    return (
      <div className="container">
        <h2>Support the Project </h2>
        <div className="row">
          <div className="col-12">
            <img src={QRCode} height="200" width="200" />
            <p>ETH Address</p>
            <p>0x123f681646d4a755815f9cb19e1acc8565a0c2ac</p>
            <button class="mdl-button mdl-js-button mdl-button--accent">
              Copy Address >
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BitcoinSupport;