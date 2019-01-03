import React from 'react';

function Amenity({value}) {
  return (
    <div className="m-amenity">
    <div>
      <img className="m-photo" src={value.amenity_url}></img>
    </div>
    <div className="m-amenity_text">
      {value.amenity}
    </div>
    </div>
  )
}

export default Amenity;