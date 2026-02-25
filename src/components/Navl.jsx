import React from 'react'
import { ArrowDownToLine, Bell, Users } from 'lucide-react'
import Profile from './Profile'


const Navl = () => {
  return (
    <div className='navl'>
      <button className='ep'>Explore Premium</button>
      <button className='ia'>
        <ArrowDownToLine />
        Install App
      </button>
      <Bell />
      <Users />
      <Profile />
    </div>
  )
}

export default Navl
