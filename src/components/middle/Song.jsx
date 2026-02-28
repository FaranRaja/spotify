import React from 'react'

const Song = (props) => {
  return (
    <div className='song-item'>

      <div className="song-cover-wrapper">
            <img src={props.image} alt="" className='song-cover' />
            <button className="play-btn">▶</button>
        </div>

        <div className="song-details">
            <h4>{props.songName}</h4>
            <span>{props.artist}</span>
        </div>
      
    </div>
  )
}

export default Song
