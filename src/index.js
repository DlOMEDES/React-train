// import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './ClassBased/SeasonsDisplay';

// create component
const App = () => {
  return (
    <div>
      <SeasonsDisplay />
    </div>
  );
};

// render component to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
