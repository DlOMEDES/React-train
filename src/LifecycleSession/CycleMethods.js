import React from 'react';

// create class 
class CycleMethods extends React.Component {
  // super constructor props, initialize state
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: '',
      loading: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      error => {
        this.setState({
          errorMessage: error.message
        });
      },
      loading => {
        this.setState({
          loading: '...'
        });
      }
    );
  }


// render with return
render() {
  
  if(this.state.errorMessage && !this.state.lat) {
    return <div>Error: {this.state.errorMessage}</div>
  }

  if(this.state.lat && !this.state.errorMessage) {
    return <div>Lat: {this.state.lat}</div>
  }

  return <h3>Loading...</h3>
}
export default CycleMethods;