import React, { Component } from 'react';
import Fa from 'react-fontawesome';

const PhotoDisplay = props => {
  if (!props.photo) {
    return <div>Loading....</div>;
  }

  const handleClickForDisplay = e => {
    e && e.stopPropagation && e.stopPropagation();
    if (
      e.target.nodeName !== 'DIV' ||
      !e.target.classList.contains('gallery-display')
    ) {
      return;
    }
    props.showCarousel();
  };

  return (
    <div className="photo-gallery-display" onClick={handleClickForDisplay}>
      <div className="image-wrapper">
        <img src={'https://s3-us-west-1.amazonaws.com/airdb-sdc/' + props.photo.photo_url} alt="main photo" />
      </div>

      <div className="gallery-display fx">
        <div className="gallery-display-top fx">
          <button className="btn">
            <Fa name="share" /> Share
          </button>
          <button className="btn">
            <Fa name="heart-o" /> Save
          </button>
        </div>
        <div className="gallery-display-bottom">
          <button className="btn" onClick={props.showCarousel}>
            View Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDisplay;
