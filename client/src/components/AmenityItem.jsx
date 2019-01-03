import React from 'react';

function AmenityListItem({value}) {
  return (
    <div>
      <div className="m-list_item">
       {value.amenity}
       <img className="m-list_photo" src={value.amenity_url}></img>
      </div>
      <hr></hr>
    </div>
  )
}

export default AmenityListItem;