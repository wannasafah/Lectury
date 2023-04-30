import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './screen/Home'
import Login from './screen/Login'
import Register from './screen/Register'
import GetStart from './screen/GetStart'
import Profile from './screen/Profile'
import QandA from './screen/QandA'
import { RequireAuth } from './auth/RequireAuth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/getstart' element={<GetStart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='/question' element={<RequireAuth><QandA /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
