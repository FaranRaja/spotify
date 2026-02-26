import React from 'react'
import { ArrowDownToLine, Bell, Users } from 'lucide-react'
import Profile from './Profile'


const Navl = () => {
  return (
    <div className='navl'>
      <button className='ep'>Explore Premium</button>
      <button className='ia white-hover'>
        <ArrowDownToLine />
        Install App
      </button>
      <Bell className=' gray white-hover'/>
      <Users className='gray white-hover'/>
      <Profile name ='A' />
    </div>
  )
}

export default Navl
