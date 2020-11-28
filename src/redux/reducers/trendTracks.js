const initialState =  [];

export default function trendTracks(state = initialState, action) {
    if (action.type === "FETCH_TRAND_TRACKS_SUCCESS") {
        return action.payload;
    }
    return state;
}