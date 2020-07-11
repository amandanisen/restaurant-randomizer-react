// // This example adds a search box to a map, using the Google Place Autocomplete
// // feature. People can enter geographical searches. The search box will return a
// // pick list containing a mix of places and predicted search terms.

// // This example requires the Places library. Include the libraries=places
// // parameter when you first load the API. For example:
// // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

// <head>

//   <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>

// </head>
// <body>

//   <input id="searchTextField" type="text" size="50">

// </body>

// function initAutocomplete() {
//     var map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: -33.8688, lng: 151.2195 },
//       zoom: 13,
//       mapTypeId: "roadmap"
//     });

//     // Create the search box and link it to the UI element.
//     var input = document.getElementById("pac-input");
//     var searchBox = new google.maps.places.SearchBox(input);
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener("bounds_changed", function() {
//       searchBox.setBounds(map.getBounds());
//     });

//     var markers = [];
//     // Listen for the event fired when the user selects a prediction and retrieve
//     // more details for that place.
//     searchBox.addListener("places_changed", function() {
//       var places = searchBox.getPlaces();

//       if (places.length == 0) {
//         return;
//       }

//       // Clear out the old markers.
//       markers.forEach(function(marker) {
//         marker.setMap(null);
//       });
//       markers = [];

//       // For each place, get the icon, name and location.
//       var bounds = new google.maps.LatLngBounds();
//       places.forEach(function(place) {
//         if (!place.geometry) {
//           console.log("Returned place contains no geometry");
//           return;
//         }
//         var icon = {
//           url: place.icon,
//           size: new google.maps.Size(71, 71),
//           origin: new google.maps.Point(0, 0),
//           anchor: new google.maps.Point(17, 34),
//           scaledSize: new google.maps.Size(25, 25)
//         };

//         // Create a marker for each place.
//         markers.push(
//           new google.maps.Marker({
//             map: map,
//             icon: icon,
//             title: place.name,
//             position: place.geometry.location
//           })
//         );

//         if (place.geometry.viewport) {
//           // Only geocodes have viewport.
//           bounds.union(place.geometry.viewport);
//         } else {
//           bounds.extend(place.geometry.location);
//         }
//       });
//       map.fitBounds(bounds);
//     });
//   }
// import React, { useState } from "react";
import React from "react";
//adding google api
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    //creating lat, long, and user location state
    this.state = {
      latitude: null,
      longitude: null,
      userLocation: null,
    };
    //binding to state
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeocodeCoords = this.reverseGeocodeCoords.bind(this);
    this.loadUserLocation = this.loadUserLocation.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      //getCoordinates is a callback function that passes the data
      //if there is an error, handleLocationAlert will alert the user
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      //if browser doesn't acccept
      alert("Geolocation is not supported by this browser");
    }
  }

  reverseGeocodeCoords() {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=AIzaSyDIQvN6H2rttu96_q1ODn5UvpXb8elv52s`
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => alert(error));
  }

  getCoordinates(position) {
    //setting the state
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    this.reverseGeocodeCoords();
  }

  loadUserLocation() {
    return(
    <LoadScript googleMapsApiKey="AIzaSyC0hdYNG_W6stqJUUObJAW3aeOrdXwxzbo">
    <GoogleMap mapContainerStyle={containerStyle} center={this.state.latitude, this.state.longitude} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  </LoadScript>
    )
  }

  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  }

  render() {
    this.getLocation()
    return (
     
      <div className="userlocation"> 
      
      <h2>User Location</h2>
        {/* <button onClick={this.getLocation}>Get Coordinates</button> */}
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <button onClick={this.loadUserLocation}>Show </button>
        <LoadScript googleMapsApiKey="AIzaSyC0hdYNG_W6stqJUUObJAW3aeOrdXwxzbo">
    <GoogleMap mapContainerStyle={containerStyle} center={this.state.latitude, this.state.longitude} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  </LoadScript>
      </div>

    );
  }
}
export default MapContainer;

//TESTING OUT NEW THING********
// const loadScript = () => {
//     if (!this.googleMapsPromise) {
//       this.googleMapsPromise = new Promise((resolve) => {
//         // Add a global handler for when the API finishes loading
//         window.resolveGoogleMapsPromise = () => {
//           // Resolve the promise
//           resolve(google);

//           // Tidy up
//           delete window.resolveGoogleMapsPromise;
//         };

//         // Load the Google Maps API
//         const script = document.createElement("script");
//         const API = "AIzaSyC0hdYNG_W6stqJUUObJAW3aeOrdXwxzbo";
//           script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
//         script.async = true;
//         document.body.appendChild(script);
//       });
//     }

//     // Return a promise for the Google Maps API
//     return this.googleMapsPromise;
//   }

//   function componentWillMount() {
//     // Start Google Maps API loading since we know we'll soon need it
//     this.loadScript();
//   }

//   function componentDidMount() {
//     // Once the Google Maps API has finished loading, initialize the map
//     this.getGoogleMaps().then((google) => {
//       const uluru = { lat: -25.366, lng: 131.044 };
//       const map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 4,
//         center: uluru
//       });
//       const marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//       });
//     });
//   }

//     return (
//       <div>
//         <div id="map" style={{width: 600, height: 300}}></div>
//       </div>
//     )

// }
