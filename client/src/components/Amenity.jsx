import React from 'react';

function Amenity({value}) {
  return (
    <div className="amenity">
    <div>
      <img className="photo" src={value.amenity_url}></img>
    </div>
    <div className="amenity_text">
      {value.amenity}
    </div>
    </div>
  )
}

export default Amenity;