import React from 'react';
import ReactDOM from 'react-dom/client'; 
// import Home from './project/basic/Home';
// import App from './project/counter/App';
// import App from './project/intermediat/App';
import Count from './project/intermediat/Count';
import "./index.css"
import App from './project/propsDrilling/App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
   {/* <App /> */}
   {/* <Count /> */}
   <App />
  </React.StrictMode>
);

 
