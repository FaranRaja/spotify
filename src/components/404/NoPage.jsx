import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoPage = () => {

    const nav = useNavigate()

    const home = () => {
        nav('/')
    }


  return (
    <div className='main-404'>
      <img src="https://open.spotifycdn.com/cdn/images/error-page-logo.24aca703.svg" alt="" />
      <h1>Page Not Found</h1>
      <span>We cant seem to find the page you are looking for.</span>
      <button className='home-404' onClick = {home}>Home</button>
      <p>Help</p>

    </div>
  )
}

export default NoPage
