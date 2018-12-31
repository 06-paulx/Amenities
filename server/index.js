const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const path = require('path');
const app = express();
const port = 4002

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, './../public/dist')));

app.get('/api/listing/:listingId/amenities', (req, res) => {
  const listingId = req.params.listingId;
  db.getAmenities(listingId, (amenities) => {
    res.send(amenities)
  });
});

app.get('/listing/:listingId/amenities', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/dist/index.html'));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
