import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './Components/App';

//The use of root is better for the actual version of React (18)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>  //main componente that gets mounted by React
);