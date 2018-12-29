import React from 'react';

class SeasonsDisplay extends React.Component {
  render() {
    // logic goes here for geolocation
    window.navigator.geolocation.getCurrentPosition(
      // callback#1 function for position. also called
      // success callback
      position => console.log(position),
      //second argument is the failure callback
      error => console.log(error)
    );

    return <div>Latitude: </div>;
  }
}

export default SeasonsDisplay;
