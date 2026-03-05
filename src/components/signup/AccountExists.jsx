import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccountExists = () => {


    const nav = useNavigate()

    const redirect = () => {
        nav('/Login')
    }

  return (
    <div className='acc-exists'>

        <span>Already have an account?</span>
        <button className='acc-exists-login' onClick = {redirect}>Login in</button>
      
    </div>
  )
}

export default AccountExists
