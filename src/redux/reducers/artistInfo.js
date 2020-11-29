const initialState =  {};

export default function artistInfo(state = initialState, action) {
    if (action.type === "GET_ARTIST_INFO_SUCCESS") {
        return action.payload;
    }
    return state;
}