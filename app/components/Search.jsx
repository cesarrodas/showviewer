import React from 'react';

export class Search extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	searchText: 'Enter a tv show'
    };
    this.onChange = this.onChange.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  }
  onChange(){
  	this.setState({
  		searchText: this.refs.show.value
  	})
  }
  sendSearch(event){
  	event.preventDefault();
  	this.props.searchingText(this.state.searchText);
  }
	render(){
		return (
			<div className="row">
				<div className="small-8 small-centered">
					<form ref="form" onSubmit={this.sendSearch}>
						<div className="small-10 column">
							<input type="text" ref="show" onChange={this.onChange} value={this.state.searchText} name="search"/>
						</div>
						<div className="small-2 column">
							<button className="button" name="submit" type="submit">Search</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}