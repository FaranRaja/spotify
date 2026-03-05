import React from 'react'
import Email from './Email'
import OtherOptions from './OtherOptions'
import AccountExists from './AccountExists'


const Signup = () => {
  return (
    <div className='signup-page'>
      <div className="signup-content">

        <div className="container-logo">
          <img src="https://img.icons8.com/?size=100&id=11116&format=png&color=FFFFFF" className='logo' alt="" />
        </div>
        
       
            <h1>Sign up to start listening</h1>
        

        <Email />
        <p>or</p>
        
        <OtherOptions />

        <AccountExists />
        

      </div>
      
      
    </div>
  )
}

export default Signup
