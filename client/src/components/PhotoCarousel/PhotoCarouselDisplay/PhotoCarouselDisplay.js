import React, { Component } from 'react';

class PhotoCarouselDisplay extends Component {
  render() {
    return (
      <div className="carousel-img">
        <img src={'https://s3-us-west-1.amazonaws.com/airdb-sdc/' + this.props.photo.photo_url} alt="" />
      </div>
    );
  }
}

export default PhotoCarouselDisplay;
