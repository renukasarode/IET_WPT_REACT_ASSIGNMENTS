import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyFunction from './MyFunction';
 import Calculation from './Calculation';
import Custom from './Custom';
import UniFunction  from './Unifunction';
import Factorial from './Factorials';
import CaseSensor from './CaseSensorFun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyFunction/>
    <Custom/> 
     <Calculation num1="20" num2="4"></Calculation>
     <UniFunction data="value"></UniFunction>
     <Factorial num1="4"></Factorial>
     <CaseSensor data="abc"></CaseSensor> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
