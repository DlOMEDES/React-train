// import react
import React from 'react';

// create class extends or functional component
class GeoLat extends React.Component {
  // call constructor, initilize state object
  // add other js logic and change the state with setState
  constructor(props) {
    super(props);

    this.state = { lat: null };

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => console.log(error)
    );
  }

  // render and return
  render() {
    return <h3>Latitude: {this.state.lat}</h3>;
  }
}

// export the component
export default GeoLat;
