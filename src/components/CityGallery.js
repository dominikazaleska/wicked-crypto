import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Warsaw from '../images/warsaw.jpg'
import NewYork from '../images/new-york.jpg'
import Paris from '../images/paris.jpg'
import './CityGallery.css';

class CityGallery extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="section-header city-header">FIND WICKED CRYPTO MEETUP IN YOUR CITY</h2>
        <div className="row">
          <div className="col-12 col-sm-6">
            <Link to={`/meetups/warsaw`}>
              <div className="city-card warsaw-card">
                <h3 className='city-name'>WARSAW</h3>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6">
            <Link to={`/meetups/newyork`}>
            <div className="city-card new-york-card">
              <h3 className='city-name'>NEW YORK</h3>
            </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <Link to={`/meetups/paris`}>
            <div className="city-card paris-card">
              <h3 className='city-name'>PARIS</h3>
            </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6">
            <div className="city-card next-city-card">
              <div className='next-city-content'>
                <h3 className='city-name next-name'>WHICH CITY SHOULD BE NEXT?</h3>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent button-apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityGallery;