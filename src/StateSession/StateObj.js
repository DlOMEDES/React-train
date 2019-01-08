import React from 'react';

class StateObj extends React.Component {
  // call constructor, initilize state object
  // add other js logic and change the state with setState
  constructor(props) {
    super(props);

    // Initialize state directly
    this.state = {
      lat: null,
      errorMessage: '',
      loading: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // CHANGE STATE
        this.setState({
          lat: position.coords.latitude
        });
      },
      error => {
        this.setState({
          errorMessage: error.message
        });
      },
      this.setState({
        loading: '...'
      })
    );
  }
  // must define render method
  // this render method uses condition rendering to show different states
  render() {
    if (this.state.errorMessage && !this.state.la) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

export default StateObj;
