import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MeetupsList from './MeetupsList';
import WarsawList from './WarsawList';
import ParisList from './ParisList';
import NewYorkList from './NewYorkList';
import SingapurList from './SingapurList';
import KualaLumpurList from './KualaLumpurList';
import PastList from './PastList';
import UpcomingList from './UpcomingList';
import WarsawPastList from './WarsawPastList';
import WarsawUpcomingList from './WarsawUpcomingList';
import ParisPastList from './ParisPastList';
import ParisUpcomingList from './ParisUpcomingList';
import NewYorkPastList from './NewYorkPastList';
import NewYorkUpcomingList from './NewYorkUpcomingList';
import SingapurPastList from './SingapurPastList';
import SingapurUpcomingList from './SingapurUpcomingList';
import KualaLumpurPastList from './KualaLumpurPastList';
import KualaLumpurUpcomingList from './KualaLumpurUpcomingList';
import Meetup from './Meetup';
import './Meetups.css';

const Meetups = () => (
  	<Switch>
    	<Route exact path='/meetups' component={MeetupsList}/>
    	<Route exact path='/meetups/warsaw' component={WarsawList}/>
    	<Route exact path='/meetups/paris' component={ParisList}/>
    	<Route exact path='/meetups/newyork' component={NewYorkList}/>
    	<Route exact path='/meetups/singapur' component={SingapurList}/>
    	<Route exact path='/meetups/kualalumpur' component={KualaLumpurList}/>
    	<Route exact path='/meetups/past' component={PastList}/>
    	<Route exact path='/meetups/upcoming' component={UpcomingList}/>
        <Route exact path='/meetups/warsawpast' component={WarsawPastList}/>
        <Route exact path='/meetups/warsawupcoming' component={WarsawUpcomingList}/>
        <Route exact path='/meetups/parispast' component={ParisPastList}/>
        <Route exact path='/meetups/parisupcoming' component={ParisUpcomingList}/>
        <Route exact path='/meetups/newyorkpast' component={NewYorkPastList}/>
        <Route exact path='/meetups/newyorkupcoming' component={NewYorkUpcomingList}/>
        <Route exact path='/meetups/singapurpast' component={SingapurPastList}/>
        <Route exact path='/meetups/singapurupcoming' component={SingapurUpcomingList}/>
        <Route exact path='/meetups/kualalupmurpast' component={KualaLumpurPastList}/>
        <Route exact path='/meetups/kualalumpurupcoming' component={KualaLumpurUpcomingList}/>
    	<Route path='/meetups/:number' component={Meetup}/>
  	</Switch>
)

export default Meetups;