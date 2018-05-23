import React, { Component } from 'react';
import SubMenu from './SubMenu';
import WickedCarousel from './WickedCarousel';
import CityGallery from './CityGallery';
import WhatIs from './WhatIs';
import SocialLinks from './SocialLinks';
import TeamMembers from './TeamMembers';
import Contact from './Contact';
import BitcoinSupport from './BitcoinSupport';
import Sponsors from './Sponsors';
import Footer from './Footer';
import './Home.css';

const Home = () => (
    <div class="Home">
    	<SubMenu />
    	<WickedCarousel />
    	<CityGallery />
    	<WhatIs />
        <SocialLinks />
        <TeamMembers />
        <Sponsors />
        <Contact />
        <BitcoinSupport />
        <Footer />
    </div>
)

export default Home;