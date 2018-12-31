const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Amenities',
});

var specialAmenities = {
  'Self check-in': 'https://s3.amazonaws.com/amenities/self-check-in.png', 
  'Free parking on premises': 'https://s3.amazonaws.com/amenities/parking.png',
  'Free street parking': 'https://s3.amazonaws.com/amenities/parking.png',
  'Full kitchen': 'https://s3.amazonaws.com/amenities/kitchen.png',
  'Buzzer/wiresless intercom': 'https://s3.amazonaws.com/amenities/entrance-intercom.png',
  'Room-darkening shades': 'https://s3.amazonaws.com/amenities/darkening-shade.png',
  'Heating': 'https://s3.amazonaws.com/amenities/entrance-intercom.png',
  'Air conditioning': 'https://s3.amazonaws.com/amenities/heating.png',
  'Washer': 'https://s3.amazonaws.com/amenities/washer.png',
  'Dryer': 'https://s3.amazonaws.com/amenities/dryer.png',
  'Elevator': 'https://s3.amazonaws.com/amenities/elevator.png',
  "Children's books and toys": 'https: //s3.amazonaws.com/amenities/childrens-books-toys.png',
  "Children's dinnerware": 'https://s3.amazonaws.com/amenities/kids-dinnerware.png',
  'High chair': 'https://s3.amazonaws.com/amenities/high-chair.png',
  'Garden or backyard': 'https://s3.amazonaws.com/amenities/garden-backyard.png'
}

var essentialAmenities = {
  'Wifi': 'https://s3.amazonaws.com/amenities/wireless-internet.png',
  'TV': 'https://s3.amazonaws.com/amenities/tv.png',
  'Bathroom essentials': 'https://s3.amazonaws.com/amenities/essentials.png',
  'Bedroom comforts': 'https://s3.amazonaws.com/amenities/extra-pillows-blankets.png',
  'Coffee maker': 'https: //s3.amazonaws.com/amenities/coffee-maker.png',
  'Hair dryer': 'https://s3.amazonaws.com/amenities/hair-dryer.png',
  'Iron': 'https://s3.amazonaws.com/amenities/iron.png',
  'Carbon monoxide detector': 'https://s3.amazonaws.com/amenities/co2-detector.png',
  'Smoke detector': 'https://s3.amazonaws.com/amenities/smoke-detector.png',
  'Fire extinguisher': 'https://s3.amazonaws.com/amenities/fire-extinguisher.png'
}

var getRandomSpecialAmount = Math.floor(Math.random() * 6) + 8


let dbSeeding = function (query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

let currentQuery = Promise.resolve();



var essentialAmenities = Object.keys(essentialAmenities)
var essentialUrl = Object.values(essentialAmenities)

var specialAmenities = Object.keys(specialAmenities)
var specialUrl = Object.values(specialAmenities)

for (var i = 1; i < 101; i++) {
  var query = "INSERT INTO amenities (amenity, amenity_type, listing, amenity_url) VALUES (?, ?, ?, ?)"
  for (var j = 0; j < essentialAmenities.length; j++) {
    var params = [
      essentialAmenities[j],
      'essential',
      i,
      essentialUrl[j]
    ];
    dbSeeding(query, params)
  }
  for (var k = 0; k < (Math.floor(Math.random() * 6) + 8); k++) {
    params = [
      specialAmenities[k],
      'special',
      i,
      specialUrl[k]
    ];
    dbSeeding(query, params)
  }

};




currentQuery.then(
  result => {
    console.log(result, 'Success');
    connection.end();
  },
  err => {
    console.log(err);
    connection.end();
  },
);