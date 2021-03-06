import React from 'react';
import GetAllShowInfo from '../utils/axios_methods';
import { Search } from './Search';

export class TvApp extends React.Component {
	constructor(){
		super();
		this.state = {
			showName: '',
			showData: {
				info: {},
				seasons: [],
				cast: []
			}
		};
	}
	componentDidUpdate(){
		GetAllShowInfo(this.state.showName).then((data) => {
			this.setState({
				showData: data
			})
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
					<br/>
					<h1 className="header">Tv Show Viewer</h1>
					<br/>
					<Search searchingText={this.search.bind(this)}></Search>
					<br/>
					<div>{React.cloneElement(this.props.children, { allShowInfo: this.state.showData })}</div>
				</div>
			</div>
		);
	}
};