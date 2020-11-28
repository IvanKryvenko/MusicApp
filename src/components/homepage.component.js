import React, { useEffect } from 'react';
import Track from './track.component';
import { connect } from 'react-redux';
import getTrendTracks from '../redux/actions/trendTracks';
import { Link } from 'react-router-dom';

function Home(props) {

    useEffect(() => {
        props.onFetchTracks();
    }, []);

    return (
        <div className="tracks">
            <h1>Trends</h1>
            {props.trendTracks.map(item => (
                <Link to={`/${item.name}_${item.artist.name}`} key={`${item.playcount}`} >
                    <Track title={item.name} artist={item.artist.name} link={item.artist.url} key={`${item.playcount}`} img={item.image[3]['#text']} />
                </Link> 
            ))}
        </div>
    );
}

export default connect(
    state => ({
        trendTracks: state.trendTracks
    }),
    dispatch => ({
        onFetchTracks: () => {
            dispatch(getTrendTracks());
        }
    })
)(Home);
