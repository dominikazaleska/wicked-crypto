import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="container" id="contact">
        <h2 className="section-header">CONTACT US: </h2>
        <div className="row">
          <div className="col-12">
            <p>Have a questions? Want to advise new localization? Interested to be a sponsor or partner? Just want to say hello? Contact us, using form below.</p>
            <form action="#">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="sample3" />
                <label class="mdl-textfield__label" for="sample3">Your email</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="sample3" />
                <label class="mdl-textfield__label" for="sample3">Enter a message</label>
              </div>
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;