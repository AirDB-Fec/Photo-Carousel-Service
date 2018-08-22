import React, { Component } from 'react';

const PhotoCarouselListItem = props => {
  const handleCarouselClick = e => {
    props.changePhoto(e.currentTarget, props.id);
  };

  return (
    <li
      className="carousel-list-item action-link"
      onClick={handleCarouselClick}
    >
      <img src={'https://s3-us-west-1.amazonaws.com/airdb-sdc/' + props.photo.photo_url} alt="pic" />
    </li>
  );
};

export default PhotoCarouselListItem;
