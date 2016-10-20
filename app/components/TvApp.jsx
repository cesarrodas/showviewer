import React from 'react';
import GetShowInfo from '../utils/axios_methods';

export class TvApp extends React.Component {
	componentDidMount(){
		GetShowInfo('daredevil').then((data) => {
			console.log(data);
		});
	}
	render(){
		return (
			<div className="container">
				<h1>This is the TV Viewer</h1>
			</div>
		);
	}
};