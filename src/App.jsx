import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './screen/Home'
import Login from './screen/Login'
import Register from './screen/Register'
import GetStart from './screen/GetStart'
import Profile from './screen/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/getstart' element={<GetStart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
