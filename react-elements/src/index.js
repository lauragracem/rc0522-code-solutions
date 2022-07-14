import React from 'react';
import ReactDOM from 'react-dom/client';

React.createElement(
  'h1',
  [null],
  ['Hello, React!']
  // console.log('element')
);

const container = document.querySelector('#root');

ReactDOM.createRoot('container');

container.render();
