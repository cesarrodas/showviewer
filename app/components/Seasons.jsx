import React from 'react';
import { Link } from 'react-router';
import { Navigation } from './Navigation';

export class Seasons extends React.Component {
	render() {
		return (
			<div>
				<Navigation selected="seasons"></Navigation>
				<br/>
				<h1>Seasons Component</h1>
			</div>
		);
	}
}