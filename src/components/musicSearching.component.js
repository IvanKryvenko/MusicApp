import React from 'react';
import LookingTrack from './lookingTrack.component';
import { connect } from 'react-redux';
import getLookingTracks from '../redux/actions/searchingTracks';

function Search(props) {

    const prd = (e) => {
        e.preventDefault();
    }
    
    let trackInput;

    const searchTracks = () => {
        console.log('Searching for tracks!', trackInput.value);
        if (trackInput.value === undefined) {
            props.onSerchingTracks('Ти ж мене підманула');
        } else {
            props.onSerchingTracks(trackInput.value);
        }
    }
    
    return (
        <div className="tracks">
            <form className="track-search" onSubmit={prd}>
                <input type="text" ref={(input) => { trackInput = input }} />
                <button onClick={searchTracks}>Search</button>
            </form>
            <div>
                {props.searchTracks.map(item => (
                    <LookingTrack title={item.name} artist={item.artist} key={`${item.name}${item.artist}`} />
                ))}
            </div>
        </div> 
    );
}

export default connect(
    state => ({
        searchTracks: state.searchingTracks
    }),
    dispatch => ({
        onSerchingTracks: (track) => {
            dispatch(getLookingTracks(track))
        }
    })
)(Search);