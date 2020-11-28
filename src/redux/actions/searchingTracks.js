let key = 'e3fe2a9e22346f395ed8c3e8d519e82b';
let rootURL = 'http://ws.audioscrobbler.com/2.0/';

const getLookingTracks = (track) => async dispatch => {
    const data = await fetch(`${rootURL}?method=track.search&track=${track}&api_key=${key}&format=json`);
    const items = await data.json();
    console.log(typeof(items));
    dispatch({ type: "FETCH_SEARCHING_TRACKS_SUCCESS", payload: items.results.trackmatches.track });
}

export default getLookingTracks;