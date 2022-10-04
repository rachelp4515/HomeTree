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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/hostProp' element={<HostProp />} />
        <Route path='/propertyForm' element={<PropForm />} />
        <Route path='/rooms' element={<Rooms />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
