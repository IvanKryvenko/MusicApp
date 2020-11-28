let key = 'e3fe2a9e22346f395ed8c3e8d519e82b';
let rootURL = 'http://ws.audioscrobbler.com/2.0/';

const getTrandTracks = () => async dispatch => {
        const data = await fetch(`${rootURL}?method=chart.gettoptracks&api_key=${key}&format=json`);
        const items = await data.json();
        console.log(items);
        dispatch({ type: "FETCH_TRAND_TRACKS_SUCCESS", payload: items.tracks.track });
};

export default getTrandTracks;

