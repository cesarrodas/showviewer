import React from 'react';
import { Link } from 'react-router';
import { Navigation } from './Navigation';

export class Cast extends React.Component {
	render() {
		return (
			<div>
				<Navigation selected="cast"></Navigation>
				<br/>
				<h1>Cast Component</h1>
			</div>
		);
	}
}