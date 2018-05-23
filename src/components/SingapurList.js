import React from 'react'
import MeetupsAPI from './api'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import Footer from './Footer';

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const SingapurList = () => (
  <div className="meetups">
      <div>
      <a className="mdl-button mdl-js-button button-city" href="/meetups/singapurupcoming">
          UPCOMING
      </a>
      <a className="mdl-button mdl-js-button button-city" href="/meetups/singapurpast">
          PAST
      </a>
      </div>
    <h1>Meetups</h1>
    <h2>UPCOMING {MeetupsAPI.singapurnumber()} EVENTS</h2>
    <ul>
      {
        MeetupsAPI.singapur().map(m => (
            <div className="row">
              <div className="col-12 col-sm-8">
                <img className="meetup-img" src={m.photo} alt={m.name}/>
              </div>
              <div className="col-12 col-sm-4">
                <p>DATE: {m.datedisplay}</p>
                <p>PLACE: {m.city}, {m.location}</p>
                <h2>{m.name}</h2>

                <TextTruncate
                  line={5}
                  truncateText="..."
                  text={m.description}
                />
                <a className="mdl-navigation__link"><Link to={`/meetups/${m.number}`}>DETAILS ></Link></a>
              </div>
            </div>
        ))
      }
    </ul>
        <Footer />

  </div>
)

export default SingapurList;