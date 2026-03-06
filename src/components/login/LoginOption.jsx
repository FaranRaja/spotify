import React from 'react'

const LoginOption = (props) => {
  return (
    <div className='options'>

        <button className='signup-option'>
            <img src={props.img} alt="" />
            Continue With {props.name}
            </button>
      
    </div>
  )
}

export default LoginOption
