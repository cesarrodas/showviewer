import React from 'react';
import GetAllShowInfo from '../utils/axios_methods';
import { Search } from './Search';
import { TvRoutes } from '../router/index';

export class TvApp extends React.Component {
	constructor(){
		super();
		this.state = {
			showName: ''
		};
	}
	componentDidMount(){
		GetAllShowInfo('daredevil').then((data) => {
			console.log(data);
		});
	}
	componentDidUpdate(){
		GetAllShowInfo(this.state.showName).then((data) => {
			console.log(data);
		}).catch((e) => {
			console.log(e);
		})
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
					<br/>
					<TvRoutes></TvRoutes>
				</div>
			</div>
		);
	}
};