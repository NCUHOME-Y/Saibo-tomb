import React from 'react'
import SecondSection from './sections/SecondSection'
import ThirdSection from './sections/ThirdSection'

import styles from './styles.module.scss'
import { Routes, Route, BrowserRouter, Link, Navigate } from 'react-router-dom'
import Login from './sections/Login'
import NotFound from './NotFound'
import Register from './sections/register'
import Forget from './sections/forget'
import Denglujiemian1 from './sections/denglujiemian1/denglujiemian1'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dl1" element={<Denglujiemian1 />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<SecondSection></SecondSection>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
