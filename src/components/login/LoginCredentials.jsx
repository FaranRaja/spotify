import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { userContext } from '../../context/AuthContext';




const LoginCredentials = () => {

    const nav = useNavigate()
    const [credentials, setCredentials] = useState(localStorage.getItem('email'))
    const [user,setUser] = useContext(userContext)
    
    const handleChange = (e) => {
        setCredentials(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (credentials == ''){
            toast.warning("Please enter an email");
            
        }

        else if (credentials == localStorage.getItem('email')){
            toast.success("Logged in!");
            setUser(credentials[0])
            nav('/')
        }

        else if (localStorage.getItem('email') == null){

            toast.warning("Please sign up first!");

        }

        else {
            toast.error("Incorrect email")
        }

        setCredentials('')
    }

  return (
    <div className='login-creds'>

        <form action="" className='login-form' onSubmit={(e) => {
                    handleSubmit(e)
                }}>

                <label htmlFor="">Email</label>
                <input className='email-input' type="email" placeholder='name@domain.com' value={credentials} onChange = {(e) => {
                    handleChange(e)
                }} />
                <button className='login-btn'>Continue</button>

        </form>
      
    </div>
  )
}

export default LoginCredentials
