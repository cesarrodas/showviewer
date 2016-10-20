import React from 'react';
import GetShowInfo from '../utils/axios_methods';
import { Search } from './Search';

export class TvApp extends React.Component {
	componentDidMount(){
		GetShowInfo('daredevil').then((data) => {
			console.log(data);
		});
	}
	render(){
		return (
			<div className="container">
				<div className="small-6 small-centered">
					<h1 className="header">Tv Show Viewer</h1>
					<br/>
					<Search className="small-10 small-centered"></Search>
				</div>
			</div>
		);
	}
};