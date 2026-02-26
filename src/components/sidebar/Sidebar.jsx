import React from 'react'
import Top from './Top'
import Buttons from './Buttons'
import Filters from './Filters'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Top />
        <Buttons />
        <Filters />
      
    </div>
  )
}

export default Sidebar
