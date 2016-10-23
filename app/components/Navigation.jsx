import React from 'react';
import { Link } from 'react-router';

export class Navigation extends React.Component {
	render() {
		return (
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="dropdown menu" data-dropdown-menu>
			      <li className="menu-text">Tv Viewer</li>
			      <li><Link to="/">Home</Link></li>
			      <li><Link to="/seasons">Seasons</Link></li>
					  <li><Link to="/cast">Cast</Link></li>
			    </ul>
			  </div>
			</div>
		)
	};
};