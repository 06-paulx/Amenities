const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const path = require('path');
const app = express();
const port = 4002
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, './../public/dist')));

app.get('/:listingId/amenities', (req, res) => {
  const listingId = req.params.listingId;
  db.getAmenities(listingId, (amenities) => {
    res.send(amenities)
  });
});

app.get('/:listingId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/dist/index.html'));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
