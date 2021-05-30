import React from 'react';
import { connect } from "react-redux"
import ReactDOM from 'react-dom';
import './index.css';
import Background from './Components/Background/Background'
import IntroContent from './Pages/LandingPage/IntroContent'
import TestComponent from './Components/TestComponent/TestComponent'
import Portfolio from './Portfolio'
import store from './Redux/store';
import { Provider } from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Portfolio></Portfolio>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// export default connect(mapStateToProps)(App)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
