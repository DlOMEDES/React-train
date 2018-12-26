// import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import PropSession from './PropSession';
import PostCard from './PostCard';

// create component
const App = () => {
  return (
    <div>
      <PropSession />
      <PostCard />
    </div>
  );
};

// render component to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
