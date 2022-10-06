import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from "react-router-dom";
import Landing from './components/landing';
import HostProp from './components/hostProp';
import PropForm from './components/addPropForm';
import Nav from './components/nav';
import Rooms from './components/rooms';
import { CookiesProvider } from 'react-cookie';
import SignUp from './components/signup';
import Login from './components/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/hostProp' element={<HostProp />} />
          <Route path='/propertyForm' element={<PropForm />} />
          <Route path='/rooms' element={<Rooms />} />
        </Routes>
      </HashRouter>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
