import React from 'react';
import { Link } from 'react-router';

import { Navigation } from './Navigation';
import {Actor} from './Actor';

export class Cast extends React.Component {
	handleActors(){
		let actors = this.props.allShowInfo.cast ? this.props.allShowInfo.cast : [];
		let actorCollection = actors.map((actor, index) => <Actor key={index} info={actor}></Actor>);
		return actorCollection;
	}
	render() {
		return (
			<div>
				<Navigation selected="cast"></Navigation>
				<br/>
				<h2 className="minorheader">Cast</h2>
				<br/>
				<div className="small-8 small-offset-2">
					{this.handleActors()}
				</div>
			</div>
		);
	}
}