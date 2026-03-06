import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignupRedirect = () => {

    const nav = useNavigate()

    const redirect = () => {
        nav('/Signup')
    }

  return (
    <div className='no-account'>

        <span>Don't have an account?</span>
        <button className='no-account-signup' onClick = {redirect}>Sign up</button>
      
    </div>
  )
}

export default SignupRedirect
