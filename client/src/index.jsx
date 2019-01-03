import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var listingId = window.location.pathname.slice(-1)

ReactDOM.render(<App id={listingId}/>, document.getElementById('amenities'));