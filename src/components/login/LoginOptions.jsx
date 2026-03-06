import React from 'react'

import LoginOption from './LoginOption'



const LoginOptions = () => {
  return (
    <div className='other-options'>


        <LoginOption img = {"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"} name ={"Google"} />
        <LoginOption img = {"https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png"} name ={"Facebook"} />
        <LoginOption img = {"https://img.icons8.com/?size=100&id=30840&format=png&color=FFFFFF"} name ={"Apple"} />
        
    </div>
  )
}

export default LoginOptions
