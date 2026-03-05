import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginCredentials = () => {

    const nav = useNavigate()
    const [credentials, setCredentials] = useState(localStorage.getItem('email'))
    
    const handleChange = (e) => {
        setCredentials(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (credentials == localStorage.getItem('email')){
            nav('/')
        }

        setCredentials('')
    }

  return (
    <div className='login-creds'>

        <form action="" className='login-form'>

                <label htmlFor="">Email</label>
                <input className='email-input' type="email" placeholder='name@domain.com' value={credentials} onChange = {(e) => {
                    handleChange(e)
                }} />
                <button className='login-btn' onClick = {(e) => {
                    handleSubmit(e)
                }}>Continue</button>

        </form>
      
    </div>
  )
}

export default LoginCredentials
