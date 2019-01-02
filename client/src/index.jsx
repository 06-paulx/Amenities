import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var listingId = window.location.pathname.split('/')[2]

ReactDOM.render(<App id={listingId}/>, document.getElementById('app'));