import React from 'react';

function AmenityListItem({value}) {
  return (
    <div>
      <div className="list_item">
       {value.amenity}
       <img className="list_photo" src={value.amenity_url}></img>
      </div>
      <hr></hr>
    </div>
  )
}

export default AmenityListItem;