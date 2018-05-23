import React from 'react'
import MeetupsAPI from './api'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import Footer from './Footer';

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const ParisPastList = () => (
  <div className="meetups">
      <div>
      <a className="mdl-button mdl-js-button button-city" href="/meetups/parispast">
          PAST
      </a>
      <a className="mdl-button mdl-js-button button-city" href="/meetups/parisupcoming">
          UPCOMING
      </a>
      </div>
      <div className="meetups-info">
        <h1 className="meetups-place">Meetups</h1>
        <h3>UPCOMING {MeetupsAPI.parisnumber()} EVENTS</h3>
      </div>
    <ul className="meetups-small">
      {
        MeetupsAPI.parispast().map(m => (
          <div className="meetup-card">
            <div className="row">
              <div className="col-12 col-sm-8">
                <img className="meetup-img" src={m.photo} alt={m.name}/>
              </div>
              <div className="col-12 col-sm-4">
                <div className="meetup-card-text">
                <p className="meetup-card-date-text meetup-card-text-item"><b>DATE:</b> {m.datedisplay}</p>
                <p className="meetup-card-text-item">PLACE: {m.city}, {m.location}</p>
                <h3 className="meetup-card-text-item">{m.name}</h3>
                <div className="meetup-card-descr-item">
                <TextTruncate
                  line={5}
                  truncateText="..."
                  text={m.description}
                  className="meetup-card-text-item"
                />
                </div>
                <div className="meetup-card-date-link-box">
                <a className="mdl-navigation__link meetup-card-date-link" styleName="margin-left: 0px"><Link to={`/meetups/${m.number}`}><b>DETAILS ></b></Link></a>
                </div>
                </div>
              </div>
            </div>
            </div>
        ))
      }
    </ul>
    <Footer />

  </div>
)

export default ParisPastList;