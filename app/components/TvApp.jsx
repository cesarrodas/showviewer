import React from 'react';
import GetShowInfo from '../utils/axios_methods';
import { Search } from './Search';

export class TvApp extends React.Component {
	constructor(){
		super();
		this.state = {
			showName: ''
		};
	}
	componentDidMount(){
		GetShowInfo('daredevil').then((data) => {
			console.log(data);
		});
	}
	search(passedName){
		this.setState({showName: passedName});
	}
	render(){
		return (
			<div className="container">
				<div className="small-6 small-centered">
					<h1 className="header">Tv Show Viewer</h1>
					<h1>{this.state.showName}</h1>
					<br/>
					<Search searchingText={this.search.bind(this)}></Search>
				</div>
			</div>
		);
	}
};