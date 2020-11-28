import React from 'react';

function LookingTrack(props) {

    let title = props.title;
    let artistName = props.artist;


  return (
    <div className="track-section">
        <div className="looked-track">
            <h3>{title}</h3>
            <h4>{artistName}</h4>
        </div>
    </div>
  );
}

export default LookingTrack;