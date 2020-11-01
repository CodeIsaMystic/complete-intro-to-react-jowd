import React from 'react';
import { Link } from '@reach/router';

/** this Pet Component is going to Show the Pets Results  **/

export default function Pet({ name, animal, breed , media, location, id }) {

  let hero = 'http://placecorgi.com/300/300';
  if(media.length) {
    hero = media[0].small;
  }

  /**  Constructing Mark up for Pet Component **/
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}/>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  )
}