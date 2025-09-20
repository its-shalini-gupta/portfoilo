import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// document.addEventListener("contextmenu", (e) => e.preventDefault());
// document.onkeydown = (e) => {
//   if (
//     e.key === "F12" ||
//     (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key))
//   ) {
//     e.preventDefault();
//     // alert("DevTools disabled!");
//   }
// };