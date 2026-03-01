import React from 'react'

const Artist = (props) => {
  return (
    <div className='artist-item'>


         <div className="artist-cover-wrapper">
            <img src={props.image} alt="" className='artist-cover' />
            <button className="play-btn-artist">▶</button>
        </div>

        <div className="artist-details">
            <h4>{props.name}</h4>
            <span>Artist</span>
        </div>


      
    </div>
  )
}

export default Artist
