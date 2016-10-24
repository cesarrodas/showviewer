import React from 'react';
import { Link } from 'react-router';

export class Navigation extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="dropdown menu" data-dropdown-menu>
			      <li className="menu-text">Tv Viewer</li>
			      <li><Link className={this.props.selected === "general" ? "active" : ""} to="/">Home</Link></li>
			      <li><Link className={this.props.selected === "seasons" ? "active" : ""} to="/seasons">Seasons</Link></li>
					  <li><Link className={this.props.selected === "cast" ? "active" : ""} to="/cast">Cast</Link></li>
			    </ul>
			  </div>
			</div>
		)
	};
};