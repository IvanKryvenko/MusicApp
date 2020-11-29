import React from 'react';

function Track(props) {

    let title = props.title;
    let artistName = props.artist;
    let artistURL = props.link;
    let imgLink = props.img;

  return (
    <div className="track-section">
        <div className="track-section__left">
            <img src={imgLink}></img>
        </div>
        <div className="track-section__right">
            <h2>{title}</h2>
            <h3>{artistName}</h3>
            <a onClick={event => event.stopPropagation()} href={artistURL}>Artist Page</a>
        </div>
    </div>
  );
}

export default Track;