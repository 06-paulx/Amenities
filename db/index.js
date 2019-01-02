const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'amenities',
});

const getAmenities = (listingId, callback) => {
  const query = 'SELECT * FROM amenities WHERE listing = ?'
  const params = listingId

  connection.query(query, params, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(data)
    }
  });
};

module.exports = {
  getAmenities,
}