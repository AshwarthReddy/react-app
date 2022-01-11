import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Greeting  from './components/Greeting';
import CheckYourVoteEligibility from './components/class_conditional_rendering/CheckYourVoteEligibility'
import  ReactContext from './components/react-context/ReactContext'
import ReactContext1 from './components/react-context/ReactContext1'
import SumExample from './components/functional_components/Sum'

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
      {/* <CheckYourVoteEligibility /> */}
      {/* <ReactContext /> */}
      {/* <ReactContext1 /> */}
      <SumExample />

      { /* <Greeting isLoggedIn = {false} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
