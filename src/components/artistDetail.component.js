import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getTrackInfo from '../redux/actions/artistInfo';

function ArtistDetail(props) {

    useEffect(() => {
        let artist = props.match.url.split('_');
        props.onFetchTrack(artist[1]);
    }, []);

    return (
        <div className="artist-detail">
            <div>
                <img src="https://pbs.twimg.com/profile_images/831815230325944320/jx12u6q0_400x400.jpg" alt="artist"></img>
            </div>
            <div>
                <h2>{props.artistInfo.name}</h2>
                <p></p>
            </div>
        </div> 
    );
}

export default connect(
    state => ({
        artistInfo: state.artistInfo
    }),
    dispatch => ({
        onFetchTrack: (artist) => {
            dispatch(getTrackInfo(artist))
        }
    })
)(ArtistDetail);