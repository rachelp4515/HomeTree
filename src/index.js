import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';




import { CookiesProvider } from 'react-cookie';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='943245434171-itbj9c1d56lbbc35dinp3rdo7j1tfuth.apps.googleusercontent.com'  >
      <CookiesProvider>
        <Router>
        <App />
        </Router>
      </CookiesProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
