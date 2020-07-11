import React from "react";

//adding google api
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

class userlocation extends React.Component {
    
  //setting up constructor so when you call this class, we can pass values
  constructor(props) {
    super(props);
    //creating lat, long, and user location state
    this.state = {
      latitude: null,
      longitude: null,
      userLocation: null
    };
    //binding to state
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeocodeCoords = this.reverseGeocodeCoords.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
  }

  getLocation(){
      if(navigator.geolocation){
          //getCoordinates is a callback function that passes the data
          //if there is an error, handleLocationAlert will alert the user
          navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
      }else{
          //if browser doesn't acccept
          alert("Geolocation is not supported by this browser");
      }
  }

  reverseGeocodeCoords(){
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=AIzaSyDIQvN6H2rttu96_q1ODn5UvpXb8elv52s`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => alert(error))
    }

  getCoordinates(position){
    //setting the state
    this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    })
    this.reverseGeocodeCoords();
}

getUserLocation(){

}

handleLocationError(error){
    switch(error.code) {
        case error.PERMISSION_DENIED:
           alert("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
           alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
           alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
           alert("An unknown error occurred.")
          break;
          default:
            alert("An unknown error occurred.")

      }
}


  render() {
    return (
      <div className="userlocation">
        <h2>User Location</h2>
        <button onClick={this.getLocation}>Get Coordinates</button>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <p>User Location: {this.state.userLocation}</p>
      </div>
    );
  }
}

export default userlocation;