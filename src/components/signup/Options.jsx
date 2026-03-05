import React from 'react'

const Options = (props) => {
  return (
    <div className='options'>

        
        <button className='signup-option'>
            <img src={props.img} alt="" />
            Signup With {props.name}
            </button>
      
    </div>
  )
}

export default Options
