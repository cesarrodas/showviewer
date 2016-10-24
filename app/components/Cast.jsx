import React from 'react';
import { Link } from 'react-router';

import { Navigation } from './Navigation';
import {Actor} from './Actor';

export class Cast extends React.Component {
	handleActors(){
		var actors = this.props.allShowInfo.cast ? this.props.allShowInfo.cast : [];
		var actorCollection = actors.map((actor, index) => <Actor key={index} info={actor}></Actor>);
		// var actors = this.props.allShowInfo.cast;
		// console.log("HELLO", actors);
		return actorCollection;
	}
	render() {
		return (
			<div>
				<Navigation selected="cast"></Navigation>
				<br/>
				<h1>Cast Component</h1>
				<br/>
				{this.handleActors()}
			</div>
		);
	}
}