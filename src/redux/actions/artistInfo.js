let key = 'e3fe2a9e22346f395ed8c3e8d519e82b';
let rootURL = 'http://ws.audioscrobbler.com/2.0/';

const getArtistInfo = (artist) => async dispatch => {
        const data = await fetch(`${rootURL}?method=artist.getinfo&artist=${artist}&api_key=${key}&format=json`);
        const item = await data.json();
        console.log(item.artist);
        dispatch({ type: "GET_ARTIST_INFO_SUCCESS", payload: item.artist });
};

export default getArtistInfo;