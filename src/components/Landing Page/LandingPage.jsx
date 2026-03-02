import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../sidebar/Sidebar'
import Middle from '../middle/Middle'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const LandingPage = () => {





  useEffect(() => {

    const welcomed = sessionStorage.getItem("welcomed")

    if (!welcomed) {
      toast.success("Welcome to Spotify")
      sessionStorage.setItem("welcomed",true)
    }
},[])


  return (
    <div>
      <Navbar />
      <div className="mainbody">
          <Sidebar />
          <Middle />
      </div>
    </div>
  )
}

export default LandingPage
