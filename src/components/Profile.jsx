import React from 'react'
import { useContext } from 'react'
import { userContext } from '../context/AuthContext'


const Profile = () => {

  const [user] = useContext(userContext)
  return (
    <div className='user'>
      <div className='inneru'>{user}</div>
    </div>
  )
}

export default Profile
