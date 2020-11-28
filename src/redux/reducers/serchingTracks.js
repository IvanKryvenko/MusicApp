const initialState =  [];

export default function searchingTracks(state = initialState, action) {
    if (action.type === "FETCH_SEARCHING_TRACKS_SUCCESS") {
        return action.payload;
    }
    return state;
}