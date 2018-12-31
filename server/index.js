const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const path = require('path');
const app = express();
const port = 4001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, './../public/dist')));

app.get('/api/listing/:listingId/amenities', (req, res) => {
  console.log('listing Id', req.params.listingId)
  const listingId = req.params.listingId;
  db.getAmenities(listingId, (err, reviews) => {
    if (err) {
      res.send(err)
    } else {
      res.send(reviews)
    }
  });
});

app.get('/listing/:listingId/amenities', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/dist/index.html'));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
