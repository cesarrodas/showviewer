import axios from 'axios';

function getShowInfo(showName){
	return axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${showName}`);
}

function getShowSeasons(showId){
	return axios.get(`http://api.tvmaze.com/shows/${showId}/seasons`);
}

function getShowCast(showId){
	return axios.get(`http://api.tvmaze.com/shows/${showId}/cast`);
}

export default function getAllShowInfo(showName){
	return getShowInfo(showName).then((show) => {
		let custom = show.data;
		console.log(custom);
		return axios.all([getShowSeasons(custom.id), getShowCast(custom.id)]).then((arr) => ({info: custom, seasons: arr[0].data, cast: arr[1].data}));
	});
}