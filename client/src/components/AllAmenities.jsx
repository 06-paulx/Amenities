import React from 'React';
import AmenityListItem from './AmenityItem.jsx';

function AllAmenities({handleGoBack, essential, special}) {
  return (
    <div id="all_amenities">
     <div className="nav">
      <button className="back-button" onClick={handleGoBack}></button>
     </div>
      <div className="main_list">
        <div>
          <h1>Special to this house</h1>
          <h4>This home has these uniqe amenities.</h4>
          <hr></hr>
          {special.map((amenity, index) => 
            <AmenityListItem value={amenity}/>  
          )}
        </div>
        <div>
          <h1>Everything you need</h1>
          <h4>This Airbnb Plus home comes with these amenities.</h4>
          <hr></hr>
          {essential.map((amenity, index) =>
            <AmenityListItem value={amenity} />
          )}
        </div>
      </div>
    </div>
  )
}

export default AllAmenities;