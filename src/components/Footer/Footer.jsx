import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {


    const nav = useNavigate()

    const redirect = () => {
        nav('/Signup')
    }
  return (
    <div className='footer' onClick={redirect}>
    <div className="footer-con1">
        <h4>Preview of Spotify</h4>
        <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
    </div>
      


      <div className="footer-con2">
        <button className='footer-btn'>Signup free</button>
      </div>
    </div>
  )
}

export default Footer
