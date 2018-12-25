// import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';

// create component
const App = () => {
  return (
    <div>
      <h3>Live with ReactJS</h3>
    </div>
  );
};

// render component to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
