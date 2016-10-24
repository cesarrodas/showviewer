import React from 'react';
import { Link } from 'react-router';
import { Navigation } from './Navigation';

export class General extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		var show = this.props.allShowInfo.info;
		var summary = show.summary ? show.summary.replace(/<\/?[^>]+(>|$)/g, "") : '';
		return (
			<div>
				<Navigation selected="general"></Navigation>
				<br/>
				<br/>
				<div className="row">
					<div className="small-6 columns">
						{show.image ? <img width="400" src={show.image.original} /> : null}
					</div>
					<div className="small-6 columns">
						<h3>{show.name}</h3>
						<p>{summary}</p>
					</div>
				</div>
			</div>
		);
	}
}