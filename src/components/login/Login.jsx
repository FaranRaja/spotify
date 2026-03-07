import React from 'react'

import LoginCredentials from './LoginCredentials'

import Top from './Top'

import LoginOptions from './LoginOptions'

import SignupRedirect from './SignupRedirect'


const Login = () => {
  return (
    <div className='login-page'>

      <Top />

      <LoginCredentials />

      <span>or</span>

      <LoginOptions />

      <SignupRedirect />
      
    </div>
  )
}

export default Login
