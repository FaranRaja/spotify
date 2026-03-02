import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Email = () => {


    const [emailValue, setEmailValue] = useState("")

    const changeEmail = (e) => {
        setEmailValue(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!emailValue) {
            toast.warning("Please enter your email");
            return;
        }

        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            toast.error("Please enter a valid email address");
            return;
        }

        // If valid, save to localStorage
        localStorage.setItem("email", emailValue);
        toast.success("Signed up!");
    }


  return (
    <div className='email'>
      <form action="" className='signup-form'>

        <label htmlFor="email">Email adress</label>
        <input className ="email-input" type="email" placeholder='name@domain.com' value ={emailValue} onChange = {(e) => {
            changeEmail(e)
        }}/>


        <button className='signup-btn' onClick={handleSubmit}>Signup</button>
      </form>
    </div>
  )
}

export default Email
