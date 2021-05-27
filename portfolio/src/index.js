import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from './Background/Background'
import IntroText from './IntroText/IntroText'
import store from './redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      <Background>
      </Background>
      <IntroText></IntroText>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
