// import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import CycleMethods from './LifecycleSession/CycleMethods';

// create component
const App = () => {
  return (
    <div>
      <CycleMethods />
    </div>
  );
};

// render component to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
