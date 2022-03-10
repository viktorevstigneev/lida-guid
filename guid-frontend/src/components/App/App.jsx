import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import Attraction from '../pages/Attraction/Attractions';
import Video from '../pages/Video/Video'
import Map from '../pages/Map/Map'
import Contact from '../pages/Contact/Contact'
import Routing from '../pages/ Route/Route';
import Editor from '../pages/Editor/Editor';
// import SignIn from '../pages/SignIn';
import './App.css';

const App = () => (
	<Switch>
		<Route path="/main" component={Main} />
		<Route path="/attractions" component={Attraction} />
		<Route path="/video" component={Video} />
		<Route path="/map" component={Map} />
		<Route path="/route" component={Routing} />
		<Route path="/contact" component={Contact} />
		<Route path="/edit" component={Editor} />

		<Redirect to="/main" />
	</Switch>
);

export default App;
