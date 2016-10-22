import React from 'react';
import { Route, Router, IndexRoute, hashHistory, Link } from 'react-router';

import { General } from '../components/General';
import { Seasons } from '../components/Seasons';
import { Cast } from '../components/Cast';

export class TvRoutes extends React.Component {
	render(){
		return (
			<div>
				<Router history={hashHistory}>
					<Route path="/" component={General}></Route>
					<Route path="/seasons" component={Seasons}></Route>
					<Route path="/cast" component={Cast}></Route>
				</Router>
			</div>
		);
	}
}