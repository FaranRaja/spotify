import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mainbody">
          <Sidebar />
      </div>
      
    </div>
  )
}

export default App
