import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import { geolocated } from "react-geolocated";



const mapStyles = {
  width: '100%',
  height: '100%',
  position: "relative",
  marginBottom: "2rem",
  };
  
  class MapLocation extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    } 
  
    render() {
      return (
        <div>
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: '',
              lng: ''
            }}
          >
           <Marker
            onClick={this.onMarkerClick}
            name={'This is test name'}
          />
          </Map>
        </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyA6j2tFXLPxXcRCa79xgun67j-xqWydtlo&callback=initMap'
  })(MapLocation);