import React from 'react'
import Navc from './Navc'
import Navl from './Navl'


const Navbar = () => {
  return (
    <div className='nav'>
      <img className='logo' src="https://img.icons8.com/?size=100&id=11116&format=png&color=FFFFFF" alt="" />
      <Navc />
      <Navl />
    </div>
  )
}

export default Navbar
