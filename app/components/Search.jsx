import React from 'react';

export class Search extends React.Component {
	constructor(){
		super();
		this.state = {
			searchText: ''
		}
	}
	render(){
		return (
			<div className="row">
				<div className="small-8 small-centered">
						<div className="small-10 column">
							<input type="text" name="search"/>
						</div>
						<div className="small-2 column">
							<button className="button">Search</button>
						</div>
				</div>
			</div>
		)
	}
}