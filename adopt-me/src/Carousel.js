import React from "react";

class Carousel extends React.Component {
  // eslint-disable-next-line
  state = {
    photos: [],
    active: 0
  };

  /** A special React Method IT MUST BE STATIC  
   * 
   * => gonna take a set of props
   * => does some filtering on them 
   * ===> and giving back a new set of states to the component
   **/
  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];/* default img if there's no */

    /** This Photos Obj wil have sm, med and lg img
     * => we just take the large photo 
     * ==>  an Array of strings of urls **/
    if(media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  render() {
    const { photos, active } = this.state; 

    
      return (
        <div className="carousel">
          <img src="{photos[active]}"  alt="animal" />
          <div className="carousel-smaller">
            {this.props.media.map((photo, index) => (
              <img 
              key={photo.large} 
              onClick={this.handleIndexClick} 
              data-index={index} 
              src={photo.large} 
              className={index === active ? "active" : ""} 
              alt="animal thumbnail" 
              />
            ))}
          </div>
        </div>
      );
  }
}

export default Carousel;