import React from 'react'
import nl2br from 'react-newline-to-break'
import MeetupsAPI from './api'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import Facebook from '../images/facebook-icon.png'
import Twitter from '../images/twitter-icon.png'
import MeetupIcon from '../images/meetup-icon.png'
import './Meetup.css'
import Contact from './Contact'
import Footer from './Footer';


// The Meetup looks up the meetup using the number parsed from
// the URL's pathname. If no meetup is found with the given
// number, then a "meetup not found" message is displayed.
const Meetup = (props) => {
  const meetup = MeetupsAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!meetup) {
    return <div>Sorry, but the meetup was not found</div>
  }
  return (
    <div className="meetup">
      <div>
        <a className="mdl-button mdl-js-button mdl-js-ripple-effect button-city" href="/meetups/upcoming">
          UPCOMING
        </a>
        <a className="mdl-button mdl-js-button mdl-js-ripple-effect button-city" href="/meetups/past">
          PAST
        </a>
      </div>
      <div className="meetups-info">
        <h1>Meetups</h1>
        <h2>UPCOMING {MeetupsAPI.number()} EVENTS</h2>
      </div>
      <div className="meetups-small">
      <div className="meetup-card">
        <div className="row">
          <div className="col-12 col-sm-8">
            <img className="meetup-img" src={meetup.photo} alt={meetup.name}/>
          </div>
            <div className="col-12 col-sm-4">
                    <div className="meetup-card-text">
              <p className="meetup-card-date-text meetup-card-text-item">DATE: {meetup.datedisplay}</p>
              <p className="meetup-card-text-item">PLACE: {meetup.city}, {meetup.location}</p>
              <h2 className="meetup-card-text-item">{meetup.name}</h2>
              <div id="small-card-text" className="meetup-card-descr-item">
                <TextTruncate
                  line={5}
                  truncateText="..."
                  text={meetup.description}
                />
              </div>
              <div className="meetup-card-date-link-box">
                <a className="mdl-navigation__link meetup-card-date-link" styleName="margin-left: 0px"><Link to={`/meetups/${meetup.number}`}>DETAILS ></Link></a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="meetup-large-card">
      <h2 className="section-header">ABOUT THE EVENT</h2>
      <div className="meetup-large-card-text">
      <p>{meetup.description}</p>
      <p>Agenda: {nl2br(meetup.agenda)}</p>
      <p>Speakers: {nl2br(meetup.speakers)}</p>
      <p>Sponsors: {nl2br(meetup.sponsors)}</p>
      <h2 className="section-header-card-large">USEFUL LINKS</h2>
      {meetup.usefullinks.map(l => (
        <div>
        <a className="usefullinks" href={l.url}>{l.name}</a>
        <p>{nl2br()}</p>
        </div>
      ))}
      <h2 className="section-header-card-large">SPONSORS</h2>
<p>{nl2br(meetup.sponsors)}</p>
      <p><b><span className="text-pink">When:</span> {meetup.datedisplay}</b></p>
      <p><b><span className="text-pink">Where:</span> {meetup.city}, {meetup.location}</b></p>
      </div>
      <div className="map">
      <iframe 
        src={meetup.mapsurl}
        width="200" 
        height="200" 
        frameborder="0" 
        styleName="border:0"
      ></iframe>
      </div>
      <br/>
      <h2 className="section-header-card-large">FIND MORE</h2>
      <div className="socialRow">
          <a className="socialSnippet" href="#">
            <img className="socialimage" src={MeetupIcon} height="90" />
            <p className="socialtext">Meetup App</p>
          </a>
          <a className="socialSnippet" href="#">
            <img className="socialimage" src={Facebook} height="90" />
            <p className="socialtext">Facebook.com/WickedCryptoMeetup</p>
          </a>
      </div>
          <a className="socialSnippet" href="#">
            <img className="socialimage" src={Twitter} height="90" />
            <p className="socialtext">Twitter</p>
          </a>
        <div>
        </div>
        </div>
          <h2 className="section-header-card-large">SEE OUR PREVIOUS MEETUPS</h2>
            <div className="previous-meetups">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="previous-meetup1">
                <img className="meetup-img" src="http://cryptogogle.com/wp-content/uploads/2018/04/WCM-CV.png" alt={meetup.name}/>
                <h5 className="text-pink padding-top">NEM Discussion Panel: President @ NEM and Ex-COO @ HSBC Private Bank</h5>
                <div className="previous-link">
                <a className="mdl-navigation__link"><Link to={`/meetups/9`}>Check out our latest updates ></Link></a>
                </div>
             </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="previous-meetup2">
                <img className="meetup-img" src="https://secure.meetupstatic.com/photos/event/a/4/d/highres_468662637.jpeg" alt={meetup.name}/>
                <h5 className="text-pink padding-top">Blockchain use cases: Liberland & Experty</h5>
                <div className="previous-link">
                <a className="mdl-navigation__link"><Link to={`/meetups/8`}>Check out our latest updates ></Link></a>
                </div>
                </div>
              </div>
            </div>
            </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default Meetup;