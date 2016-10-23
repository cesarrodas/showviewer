import React from 'react';
import { Link } from 'react-router';
import { Navigation } from './Navigation';

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
				<Navigation></Navigation>
				<br/>
				<h1 onClick={this.hello.bind(this)}>General Info Component</h1>
			</div>
		);
	}
}