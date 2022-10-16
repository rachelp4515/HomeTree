import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from "react-router-dom";

import Landing from './components/landing';
import HostProp from './components/hostProp';
import PropForm from './components/addPropForm';
import Nav from './components/nav';
import Rooms from './components/rooms';
import SignUp from './components/signup';
import Login from './components/login';
import { useState } from 'react';

export default function App() {
    const [userId, setUserId] = useState('')
    useEffect( () => {
        console.log(userId)
    }, [userId])

    return (
        <>
        <Nav setUserId={setUserId}/>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/hostProp' element={<HostProp />} />
          <Route path='/propertyForm' element={<PropForm userId={userId}/>} />
          <Route path='/rooms' element={<Rooms />} />
        </Routes>
        </>
    )
}