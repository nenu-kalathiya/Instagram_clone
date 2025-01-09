import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Signin from './components/Signin'
import SignUp from './components/SignUp'
import Profile from './components/Profile'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='signup' element={<SignUp />} ></Route>
        <Route path='signin' element={<Signin />} ></Route>
        <Route path='profile' element={<Profile />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
