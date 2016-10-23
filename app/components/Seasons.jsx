import React from 'react';
import { Link } from 'react-router';

export class Seasons extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<div className="menu-centered">
					  <ul className="menu">
					    <li><Link to="/">Home</Link></li>
					    <li><Link to="/seasons">Seasons</Link></li>
					    <li><Link to="/cast">Cast</Link></li>
					  </ul>
					</div>
				</nav>
				<br/>
				<h1>Seasons Component</h1>
			</div>
		);
	}
}