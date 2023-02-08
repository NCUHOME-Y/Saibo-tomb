import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NotFound from './NotFound'
import Register from './sections/register'
import Forget from './sections/forget'
import Home from './sections/home/Home'
import Login from './sections/Login/login'
import Demo from './sections/demo/demo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forget" element={<Forget />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/home" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
