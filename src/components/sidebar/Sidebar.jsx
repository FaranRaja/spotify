import React from 'react'
import Top from './Top'
import Buttons from './Buttons'
import Filters from './Filters'
import Content from './Content'

const Sidebar = () => {


  

  return (
    <div className='sidebar'>
        <Top />
        <Buttons />
        <Filters />
        <Content />
        
      
    </div>
  )
}

export default Sidebar
