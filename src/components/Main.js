import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Meetups from './Meetups';

// this component will be rendered by our <___Router>
const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/meetups' component={Meetups}/>
		</Switch>
	</main>
)

export default Main;
