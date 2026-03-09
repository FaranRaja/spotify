import React from 'react'
import { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'


const Song = (props) => {


  const [modal, setModal] = useState(false)
  const modalOn = () => {
    setModal(true)
  }

  const modalOff = () => {
    setModal(false);
  }

  return (
    <div className='song-item'>

      <div className="song-cover-wrapper">
            <img src={props.image} alt="" className='song-cover' />
            <button className="play-btn" onClick = {modalOn}>▶</button>
        </div>

        <div className="song-details">
            <h4>{props.songName}</h4>
            <span>{props.artist}</span>
        </div>

        {modal && (

        <div className="modal-overlay" onClick ={modalOff}>

          <div className="modal-content" onClick = {(e) => {e.stopPropagation()}}>

              <div className="modal-img-cover">

                  <img src={props.image} alt="" className='modal-song' />

              </div>

              <audio autoplay = "true" controls src={props.audio}></audio>
                

          </div>


        </div>
        
        
        )}
      
    </div>
  )
}

export default Song
