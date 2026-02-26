import React from 'react'

const Playlists = (props) => {
  return (
    <div className='content-container'>
        <div className="playlist">
            <img src={props.cover} alt="" className='playlist-cover' />
        </div>

        <div className="playlist-details">
            <h3>{props.name}</h3>
            <p>{props.type}</p>
        </div>
      
    </div>
  )
}

export default Playlists
