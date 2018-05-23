import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import './Header.css';
import Logo from '../images/wicked-logo.png'

const Header = () => (
	<header>
		<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		  <header className="mdl-layout__header">
		    <div className="mdl-layout__header-row">
		      <div className="mdl-layout-spacer">
		        <Link to='/'><span><img src={Logo} height="90" width="90" /></span></Link>
		      </div>
		      <nav className="mdl-navigation mdl-layout--large-screen-only">
		        <a className="mdl-navigation__link header__link" href="http://dominikazaleska.github.io/wicked-crypto#about">About</a>
		        <a className="mdl-navigation__link header__link"><Link to='/meetups' className="header-link">Meetups</Link></a>
		        <a className="mdl-navigation__link header__link" href="http://dominikazaleska.github.io/wicked-crypto#sponsors">Sponsors</a>
		      	<a className="mdl-navigation__link header__link" href="http://dominikazaleska.github.io/wicked-crypto#contact">Contact</a>		  
		      </nav>
		    </div>
		  </header>
		  <div className="mdl-layout__drawer">
		    <nav className="mdl-navigation">
		      <a className="mdl-navigation__link" href="#about">About</a>
		      <a className="mdl-navigation__link"><Link to='/meetups' className="header-link">Meetups</Link></a>
			  <a className="mdl-navigation__link city__link" href="http://dominikazaleska.github.io/wicked-crypto/meetups/warsaw">Warsaw</a>
			  <a className="mdl-navigation__link city__link" href="http://dominikazaleska.github.io/wicked-crypto/meetups/newyork">New York</a>
			  <a className="mdl-navigation__link city__link" href="http://dominikazaleska.github.io/wicked-crypto/meetups/paris">Paris</a>
		      <a className="mdl-navigation__link" href="http://dominikazaleska.github.io/wicked-crypto#sponsors">Sponsors</a>
		      <a className="mdl-navigation__link" href="http://dominikazaleska.github.io/wicked-crypto#contact">Contact</a>		
		      <a className="mdl-navigation__link" href="http://dominikazaleska.github.io/wicked-crypto#social">Social</a>		    
		    </nav>
		  </div>
		</div>
	</header>
)

export default Header;