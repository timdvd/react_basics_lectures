import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

const elem = (
  <div>
    <h2 className='text'>Hello World</h2>
    <input type="text" />
    <button>Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

