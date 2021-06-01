import React, { Component } from 'react';
import { render } from "react-dom";
import MapLocation from "./mapLocation";


const mapStyles = {
  width: "100%",
  height: "500px",
  position:"relative",
  
};


class GoogleMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }



  state = {  }
  render() { 
    return (
      <div style={mapStyles}>
        <MapLocation/>
      </div>
    );
  }
}
 
export default GoogleMap;