import React from 'react';

export class Actor extends React.Component{
	render(){
		var actor = this.props.info;
		return (
			<div className="row">
				<div className="actor">
					{actor.character.image ? <div><br/><img className="actorimage" width="150" src={actor.character.image.medium} /></div> : null}
					<br/>
					<div><strong>Character: </strong>{actor.character.name}</div>
					<hr/>
					<div><strong>Actor: </strong>{actor.person.name}</div>
					<br/>
				</div>
			</div>
		)
	};
};