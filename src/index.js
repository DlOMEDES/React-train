// import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import ClassBased from './ClassBased/ClassBased';
// create component
const App = () => {
  return (
    <div>
      <ClassBased />
    </div>
  );
};

// render component to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
