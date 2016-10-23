import React from 'react';
import { Route, Router, IndexRoute, hashHistory, Link } from 'react-router';

import { TvApp } from '../components/TvApp';
import { General } from '../components/General';
import { Seasons } from '../components/Seasons';
import { Cast } from '../components/Cast';

export class TvRoutes extends React.Component {
	render(){
		return (
			<div>
				<Router history={hashHistory}>
					<Route path="/" component={TvApp}>
						<Route path="/seasons" component={Seasons}></Route>
						<Route path="/cast" component={Cast}></Route>
						<IndexRoute component={General}></IndexRoute>
					</Route>
				</Router>
			</div>
		);
	}
}