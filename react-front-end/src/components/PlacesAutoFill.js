// Imports
import React, { Component, useState, useEffect } from 'react';
/* global google */
// import "https://maps.googleapis.com/maps/api/js?key=AIzaSyBJqPHZ2J_DUY1hR4NZGZdys3g4R4oZe50&libraries=places&callback=initMap";

// Import Search Bar Components
// import SearchBar from 'material-ui-search-bar';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';
import { TextField } from '@material-ui/core';
// import AutoComplete from 'material-ui/AutoComplete';

class PlacesAutoFill extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    // this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    // const place = this.autocomplete.getPlace();
    // this.props.onPlaceLoaded(place);
    // return place
  }



  render() {
    return (
        
        <input ref={this.autocompleteInput}  id="autocomplete" placeholder="Enter your address"
         type="text"></input>
        
    );  
  }
}

export default PlacesAutoFill