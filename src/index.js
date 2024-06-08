import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test() {
  return <StarRating color="blue" />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['terrible', 'bad', 'okay', 'good', 'amazing']} /> */}
    {/* <StarRating size={24} color="red" className="test" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
