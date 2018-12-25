// import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';

// create component
const App = () => {
  const btnText = { text: 'text' };

  let labelText = 'Enter Text';

  // style object
  let style = {
    border: 'solid salmon',
    backgroundColor: 'blue',
    color: 'white'
  };

  return (
    <div>
      <label class="label" for="name">
        {labelText}
      </label>
      <input type="text" id="name" />
      <button style={style}>{btnText.text}</button>
    </div>
  );
};

// render component to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
