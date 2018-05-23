import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SubMenu.css';

class SubMenu extends Component {
  render() {
    return (
      <div className="submenu">
    	   <div className="submenu1">
            <a className="mdl-button mdl-js-button mdl-js-ripple-effect button-city" href="/meetups/warsaw">
              Warsaw
            </a>
            <a className="mdl-button mdl-js-button mdl-js-ripple-effect button-city" href="/meetups/paris">
              Paris
            </a>
    	      <a className="mdl-button mdl-js-button mdl-js-ripple-effect button-city" href="/meetups/newyork">
  				    New York
			      </a>
			      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent button-sponsor">
  				    Become a sponsor
			      </button>
    	    </div>
          <div className="submenu2">
            <a className="mdl-button mdl-js-button mdl-js-ripple-effect button-city" href="/meetups/upcoming">
              UPCOMING
            </a>
            <a className="mdl-button mdl-js-button mdl-js-ripple-effect button-city" href="/meetups/past">
              LATEST
            </a>
          </div>
        </div>
    );
  }
}

export default SubMenu;