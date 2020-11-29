import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import artistInfo from '../redux/actions/artistInfo';

function ArtistDetail(props) {

    useEffect(() => {
        let artist = props.match.url.split('_');
        props.onFetchTrack(artist[1]);
    }, []);

    if(!props.artistInfo.bio 
        && !props.artistInfo.image 
        && !props.artistInfo.tags 
        && !props.artistInfo.name) {
            return (
                <div><h2>Please wait!</h2></div>
            )
        } else {
            return (
                <div className="artist-detail">
                    <div>
                        <img src={props.artistInfo.image[4]["#text"]} alt="artist"></img>
                    </div>
                    <div>
                        <h2>{props.artistInfo.name}</h2>
                        <p>{props.artistInfo.bio.content}</p>
                    </div>
                </div> 
            )
        }
}

export default connect(
    state => ({
        artistInfo: state.artistInfo
    }),
    dispatch => ({
        onFetchTrack: (artist) => {
            dispatch(artistInfo(artist))
        }
    })
)(ArtistDetail);