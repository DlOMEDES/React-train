import React from 'react';
import SeasonDisplay from '../Component/SeasonDisplay';
import Spinner from '../Component/Spinner'
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
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }
  // render and return
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      // return <div>Lat: {this.state.lat}</div>;
      // passing state as props
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }

    return <Spinner message="Accept location request"/>
  }
}

export default CycleMethods;
