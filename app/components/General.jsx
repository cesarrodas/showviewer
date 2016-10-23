import React from 'react';
import { Link } from 'react-router';

export class General extends React.Component {
	constructor(props){
		super(props);
	}
	hello(){
		console.log("General", this.props.allShowInfo.info);
	}
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
				<h1 onClick={this.hello.bind(this)}>General Info Component</h1>
			</div>
		);
	}
}