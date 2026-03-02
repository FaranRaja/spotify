import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Middle from './components/middle/Middle'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/Landing Page/LandingPage'
import NoPage from './components/404/NoPage'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path = '/' element = {<LandingPage />} />
        <Route path ='*' element = {<NoPage />} />
      </Routes>
      
    </div>
  )
}

export default App
