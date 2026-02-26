import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Middle from './components/middle/Middle'

const App = () => {
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

export default App
