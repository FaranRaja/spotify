import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../sidebar/Sidebar'
import Middle from '../middle/Middle'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mainbody">
          <Sidebar />
          <Middle />
      </div>
    </div>
  )
}

export default LandingPage
