// import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import StateObj from './StateSession/StateObj';

// create component
const App = () => {
  return (
    <div>
      <StateObj />
    </div>
  );
};

// render component to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
