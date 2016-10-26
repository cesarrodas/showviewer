import React from 'react';
import { Link, hashHistory } from 'react-router';

import { Navigation } from './Navigation';
import { Season } from './Season';

export class Seasons extends React.Component {
	componentWillMount(){
		if(this.props.allShowInfo.seasons.length === 0){
			hashHistory.push('/');
		}
	}
	handleSeasons(){
		let theSeasons = this.props.allShowInfo.seasons ? this.props.allShowInfo.seasons : [];
		let seasonCollection = theSeasons.map((season, index) => <Season key={index} info={season}></Season>);
		return seasonCollection;
	}
	render() {
		return (
			<div>
				<Navigation selected="seasons"></Navigation>
				<br/>
				<h2 className="minorheader">Seasons</h2>
				<br/>
				<div className="small-8 small-offset-2">
					{this.handleSeasons()}
				</div>
			</div>
		);
	}
}