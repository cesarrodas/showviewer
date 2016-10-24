import React from 'react';

export class Season extends React.Component{
	render(){
		var seasonInfo = this.props.info;
		return (
			<div className="row">
				<div className="season">
					{seasonInfo.image ? <div><br/><img className="seasonimage" width="150" src={seasonInfo.image.medium} /><hr/></div> : null}
					<br/>
					<div><strong>Season {seasonInfo.number}</strong></div>
					<br/>
					<div><strong>Premiere Date: </strong>{seasonInfo.premiereDate}</div>
					<br/>
					<div><strong>End Date: </strong>{seasonInfo.endDate}</div>
					<br/>
				</div>
			</div>
		)
	};
};