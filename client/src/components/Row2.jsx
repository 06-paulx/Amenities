import React from 'react';
import Amenity from './Amenity.jsx';

function Row2({amenities}) {
  amenities = amenities.slice(0, 6)
  return (
    <div>Row 2
      {
        amenities.map((amenity, index) =>
          <Amenity value={amenity} key={index} />
        )
      }
    </div>
  )
}

export default Row2;