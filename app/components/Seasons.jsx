import React from 'react';
import { Link } from 'react-router';

export class Seasons extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/seasons">Seasons</Link>
					<Link to="/cast">Cast</Link>
				</nav>
				<br/>
				<h1>Seasons Component</h1>
			</div>
		);
	}
}