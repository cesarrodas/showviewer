import axios from 'axios';

function getShowSeasons(showId){
	return axios.get(`http://api.tvmaze.com/shows/${showId}/seasons`);
}

function getShowCast(showId){
	return axios.get(`http://api.tvmaze.com/shows/${showId}/cast`);
}

function getShowInfo(showName){
	return axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${showName}`);
}

export default function getAllShowInfo(showName){
	var encodedName = encodeURIComponent(showName);
	return getShowInfo(encodedName).then((show) => {
		let custom = show.data;
		try {
			return axios.all([getShowSeasons(custom.id), getShowCast(custom.id)]).then((arr) => ({info: custom, seasons: arr[0].data, cast: arr[1].data})).catch((e) => {
				console.log(e);
			});
		}
		catch (e) {
			console.log(e);
		}
	});
}